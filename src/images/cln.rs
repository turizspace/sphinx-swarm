use super::*;
use crate::config::Node;
use crate::utils::{domain, exposed_ports, host_config};
use anyhow::{Context, Result};
use async_trait::async_trait;
use bollard::container::Config;

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct ClnImage {
    pub name: String,
    pub version: String,
    pub network: String,
    pub peer_port: String,
    pub grpc_port: String,
    pub links: Vec<String>,
}

impl ClnImage {
    pub fn new(name: &str, version: &str, network: &str, peer_port: &str, grpc_port: &str) -> Self {
        Self {
            name: name.to_string(),
            version: version.to_string(),
            network: network.to_string(),
            peer_port: peer_port.to_string(),
            grpc_port: grpc_port.to_string(),
            links: vec![],
        }
    }
    pub fn links(&mut self, links: Vec<&str>) {
        self.links = strarr(links)
    }
}

#[async_trait]
impl DockerConfig for ClnImage {
    async fn make_config(&self, nodes: &Vec<Node>, _docker: &Docker) -> Result<Config<String>> {
        let li = LinkedImages::from_nodes(self.links.clone(), nodes);
        let btc = li.find_btc().context("BTC required for CLN")?;
        Ok(cln(self, &btc))
    }
}

impl DockerHubImage for ClnImage {
    fn repo(&self) -> Repository {
        Repository {
            org: "elementsproject".to_string(),
            repo: "lightningd".to_string(),
        }
    }
}

pub fn cln(img: &ClnImage, btc: &btc::BtcImage) -> Config<String> {
    let version = "v22.11.1"; // docker tag
    let ports = vec![img.peer_port.clone(), img.grpc_port.clone()];
    let root_vol = "/root/.lightning";
    let repo = img.repo();
    let image = format!("{}/{}", repo.org, repo.repo);
    Config {
        image: Some(format!("{}:{}", image, version)),
        hostname: Some(domain(&img.name)),
        domainname: Some(img.name.clone()),
        cmd: Some(vec![
            format!("--alias=sphinx-{}", &img.name),
            format!("--addr=0.0.0.0:{}", &img.peer_port),
            format!("--grpc-port={}", &img.grpc_port),
            format!("--network={}", &img.network),
            format!("--bitcoin-rpcconnect={}", &domain(&btc.name)),
            "--bitcoin-rpcport=18443".to_string(),
            format!("--bitcoin-rpcuser={}", btc.user),
            format!("--bitcoin-rpcpassword={}", btc.pass),
            "--log-level=debug".to_string(),
            "--accept-htlc-tlv-types=133773310".to_string(),
        ]),
        exposed_ports: exposed_ports(ports.clone()),
        env: Some(vec![
            "EXPOSE_TCP=true".to_string(),
            format!("LIGHTNINGD_PORT={}", &img.peer_port),
            format!("LIGHTNINGD_NETWORK={}", &img.network),
        ]),
        host_config: host_config(&img.name, ports, root_vol, None),
        ..Default::default()
    }
}
