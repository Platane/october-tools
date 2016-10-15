import state     from '../state'

const changed = ( state ) => {
    const o = {}
    if ( !state )
        return o
    for( let name in state.current )
        if( state.current[name] != state.previous[name] )
            o[name] = true
    return o
}

changed.dependencies = [ state ]
changed.stateless    = true

module.exports = changed
