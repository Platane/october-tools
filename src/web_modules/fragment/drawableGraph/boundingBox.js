import {graph} from './spacial'

const computeBoundingBox = points =>
    points.length==0
        ? {xMax:0,xMin:0,yMax:0,yMin:0}
        : points.reduce(
            (box, p) => ({
                xMax: Math.max( p.x, box.xMax ),
                xMin: Math.min( p.x, box.xMin ),
                yMax: Math.max( p.y, box.yMax ),
                yMin: Math.min( p.y, box.yMin ),
            })
            ,{xMax:-Infinity,xMin:Infinity,yMax:-Infinity,yMin:Infinity}
        )

const enlargeBoundingBox = ( boundingBox, l ) =>
    ({
        xMax : boundingBox.xMax +l ,
        xMin : boundingBox.xMin -l ,
        yMax : boundingBox.yMax +l ,
        yMin : boundingBox.yMin -l ,
    })


export const boundingBox = ({ vertices }) =>
    enlargeBoundingBox( computeBoundingBox( vertices ) , 10 )

boundingBox.dependencies = [ graph ]
