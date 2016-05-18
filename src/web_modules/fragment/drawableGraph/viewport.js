import {boundingBox as graphBB} from './boundingBox'

export const center = ( action, c={x:0,y:0} ) =>
    action.type == 'graph:viewport:center:set'
        ? action.payload
        : c

center.source = true

export const zoom = ( ) =>160

// width / height
export const ratio = ( ) => 1


export const boundingBox = ( center, zoom, ratio ) => {
    const width = zoom
    const height = width / ratio

    return {
        xMin    : center.x - width/2,
        yMin    : center.y - height/2,
        xMax    : center.x + width/2,
        yMax    : center.y + height/2,
    }
}
boundingBox.dependencies = [ center, zoom, ratio ]
