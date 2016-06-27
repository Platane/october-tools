import * as node            from 'fragment/node'


export const graph = ( action ) =>
    action.payload

graph.actions = [ 'success-graph:layoutCompute' ]
graph.initValue = { vertices:[], edges:[] }
