import {boundingBox as graphBB} from './boundingBox'

/**
 *
 * to project a point p on the viewport
 * p -> P
 *
 * P = scale * p  +  translate
 *
 *
 * ( notice translate is exprimed in the viewport unit )
 *
 */

const scale_level = [
    0.2,
    0.5,
    1,
    1.32,
    2,
    4,
]
export const zoomLevel = ( action, zoomLevel=2  ) => {

    switch( action.type ){
        case 'graph:viewport:scale:up':
            return Math.min( zoomLevel+1, scale_level.length-1 )

        case 'graph:viewport:scale:down':
            return Math.max( zoomLevel-1, 0 )

        default :
            return zoomLevel
    }
}
zoomLevel.source = true

export const scale = zoomLevel =>
    scale_level[ zoomLevel ]
scale.dependencies = [ zoomLevel ]



export const translate = ( action, a, b={x:0,y:0}, _, previousValue ) => {

    switch( action.type ){
        case 'graph:viewport:translate':
            return {
                x : b.x + action.payload.x,
                y : b.y + action.payload.y,
            }

        case 'graph:viewport:scale:up':
        case 'graph:viewport:scale:down':

            const _a = previousValue( scale )

            const inv = action.payload

            return {
                x : _a * inv.x + b.x - a * inv.x,
                y : _a * inv.y + b.y - a * inv.y,
            }


        default :
            return b
    }
}
translate.source = true
translate.dependencies = [ scale ]
