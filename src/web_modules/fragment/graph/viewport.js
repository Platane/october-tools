import {viewport as computeViewport }   from 'compute/graph'
import {nodePosition}                       from './spacial'

export const viewport = ( position ) =>
    computeViewport( Object.keys(position).map( key => position[key]) )

viewport.dependencies = [ nodePosition ]

export const largeViewport = ( viewport ) => ({
    xMax: viewport.xMax + 20,
    xMin: viewport.xMin - 20,
    yMax: viewport.yMax + 20,
    yMin: viewport.yMin - 20,
})
largeViewport.dependencies = [ viewport ]
