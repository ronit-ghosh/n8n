import { Position } from "@xyflow/react";
import { nodeTypes } from "./react-flow";

export type NodeType = "action" | "trigger";
export type Node = keyof typeof nodeTypes;

export interface NodeChangeTypes {
  id: string;
  type: Node;
  nodeType: NodeType;
  data: {
    label?: string;
  };
  position: { x: number; y: number };
  sourcePosition?: Position;
}

interface AvailableNodesType extends Omit<
  NodeChangeTypes,
  "position" | "sourcePosition"
> {
  data: {
    label: string;
    desc: string;
    img: string;
  };
}
export const AVAILABLE_NODES: AvailableNodesType[] = [
  {
    id: "trigger-1",
    type: "priceTrigger",
    nodeType: "trigger",
    data: {
      label: "Price Trigger",
      desc: "Runs whenever the price goes above or below a certain number for an asset",
      img: "/price-trigger.png",
    },
  },
  {
    id: "trigger-2",
    nodeType: "trigger",
    type: "timeTrigger",
    data: {
      label: "Timer Trigger",
      desc: "Run this trigger every x seconds/minutes",
      img: "/time-trigger.png",
    },
  },
  {
    id: "node-1",
    nodeType: "action",
    type: "lighterNode",
    data: {
      label: "Lighter Node",
      desc: "",
      img: "/lighter.png",
    },
  },
  {
    id: "node-2",
    nodeType: "action",
    type: "backpackNode",
    data: {
      label: "Backpack Node",
      desc: "",
      img: "/backpack.png",
    },
  },
  {
    id: "node-3",
    nodeType: "action",
    type: "hyperliquidNode",
    data: {
      label: "Hyperliquid Node",
      desc: "",
      img: "/hyperliquid.png",
    },
  },
];
