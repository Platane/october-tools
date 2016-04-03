
import {list}       from './list'
import {finished}   from './finished'


export const listWithFinishState = ( list, finished, previousValue=[] ) =>
    list.map( todo => ({ ...todo, finished: !!finished[ todo.id ] }) )

listWithFinishState.dependencies = [ list, finished ]
