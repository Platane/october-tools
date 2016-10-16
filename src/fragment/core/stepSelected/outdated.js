import id                   from './id'
import stepList             from '../stepList'
import changed_by_name      from './changed/by_name'
import fragments_by_name    from 'fragment/core/fragments/by_name'

const outdated = ( id, stepList, changed_by_name, fragments_by_name ) => {
    const o = {}
    const s = stepList.find( x => id == x.id )

    if ( s ) {

        const changed = Object.keys( changed_by_name )

        while( changed.length ){

            const name = changed.shift()

            fragments_by_name[ name ].nexts
                .filter( name => s.state.outdated[ name ] )
                .forEach( name => {
                    o[name] = true
                    changed.push( name )
                })
        }
    }

    return o
}

outdated.dependencies = [ id, stepList, changed_by_name, fragments_by_name ]
outdated.stateless    = true

module.exports = outdated
