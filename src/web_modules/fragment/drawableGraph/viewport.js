import {boundingBox as graphBB} from './boundingBox'


// width / height
export const ratio = ( ) => 1



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

export const width = zoom =>
    level[ zoom ] * 200
width.dependencies = [ zoom ]

export const height = ( width, ratio ) =>
    width / ratio
height.dependencies = [ width, ratio ]

export const center = ( action, width_, height_, c={x:0,y:0}, _, previousValue ) => {

    switch( action.type ){
        case 'graph:viewport:center:set':
            return action.payload

        case 'graph:viewport:zoom:increase':
        case 'graph:viewport:zoom:decrease':

            const _width = previousValue( width )
            const _height = previousValue( height )

            if ( width_ == _width && height_ == _height )
                return c

            const inv = action.payload

            return {
                x   : ( _width  * inv.x - _width  / 2 + c.x - width_  * inv.x ) / _width,
                y   : ( _height * inv.y - _height / 2 + c.y - height_ * inv.y ) / _height,
            }

        default :
            return c
    }
}
center.source = true
center.dependencies = [ width, height ]





export const boundingBox = ( center, width, height ) =>
    ({
        xMin    : center.x - width/2,
        yMin    : center.y - height/2,
        xMax    : center.x + width/2,
        yMax    : center.y + height/2,
    })
boundingBox.dependencies = [ center, width, height ]
