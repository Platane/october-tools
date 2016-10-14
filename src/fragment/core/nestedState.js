import stepList from './stepList'
import {nest}   from 'util/object'


const nestedState = ( stepList, nestedState ) =>
    nestedState || ( stepList[ 0 ] && nest( stepList[ 0 ].state.current ) )

nestedState.dependencies = [ stepList ]

module.exports = nestedState
