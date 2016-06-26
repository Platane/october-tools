import {list as actionList}     from 'fragment/action/list'


const scale = () => 0.00025
const min   = () => 15
const max   = () => 100

// attribute a y value for each action
export const yAxis = ( action, actionList, scale, min, max, _yAxis ) => {

    // let's assume the only diff possible is a new one at actionList[0]
    // on the action catchAction

    if ( action.type != 'catchAction' ){
        console.warn('now panic')
        return _yAxis
    }

    const { id, date } = actionList[0]

    if ( !id || _yAxis[ id ] )
        // no change
        return _yAxis

    if ( !actionList[1] )
        // init
        return { [id]: 0 }

    const deltaDate = ( date - actionList[1].date )

    const deltaY    = Math.exp( 1 - 1 / ( deltaDate * scale ) ) * ( max - min ) + min

    const lastY     = _yAxis[ actionList[1].id ]

    return { ..._yAxis, [id]:lastY + deltaY }
}
yAxis.actions = [ 'catchAction' ]
yAxis.initValue = {}
yAxis.dependencies = [ actionList, scale, min, max ]
