import id           from './id'
import stepList     from '../stepList'

const action = ( id, stepList ) =>
    (stepList.find( x => id == x.id ) || {} ).action

action.dependencies = [ id, stepList ]

module.exports = action
