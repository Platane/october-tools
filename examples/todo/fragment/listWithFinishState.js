
import {list}       from './list'
import {finished}   from './finished'


export const listWithFinishState = ( list, finished ) =>
    list.map( todo => ({ ...todo, finished: !!finished[ todo.id ] }) )

listWithFinishState.dependencies = [ list, finished ]
listWithFinishState.stateless    = true
