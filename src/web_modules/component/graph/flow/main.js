import FlowAnimator from './flowAnimator'
import {connect}    from 'component/abstract/connect'

export default connect(

    root => [
        root.flow.schedule,
        root.flow.source,
        root.drawableGraph.viewport.translate,
        root.drawableGraph.viewport.scale,
    ]
    ,

    ( schedule, source,  translate, scale ) => {

        const proj = k =>
            ({
                ...k,
                x: k.x * scale + translate.x,
                y: k.y * scale + translate.y,
            })

        return ({
            node    : schedule.node.map( proj ),
            branch  : schedule.branch.map( x => ({...x, points: x.points.map( proj ) }) ),
            source,
            schedule
        })
    }
    ,

    {}
    ,

    FlowAnimator
)
