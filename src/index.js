import React                from 'react'
import App                  from 'component/app'
import {create}             from 'refinery-js'
import Contextify           from 'component/abstract/contextify'
import computeGraphLayout   from 'util/computeGraphLayout'


const root = require('fragment')

module.exports = ( store ) => {

    const devToolStore = create( root )

    let i = 1

    // register async instructions
    devToolStore.register(

        root.instrument.graph.computed._toCompute,

        _toCompute =>
            _toCompute.forEach( x =>
                computeGraphLayout( x.graph )
                    .then( res =>
                        devToolStore.dispatch({
                            type    : 'success-computeGraphLayout',
                            payload : {
                                nodesHash   : x.nodesHash,
                                vertices    : res.vertices,
                                edges       : res.edges,
                            }
                        })
                    )
                    .catch( err =>
                        devToolStore.dispatch({
                            type    : 'fail-computeGraphLayout',
                            payload : { nonodesHash   : x.nodesHash, err },
                        })
                    )
            )
    )

    // listen all actions on the store
    store._registerHook( ( action, state ) =>
        devToolStore.dispatch({
            type    : 'catchAction',
            payload : { action, state:{ ...state }, id:i++, date:Date.now() }
        })
    )

    devToolStore.dispatch({
        type    : 'core:fragment:init',
        payload : { fragments : store._getFragments() }
    })

    window.devStore = devToolStore

    return () =>
        <Contextify store={devToolStore}><App /></Contextify>
}
