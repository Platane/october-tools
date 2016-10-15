import by_name from './by_name'

const list = by_name =>
    Object.keys( by_name )
        .map( name => by_name[name] )
        .sort( (a,b) => a.index < b.index ? 1 : -1 )

list.dependencies  = [ by_name ]
list.stateless = true

module.exports = list
