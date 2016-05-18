import {boundingBox as graphBB} from './boundingBox'

export const center = ( action, c={x:0,y:0} ) =>
    action.type == 'graph:viewport:center:set'
        ? action.payload
        : c

center.source = true

const level = [
    0.2,
    0.5,
    1,
    2,
    5,
    10,
    20
]
export const zoom = ( action, zoom=3  ) => {

    switch( action.type ){
        case 'graph:viewport:zoom:increase':
            return Math.min( zoom+1, level.length-1 )

        case 'graph:viewport:zoom:decrease':
            return Math.max( zoom-1, 0 )

        default :
            return zoom
    }
}
zoom.source = true

// width / height
export const ratio = ( ) => 1


export const boundingBox = ( center, zoom, ratio ) => {
    const width = level[ zoom ] * 200
    const height = width / ratio

    return {
        xMin    : center.x - width/2,
        yMin    : center.y - height/2,
        xMax    : center.x + width/2,
        yMax    : center.y + height/2,
    }
}
boundingBox.dependencies = [ center, zoom, ratio ]
