import id           from './id'
import stepList     from '../stepList'

const state = ( id, stepList ) =>
    (stepList.find( x => id == x.id ) || {} ).state

state.dependencies = [ id, stepList ]

module.exports = state
