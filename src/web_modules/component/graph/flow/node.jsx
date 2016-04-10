import React, {PropTypes} from 'react'

const Node = ({ x, y, changed }) =>
(
    <g className={'flow-node'+ ( changed ? ' flow-node-changed' : '' ) }
        transform={`translate(${x},${y})`}
        >

        <circle cx="0" cy="0" r="2.2" />

    </g>
)

Node.PropTypes = {
    x       : PropTypes.number.isRequired,
    y       : PropTypes.number.isRequired,
    changed : PropTypes.bool.isRequired,
}

export default Node
