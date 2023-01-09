use anyhow::Result;
use serde::{Deserialize, Serialize};
use std::{time::Duration, collections::HashMap};

use crate::images::ProxyImage;

pub struct ProxyAPI {
    pub client: reqwest::Client,
    pub url: String,
    pub token: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Balances {
    total: u128,
    balances: HashMap<String, u32>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct BalanceResponse {
    total: u128,
    usercount: u32,
}

impl ProxyAPI {
    pub async fn new(proxy: &ProxyImage) -> Result<Self> {
        let client = reqwest::Client::builder()
            .timeout(Duration::from_secs(20))
            .danger_accept_invalid_certs(true)
            .build()
            .expect("couldnt build proxy reqwest client");

        Ok(Self {
            url: format!("localhost:{}", proxy.admin_port),
            client,
            token: proxy.admin_token.clone().unwrap_or("".to_string()),
        })
    }

    pub async fn get_balance(&self) -> Result<BalanceResponse> {
        let route = format!("http://{}/balances", self.url);

        let res = self
        .client
        .get(route.as_str())
        .header("x-admin-token", self.token.clone())
        .send()
        .await?;

        let balances: Balances = res.json().await?;
        Ok(BalanceResponse {
            total: balances.total,
            usercount: balances.balances.len() as u32,
        })

    }
}
