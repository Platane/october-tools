import React, {PropTypes} from 'react'

const Node = ({ x, y, name }) =>
(
    <g className="node">

    </g>
)

Node.PropTypes = {
    name    : PropTypes.string.isRequired,
    x       : PropTypes.number.isRequired,
    y       : PropTypes.number.isRequired,
}

export default Node
