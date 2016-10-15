import {connect}            from 'component/abstract/connect'
import Graph                from './graph'


module.exports = connect(

    root => [
        root.instrument.graph.computed.layout,
        root.instrument.graph.viewport.zoom,
        root.instrument.graph.viewport.origin,
    ],

    ( layout, zoom, origin ) => ({
        computing   : !layout,
        edges       : layout && layout.edges,
        vertices    : layout && layout.vertices,
        viewport    : { zoom, origin },
    }),

    {},

    Graph
)
