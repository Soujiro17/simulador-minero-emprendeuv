/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable one-var */
import React, { forwardRef, useState } from "react";
import { GraphView } from "react-digraph";
import nodeConfig, { EMPTY_EDGE_TYPE } from "./config";

const GraphConfig = nodeConfig;

const NODE_KEY = "id"; // Allows D3 to correctly update DOM

const Graph = forwardRef(function Graph(
  { nodes = [], setNodes, edges = [], setEdges },
  ref,
) {
  const [selected, setSelected] = useState(null);

  const { NodeTypes, NodeSubtypes, EdgeTypes } = GraphConfig;

  function onCreateEdge(src, tgt) {
    const newEdge = {
      source: src.id,
      target: tgt.id,
      type: EMPTY_EDGE_TYPE,
    };

    setEdges((prev) => [...prev, newEdge]);
  }

  function onSelectNode(viewNode, event) {
    setSelected(viewNode);
  }

  function onUpdateNode(viewNode) {
    onSelectNode(viewNode);
    var i, index;
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].id === viewNode.id) index = i;
    }

    var mycopy = nodes;
    mycopy[index] = viewNode;
    setNodes(mycopy);
  }

  // function onDeleteNode(viewNode, nodeId, nodeArr) {
  //   const newEdges = edges.filter((edge, i) => {
  //     return edge.source !== viewNode.id && edge.target !== viewNode.id;
  //   });

  //   var newNodes = nodes.filter((node, i) => {
  //     return node.id !== viewNode.id;
  //   });

  //   setEdges(newEdges);
  //   setNodes(newNodes);
  // }

  function onSelectEdge(viewEdge) {
    setSelected(viewEdge);
  }

  function onSwapEdge(sourceViewNode, targetViewNode, viewEdge) {
    var i, index;
    for (i = 0; i < edges.length; i++) {
      if (
        edges[i].source === viewEdge.source &&
        edges[i].target === viewEdge.target
      )
        index = i;
    }

    const edge = {
      source: sourceViewNode.id,
      target: targetViewNode.id,
      handleText: viewEdge.handleText,
      type: viewEdge.type,
    };

    var mycopy = edges;

    mycopy[index] = edge;

    setEdges(mycopy);
  }

  function onDeleteEdge(e, ed) {
    var i, index;
    for (i = 0; i < edges.length; i++) {
      if (edges[i].source === e.source && edges[i].target == e.target)
        index = i;
    }

    var mycopy = edges;
    mycopy.splice(index, 1);
    setEdges(mycopy);
    // implement find index by id first
  }

  return (
    <GraphView
      ref={ref}
      nodeKey={NODE_KEY}
      nodes={nodes}
      edges={edges}
      selected={selected}
      nodeTypes={NodeTypes}
      nodeSubtypes={NodeSubtypes}
      edgeTypes={EdgeTypes}
      // onCreateNode={(x, y) => onCreateNodeClick(x, y)}
      onUpdateNode={(node) => onUpdateNode(node)}
      // onDeleteNode={(viewNode, nodeId, nodeArr) =>
      //   onDeleteNode(viewNode, nodeId, nodeArr)
      // }
      onCreateEdge={(src, tgt) => onCreateEdge(src, tgt)}
      onSwapEdge={(src, tgt, view) => onSwapEdge(src, tgt, view)}
      onDeleteEdge={(e, edges) => onDeleteEdge(e, edges)}
      onSelectNode={(node, e) => onSelectNode(node, e)}
      onSelectEdge={(edge) => onSelectEdge(edge)}
    />
  );
});

export default Graph;
