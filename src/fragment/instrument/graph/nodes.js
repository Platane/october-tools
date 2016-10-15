import changed_by_name      from 'fragment/core/stepSelected/changed/by_name'

const nodes = ( changed_by_name ) => {

    if ( !changed_by_name )
        return {}

    return changed_by_name
}
nodes.dependencies = [ changed_by_name ]
nodes.stateless    = true

module.exports = nodes
