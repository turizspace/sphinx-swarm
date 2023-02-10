export interface Stack {
  network: Network;
  nodes: Node[];
  host?: string;
}

export interface Node {
  name: string;
  type: NodeType;
  place: Place;
  version?: string; // Internal always have version
  links?: string[];
  network?: Network;
  url?: string;
  // any other optional field
  [key: string]: string | string[];
}

export type NodeType =
  | "Btc"
  | "Lnd"
  | "Proxy"
  | "Relay"
  | "Tribes"
  | "Meme"
  | "Mqtt"
  | "Auth"
  | "Postgres"
  | "Traefik"
  | "Cache"
  | "Jarvis"
  | "BoltWall"
  | "Neo4j"
  | "NavFiber";

export const allNodeTypes: NodeType[] = [
  "Btc",
  "Lnd",
  "Proxy",
  "Relay",
  "Tribes",
  "Meme",
  "Mqtt",
  "Auth",
  "Postgres",
  "Traefik",
  "Cache",
  "BoltWall",
  "Neo4j",
  "NavFiber",
  "Jarvis"
];

type Place = "Internal" | "External";

type Network = "bitcoin" | "regtest";

const stack: Stack = {
  network: "regtest",
  nodes: [
    {
      place: "Internal",
      type: "Btc",
      version: "v23.0",
      name: "bitcoind",
      network: "regtest",
      user: "user",
      pass: "",
    },
    {
      place: "Internal",
      type: "Lnd",
      name: "lnd",
      version: "v0.14.3-beta.rc1",
      network: "regtest",
      port: "10009",
      http_port: "8881",
      links: ["bitcoind"],
    },
    {
      place: "Internal",
      type: "Proxy",
      name: "proxy",
      version: "0.1.2",
      network: "regtest",
      port: "11111",
      admin_port: "5050",
      admin_token: "",
      store_key: "",
      new_nodes: null,
      links: ["lnd1"],
    },
    {
      place: "Internal",
      type: "Relay",
      version: "v2.2.12",
      name: "relay",
      port: "3000",
      links: ["proxy", "lnd", "tribes", "memes", "cache"],
    },
    {
      place: "Internal",
      type: "Traefik",
      version: "v2.2.1",
      name: "load_balancer",
      links: ["lnd", "relay"],
    },
    {
      place: "Internal",
      type: "Cache",
      version: "0.1.14",
      name: "cache",
      links: ["lnd", "tribes"],
    },
    {
      name: "tribes",
      place: "External",
      type: "Tribes",
      url: "tribes.sphinx.chat",
    },
    {
      name: "memes",
      place: "External",
      type: "Meme",
      url: "meme.sphinx.chat",
    },
  ],
};

const defaultPositions = {
  bitcoind: [90, 100],
  lnd: [360, 200],
  proxy: [660, 140],
  relay: [910, 350],
  load_balancer: [895, 40],
  cache: [660, 250],
  tribes: [260, 400],
  memes: [560, 500],
  jarvis_backend: [1250, 400],
  jarvis_boltwall: [950, 190],
  neo4j: [900, 500],
  navfiber: [600, 300],
};

export { stack, defaultPositions };
