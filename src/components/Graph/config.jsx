/*
  Example config for GraphView component
*/
import React from "react";
import Pala from "../Icons/Pala";
import StockPile from "../Icons/StockPile";

export const NODE_KEY = "id"; // Key used to identify nodes

export const PALA_TYPE = "palaNode"; // Empty node type
export const STOCK_PILE_TYPE = "stockPileNode"; // Empty node type

export const EMPTY_EDGE_TYPE = "emptyEdge";

export const nodeTypes = [PALA_TYPE];
export const edgeTypes = [EMPTY_EDGE_TYPE];

const palaShape = <Pala />;
const stockPileShape = <StockPile />;

const emptyEdgeShape = (
  <symbol viewBox="0 0 50 50" id="emptyEdge">
    <circle cx="25" cy="25" r="8" fill="currentColor" />
  </symbol>
);

const config = {
  EdgeTypes: {
    emptyEdge: {
      shape: emptyEdgeShape,
      shapeId: "#emptyEdge",
      typeText: "Empty",
    },
  },
  NodeSubtypes: {},
  NodeTypes: {
    palaNode: {
      shape: palaShape,
      shapeId: "#palaNode",
      typeText: "Pala",
    },
    stockPileNode: {
      shape: stockPileShape,
      shapeId: "#stockPileNode",
      typeText: "StockPile",
    },
  },
};

export default config;
