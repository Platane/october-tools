import React, {PropTypes}   from 'react'
import Action               from './action'
import Payload              from './payload'

const translate = y =>
    ({
        transform       : `translate3d(0,${ 0|y }px,0)`,
        // WebKitTransform : `translate3d(0,${ y }px,0)`,
    })



const TimeLine = ({ actions, yAxis, actionSelectedId,    selectAction }) => {

    const margin = 10

    const height = actions.length
        ? yAxis[ actions[ 0 ].id ]
        : 0

    const actionSelected = actions.find( x => x.id == actionSelectedId )

    return (
        <div className="timeLine" style={{ height: height + margin * 2 }} >

            <div className="timeLine-bar" />

            {
                actions
                    .slice(0,100)
                    .map( action =>

                        <div key={action.id} className="timeLine-item" style={ translate( height - yAxis[ action.id ] ) }>
                            <Action {...action} selected={ actionSelectedId == action.id } selectAction={ selectAction } />
                        </div>

                    )
            }

            { actionSelected &&
                <div className="timeLine-payload" style={ translate( height - yAxis[ actionSelectedId ] + 16 ) }>
                    <Payload {...actionSelected.action } />
                </div>
            }

        </div>
    )
}

TimeLine.PropTypes = {
    action : PropTypes.arrayOf(
        PropTypes.shape({
            id    : PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default TimeLine
