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

        case 'object' :
            if ( !value ){
                literal = 'null'
                type    = 'null'
            } else {
                literal = '[object]'
                type    = 'object'
            }
            break

        case 'undefined' :
            literal = 'undefined'
            type    = 'null'
            break

        default :
            literal = value.toString()
    }

    return <div className={ style[type] } >{ literal }</div>
}

module.exports = Value
