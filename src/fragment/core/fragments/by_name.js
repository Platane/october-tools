const by_name = action => {
    const o = {}
    action.payload.fragments
        .forEach( x =>
            o[ x.name ] = {
                name            : x.name,
                index           : x.index,
                dependencies    : x.dependencies.slice(),
                nexts           : x.nexts.slice(),
                stateless       : x.stateless,
                allActions      : x.allActions,
                actions         : x.actions.slice(),
            }
        )
    return o
}
by_name.actions   = ['core:fragment:init']
by_name.initValue = {}

module.exports = by_name
