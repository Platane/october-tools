export const graph = ( action ) =>
    action.payload.graph

graph.defaultValue = []
graph.actions = [ 'graph:init' ]
