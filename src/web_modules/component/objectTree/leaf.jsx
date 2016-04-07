import React, {PropTypes}   from 'react'

const Leaf = ({ x }) => {
    switch( typeof x  ) {
        case 'number' :
            return <div className="objectTree-leaf objectTree-leaf--number">{ x }</div>

        case 'boolean' :
            return <div className="objectTree-leaf objectTree-leaf--bool">{ x ? 'true' : 'false' }</div>

        case 'string' :
            return <div className="objectTree-leaf objectTree-leaf--string">{ `"${x}"` }</div>

        case 'function' :
            return <div className="objectTree-leaf objectTree-leaf--func">{ `function ${x.name}` }</div>

        default :
            return <div className="objectTree-leaf">{ x }</div>
    }
}

export default Leaf
