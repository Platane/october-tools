import by_name  from './by_name'
import {nest}   from 'util/object'


const tree = by_name => {
    const o = {}
    for( let name in by_name )
        o[ name ] = name
    return nest( o )
}

tree.dependencies = [ by_name ]
tree.stateless    = true

module.exports = tree
