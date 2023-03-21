(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{283:function(e,a,t){e.exports=t.p+"assets/img/null_graph_trivial.76e6f83c.jpg"},284:function(e,a,t){e.exports=t.p+"assets/img/directed_undirected_graphs.97e50258.jpeg"},285:function(e,a,t){e.exports=t.p+"assets/img/connected_disconnected_graphs.a1349138.jpeg"},286:function(e,a,t){e.exports=t.p+"assets/img/regular_complete_graph.d51a18fb.jpeg"},287:function(e,a,t){e.exports=t.p+"assets/img/cycle_cyclic_graph.bfb9a070.jpeg"},288:function(e,a,t){e.exports=t.p+"assets/img/bipartite_graph.4dbcd929.jpeg"},289:function(e,a,t){e.exports=t.p+"assets/img/tree_vs_graph.75e56aa3.jpg"},290:function(e,a,t){e.exports=t.p+"assets/img/adjacency_mat.dd73b597.jpeg"},291:function(e,a,t){e.exports=t.p+"assets/img/adjacency_list.6c2eb1c8.jpg"},292:function(e,a,t){e.exports=t.p+"assets/img/adj_list_vs_matrix.7ceb27e2.png"},293:function(e,a,t){e.exports=t.p+"assets/img/applications_graph.d91bdbed.jpg"},314:function(e,a,t){"use strict";t.r(a);var r=t(10),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"graphs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphs"}},[e._v("#")]),e._v(" Graphs")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("A Graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(V, E).")]),e._v(" "),a("p",[e._v("Graphs are a set of nodes, and a set of edges between the nodes.")]),e._v(" "),a("p",[e._v("Nodes connected by an edge are called "),a("em",[e._v("adjacent")]),e._v(" (aka "),a("em",[e._v("neighbors")]),e._v(").")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"components-of-a-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components-of-a-graph"}},[e._v("#")]),e._v(" Components of a graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("Vertices: Vertices are the fundamental units of the graph. Sometimes, vertices are also known as vertex or nodes. Every node/vertex can be labeled or unlabelled.")]),e._v(" "),a("li",[e._v("Edges: Edges are drawn or used to connect two nodes of the graph. It can be ordered pair of nodes in a directed graph. Edges can connect any two nodes in any possible way. There are no rules. Sometimes, edges are also known as arcs. Every edge can be labelled/unlabelled.")])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"properties-of-graphs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties-of-graphs"}},[e._v("#")]),e._v(" Properties of Graphs")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("The basic properties of a graph include:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Vertices (nodes):")]),e._v(" The points where edges meet in a graph are known as vertices or nodes. A vertex can represent a physical object, concept, or abstract entity.")]),e._v(" "),a("li",[a("strong",[e._v("Edges:")]),e._v(" The connections between vertices are known as edges. They can be undirected (bidirectional) or directed (unidirectional).")]),e._v(" "),a("li",[a("strong",[e._v("Weight:")]),e._v(" A weight can be assigned to an edge, representing the cost or distance between two vertices. A weighted graph is a graph where the edges have weights.")]),e._v(" "),a("li",[a("strong",[e._v("Degree:")]),e._v(" The degree of a vertex is the number of edges that connect to it. In a directed graph, the in-degree of a vertex is the number of edges that point to it, and the out-degree is the number of edges that start from it.")]),e._v(" "),a("li",[a("strong",[e._v("Path:")]),e._v(" A path is a sequence of vertices that are connected by edges. A simple path does not contain any repeated vertices or edges.")]),e._v(" "),a("li",[a("strong",[e._v("Cycle:")]),e._v(" A cycle is a path that starts and ends at the same vertex. A simple cycle does not contain any repeated vertices or edges.")]),e._v(" "),a("li",[a("strong",[e._v("Connectedness:")]),e._v(" A graph is said to be connected if there is a path between any two vertices. A disconnected graph is a graph that is not connected.")]),e._v(" "),a("li",[a("strong",[e._v("Planarity:")]),e._v(" A graph is said to be planar if it can be drawn on a plane without any edges crossing each other.")]),e._v(" "),a("li",[a("strong",[e._v("Bipartiteness:")]),e._v(" A graph is said to be bipartite if its vertices can be divided into two disjoint sets such that no two vertices in the same set are connected by an edge.")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("O(n) <= #edges <= O(n^2)")])]),e._v(" "),a("p",[a("strong",[e._v("sparse graph: #edges << #nodes")])]),e._v(" "),a("p",[a("strong",[e._v("dense graph: #edges ~ #nodes")])])]),e._v(" "),a("h2",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"_1-null-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-null-graph"}},[e._v("#")]),e._v(" 1. Null Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("A graph is known as a null graph if there are no edges in the graph.")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_2-trivial-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-trivial-graph"}},[e._v("#")]),e._v(" 2. Trivial Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("Graph having only a single vertex, it is also the smallest graph possible.")])]),e._v(" "),a("img",{attrs:{src:t(283)}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_3-undirected-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-undirected-graph"}},[e._v("#")]),e._v(" 3. Undirected Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("A graph in which edges do not have any direction. That is the nodes are unordered pairs in the definition of every edge.")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_4-directed-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-directed-graph"}},[e._v("#")]),e._v(" 4. Directed Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("A graph in which edge has direction. That is the nodes are ordered pairs in the definition of every edge.")])]),e._v(" "),a("img",{attrs:{src:t(284)}}),e._v(" "),a("p",[e._v("Directed graphs can contain "),a("em",[e._v("cycles")]),e._v(" (we call these graphs "),a("em",[e._v("cyclic")]),e._v(")")]),e._v(" "),a("p",[e._v("Nodes within a directed graph can be "),a("em",[e._v("weakly")]),e._v(" or "),a("em",[e._v("strongly")]),e._v(" connected.")]),e._v(" "),a("p",[a("em",[e._v("weakly connected")]),e._v(" means that there is a path between the nodes.")]),e._v(" "),a("p",[a("em",[e._v("strongly connected")]),e._v(" means that there is a path between the nodes in both directions.")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_5-connected-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-connected-graph"}},[e._v("#")]),e._v(" 5. Connected Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("The graph in which from one node we can visit any other node in the graph is known as a connected graph.")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_6-disconnected-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-disconnected-graph"}},[e._v("#")]),e._v(" 6. Disconnected Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("The graph in which at least one node is not reachable from a node is known as a disconnected graph.")])]),e._v(" "),a("img",{attrs:{src:t(285)}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_7-regular-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-regular-graph"}},[e._v("#")]),e._v(" 7. Regular Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("The graph in which the degree of every node (vertex) is equal to K is called K regular graph.")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_8-complete-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-complete-graph"}},[e._v("#")]),e._v(" 8. Complete Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("The graph in which from each node there is an edge to each other node.")])]),e._v(" "),a("img",{attrs:{src:t(286)}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_9-cycle-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-cycle-graph"}},[e._v("#")]),e._v(" 9. Cycle Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("The graph in which the graph is a cycle in itself, the degree of each vertex is 2.")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_10-cyclic-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-cyclic-graph"}},[e._v("#")]),e._v(" 10. Cyclic Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("A graph containing at least one cycle is known as a Cyclic graph.")])]),e._v(" "),a("img",{attrs:{src:t(287)}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_11-directed-acyclic-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-directed-acyclic-graph"}},[e._v("#")]),e._v(" 11. Directed Acyclic Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("A Directed Graph that does not contain any cycle.")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_12-bipartite-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-bipartite-graph"}},[e._v("#")]),e._v(" 12. Bipartite Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("A graph in which vertex can be divided into two sets such that vertex in each set does not contain any edge between them.")])]),e._v(" "),a("img",{attrs:{src:t(288)}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_13-weighted-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-weighted-graph"}},[e._v("#")]),e._v(" 13. Weighted Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("A graph in which the edges are already specified with suitable weight is known as a weighted graph.")]),e._v(" "),a("li",[e._v("Weighted graphs can be further classified as directed weighted graphs and undirected weighted graphs.")])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"tree-vs-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-vs-graph"}},[e._v("#")]),e._v(" Tree vs Graph")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("Trees are the restricted types of graphs, just with some more rules.")]),e._v(" "),a("li",[e._v("Every tree will always be a graph but not all graphs will be trees.")]),e._v(" "),a("li",[e._v("Linked List, Trees, and Heaps all are special cases of graphs.")])]),e._v(" "),a("img",{attrs:{src:t(289)}}),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"representation-of-graphs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#representation-of-graphs"}},[e._v("#")]),e._v(" Representation of Graphs")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("There are two ways to store a graph:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#adjacency-matrix"}},[e._v("Adjacency Matrix")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#adjacency-list"}},[e._v("Adjacency List")])])]),e._v(" "),a("h3",{attrs:{id:"adjacency-matrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjacency-matrix"}},[e._v("#")]),e._v(" Adjacency Matrix")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("In this method, the graph is stored in the form of the 2D matrix where rows and columns denote vertices.")]),e._v(" "),a("li",[e._v("Each entry in the matrix represents the weight of the edge between those vertices.")])]),e._v(" "),a("img",{attrs:{src:t(290)}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"adjacency-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjacency-list"}},[e._v("#")]),e._v(" Adjacency List")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("This graph is represented as a collection of linked lists.")]),e._v(" "),a("li",[e._v("There is an array of pointer which points to the edges connected to that vertex.")])]),e._v(" "),a("img",{attrs:{src:t(291)}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"adjacency-list-vs-adjacency-matrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjacency-list-vs-adjacency-matrix"}},[e._v("#")]),e._v(" Adjacency List vs Adjacency Matrix")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("When the graph contains a large number of edges then it is good to store it as a matrix because only some entries in the matrix will be empty.")]),e._v(" "),a("li",[e._v("An algorithm such as Prim’s and Dijkstra adjacency matrix is used to have less complexity.")])]),e._v(" "),a("img",{attrs:{src:t(292)}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"real-life-applications-of-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#real-life-applications-of-graph"}},[e._v("#")]),e._v(" Real-Life Applications of Graph")]),e._v(" "),a("hr"),e._v(" "),a("img",{attrs:{src:t(293)}})])}),[],!1,null,null,null);a.default=s.exports}}]);