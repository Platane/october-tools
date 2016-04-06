import React, {PropTypes} from 'react'

const Node = ({ x, y, name }) =>
(
    <g className="node" transform={`translate(${x},${y})`}>
        <circle cx="0" cy="0" r="0.6" />
        <text x="1" y="0.1" font-family="Verdana" font-size="3" fill="#888">{ name }</text>
    </g>
)

Node.PropTypes = {
    name    : PropTypes.string.isRequired,
    x       : PropTypes.number.isRequired,
    y       : PropTypes.number.isRequired,
}

export default Node
