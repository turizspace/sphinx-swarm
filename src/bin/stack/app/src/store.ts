import { writable, derived } from "svelte/store";
import type { Node, Stack } from "./nodes";
import { initialUsers } from "./relay/users";
import type { User } from "./relay/users";
import type { Tribe, Person, TribeData } from "./api/tribes";
import type { Channel, Peer } from "./api/lnd";
import type { BtcInfo } from "./api/btc";
import type { ProxyBalance } from "./api/proxy";
import * as api from "./api";

export const emptyStack: Stack = { network: "regtest", nodes: [] };

export const selectedNode = writable<Node>();

export const stack = writable<Stack>(emptyStack);

export const users = writable<User[]>(initialUsers);

export const allTribes = writable<TribeData[]>([]);

export const tribes = writable<Tribe>({
  page: 1,
  total: 0,
  data: [],
});

export const people = writable<Person[]>([]);

export const channels = writable<{ [tag: string]: Channel[] }>({});

export const proxy = writable<ProxyBalance>({
  total: 0,
  user_count: 0,
});

export const walletBalance = writable<number>(0);

export const lightningAddresses = writable<{ [tag: string]: string }>({});

export const btcinfo = writable<BtcInfo>();

export const peers = writable<{ [tag: string]: Peer[] }>({});

export const nodeBalances = writable<{[tag: string]: number}>({});

export const balances = derived(
  [channels, selectedNode],
  ([$channels, $selectedNode]) => {
    if (!($selectedNode && $selectedNode.name)) {
      return { inbound: 0, outbound: 0 };
    }
    const tag = $selectedNode.name;
    return {
      inbound:
        $channels[tag] && $channels[tag].length
          ? $channels[tag].reduce((acc, chan) => acc + chan.remote_balance, 0)
          : 0,
      outbound:
        $channels[tag] && $channels[tag].length
          ? $channels[tag].reduce((acc, chan) => acc + chan.local_balance, 0)
          : 0,
    };
  }
);

async function fetchTribes() {
  let tribesKey = "tribes";
  let tribes = [];

  const setTribes = (tribes) =>
    localStorage.setItem("tribes", JSON.stringify(tribes));

  const tribesApi = await api.tribes.get_tribes("tribes.sphinx.chat");

  if (localStorage.getItem(tribesKey)) {
    tribes = JSON.parse(localStorage.getItem(tribesKey));

    if (tribesApi.length > tribes.length) {
      localStorage.setItem(tribesKey, JSON.stringify(tribesApi));
      setTribes(tribesApi);
    }
  } else {
    tribes = tribesApi;
    setTribes(tribes);
  }

  allTribes.set(tribes);
}

fetchTribes();
