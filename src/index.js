import React                from 'react'
import App                  from 'component/app'
import {create}             from 'refinery-js'
import Contextify           from 'component/abstract/contextify'


const root = require('fragment')

module.exports = ( store ) => {

    const devToolStore = create( root )

    let i = 1

    store._registerHook( ( action, state ) =>
        devToolStore.dispatch({
            type    : 'catchAction',
            payload : { action, state, id:i++, date:Date.now() }
        })
    )

    window.devStore = devToolStore

    return () =>
        <Contextify store={devToolStore}><App /></Contextify>
}
