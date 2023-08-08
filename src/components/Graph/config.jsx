/*
  Example config for GraphView component
*/
import React from "react";

export const NODE_KEY = "id"; // Key used to identify nodes

// These keys are arbitrary (but must match the config)
// However, GraphView renders text differently for empty types
// so this has to be passed in if that behavior is desired.
export const EMPTY_TYPE = "empty";
export const CUSTOM_EMPTY_TYPE = "customEmpty"; // Empty node type
export const EMPTY_EDGE_TYPE = "emptyEdge";

export const nodeTypes = [EMPTY_TYPE, CUSTOM_EMPTY_TYPE];
export const edgeTypes = [EMPTY_EDGE_TYPE];

const customEmptyShape = (
  <symbol viewBox="0 0 200 200" id="customEmpty">
    <circle cx="100" cy="100" r="50" />
    <g>
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">test</div>
      </foreignObject>
    </g>
  </symbol>
);

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
    customEmpty: {
      shape: customEmptyShape,
      shapeId: "#customEmpty",
      typeText: "None",
    },
  },
};

export default config;
