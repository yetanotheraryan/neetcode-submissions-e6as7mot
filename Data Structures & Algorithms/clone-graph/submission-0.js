/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        let oldToNew = new Map();

        function dfs(node) {
            if (oldToNew.has(node)){
                return oldToNew.get(node);
            }
            let copy =  new Node(node.val);
            oldToNew.set(node, copy)
            // console.log(`node neighbors`, node.neighbors)
            for(let nei of node.neighbors){
                copy.neighbors.push(dfs(nei));
            }
            return copy;
        }
        return dfs(node)
    }

    //     if (!node) return null;

    // const oldToNew = new Map();

    // function dfs(node) {
    //     if (oldToNew.has(node)) {
    //         return oldToNew.get(node);
    //     }

    //     const copy = new Node(node.val);
    //     oldToNew.set(node, copy); 

    //     for (const nei of node.neighbors) {
    //         copy.neighbors.push(dfs(nei));
    //     }

    //     return copy;
    // }

    // return dfs(node);
    // }
}
