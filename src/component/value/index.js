import React    from 'react'

import style    from './style.mcss'

const Value = ({ value }) => {

    let literal
    let type
    switch( typeof value ){
        case 'string' :
            literal = `"${value}"`
            type    = 'string'
            break

        case 'number' :
            literal = value
            type    = 'number'
            break

        case 'boolean' :
            literal = value ? 'true' : 'false'
            type    = 'bool'
            break

        case 'function' :
            literal = 'function'
            type    = 'function'
            break

        case 'object' :
            if ( !value ){
                literal = 'null'
                type    = 'null'
            } else if ( Array.isArray( value ) ) {
                literal = `Array (${value.length})`
                type    = 'object'
            } else {
                literal = 'Object'
                type    = 'object'
            }
            break

        case 'undefined' :
            literal = 'undefined'
            type    = 'null'
            break

        default :
            literal = value.toString()
            type    = 'object'
    }

    return <div className={ style[type] } >{ literal }</div>
}

module.exports = Value
