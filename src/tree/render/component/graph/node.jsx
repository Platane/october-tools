import React, {PropTypes} from 'react'

const Node = ({ x, y, name }) =>
(
    <g className="node" transform={`translate(${x},${y})`}>
        <circle cx="0" cy="0" r="5" />
        <text x="6" y="4" font-family="Verdana" font-size="10">{ name }</text>
    </g>
)

Node.PropTypes = {
    name    : PropTypes.string.isRequired,
    x       : PropTypes.number.isRequired,
    y       : PropTypes.number.isRequired,
}

export default Node
