import React, {PropTypes} from 'react'

const Node = ({ x, y, name,   selected, selectNode }) =>
(
    <g className={'node' + ( selected ? ' node--selected' : '' ) }
        transform={`translate(${x},${y})`}
        onClick={ () => selectNode( name ) }
        >

        <circle cx="0" cy="0" r="6.5" fill="rgba(0,0,0,0)" />

        <circle className="node-tic" cx="0" cy="0" r="1" />

        <text x="1" y="0.1">{ name }</text>
    </g>
)

Node.PropTypes = {
    name    : PropTypes.string.isRequired,
    x       : PropTypes.number.isRequired,
    y       : PropTypes.number.isRequired,
}

export default Node
