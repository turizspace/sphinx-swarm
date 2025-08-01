use super::traefik::traefik_labels;
use super::*;
use crate::config::Node;
use crate::images::bot::BotImage;
use crate::utils::{domain, exposed_ports, host_config};
use anyhow::{Context, Result};
use async_trait::async_trait;
use bollard::container::Config;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct BuiltinImage {
    pub name: String,
    pub version: String,
    pub port: String,
    pub msg_token: String,
    pub host: Option<String>,
    pub links: Links,
}

impl BuiltinImage {
    pub fn new(name: &str, version: &str, port: &str) -> Self {
        Self {
            name: name.to_string(),
            version: version.to_string(),
            port: port.to_string(),
            msg_token: crate::secrets::hex_secret_32(),
            host: None,
            links: vec![],
        }
    }
    pub fn host(&mut self, eh: Option<String>) {
        if let Some(h) = eh {
            self.host = Some(format!("{}.{}", self.name, h));
        }
    }
    pub fn links(&mut self, links: Vec<&str>) {
        self.links = strarr(links)
    }
}

#[async_trait]
impl DockerConfig for BuiltinImage {
    async fn make_config(&self, nodes: &Vec<Node>, _docker: &Docker) -> Result<Config<String>> {
        let li = LinkedImages::from_nodes(self.links.clone(), nodes);
        let bot = li.find_bot().context("Builtin: No Bot")?;
        Ok(builtin(self, &bot)?)
    }
}

impl DockerHubImage for BuiltinImage {
    fn repo(&self) -> Repository {
        Repository {
            registry: Registry::DockerHub,
            org: "sphinxlightning".to_string(),
            repo: "sphinx-builtin-bots".to_string(),
            root_volume: "/home/.builtin".to_string(),
        }
    }
}

fn builtin(img: &BuiltinImage, bot: &BotImage) -> Result<Config<String>> {
    let repo = img.repo();
    let image = img.image();

    let root_vol = &repo.root_volume;

    let ports = vec![img.port.clone()];

    let env = vec![
        format!("DB_PATH={}", "/home/.builtin/bots.db"),
        format!("BOT_ADMIN_TOKEN={}", bot.admin_token),
        format!("BOT_URL=http://{}:{}", domain(&bot.name), bot.port),
        format!("PORT={}", img.port),
        format!("MSG_TOKEN={}", img.msg_token),
    ];

    let mut c = Config {
        image: Some(format!("{}:{}", image, img.version)),
        hostname: Some(domain(&img.name)),
        exposed_ports: exposed_ports(ports.clone()),
        host_config: host_config(&img.name, ports, root_vol, None, None),
        env: Some(env),
        ..Default::default()
    };
    if let Some(host) = &img.host {
        c.labels = Some(traefik_labels(&img.name, &host, &img.port, false))
    }
    Ok(c)
}
