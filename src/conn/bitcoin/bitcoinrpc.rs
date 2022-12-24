extern crate bitcoincore_rpc;

use crate::images::BtcImage;
use anyhow::Result;
use bitcoincore_rpc::bitcoin::{Address, BlockHash};
use bitcoincore_rpc::{Auth, Client, RpcApi};
use bitcoincore_rpc_json::GetBlockchainInfoResult;
use std::str::FromStr;

pub struct BitcoinRPC(Client);

impl BitcoinRPC {
    pub fn new(btc: &BtcImage, url: &str, port: &str) -> Result<Self> {
        let btc_url: String = format!("{}:{}", url, port);
        Ok(Self(Client::new(
            &btc_url,
            Auth::UserPass(btc.user.to_string(), btc.pass.to_string()),
        )?))
    }

    pub fn get_info(&self) -> Result<GetBlockchainInfoResult> {
        Ok(self.0.get_blockchain_info()?)
    }

    pub fn test_mine(&self, n: u64, addy: &str) -> Result<Vec<BlockHash>> {
        let address = Address::from_str(addy)?;
        Ok(self.0.generate_to_address(n, &address)?)
    }
}