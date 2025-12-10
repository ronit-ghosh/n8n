"use client";

import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  EdgeChange,
  Edge,
  Connection,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { SideSheet } from "./side-sheet";
import PriceTrigger from "./triggers/price-trigger";
import timeTrigger from "./triggers/time-trigger";
import BackpackNode from "./nodes/backpack-node";
import HyperliquidNode from "./nodes/hyperliquid-node";
import LighterNode from "./nodes/lighter-node";
import { Node, NodeChangeTypes, NodeType } from "./dashboard";

export const nodeTypes = {
  priceTrigger: PriceTrigger,
  timeTrigger: timeTrigger,
  backpackNode: BackpackNode,
  hyperliquidNode: HyperliquidNode,
  lighterNode: LighterNode,
};

export default function ReactFlowComponent() {
  const [nodes, setNodes] = useState<NodeChangeTypes[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [hasTrigger, setHasTrigger] = useState(false);

  const onNodesChange = useCallback(
    (changes: NodeChange<NodeChangeTypes>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  const onSelect = (
    id: string,
    type: Node,
    nodeType: NodeType,
    label: string,
  ) => {
    if (nodeType === "trigger") {
      setHasTrigger(true);
    }
    setNodes(() => [
      ...nodes,
      { id, type, nodeType, data: { label }, position: { x: 0, y: 0 } },
    ]);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <SideSheet
          hasTrigger={hasTrigger}
          onSelect={(id, type, nodeType, label) =>
            onSelect(id, type, nodeType, label)
          }
        />
        <Background
          bgColor="#1b1b1b"
          color="#848484"
          variant={BackgroundVariant.Dots}
        />
        <Controls
          style={{
            color: "#111",
            flexDirection: "row",
            borderRadius: "0.25rem",
          }}
        />
        <MiniMap
          style={{
            backgroundColor: "#1b1b1b",
          }}
        />
      </ReactFlow>
    </div>
  );
}
