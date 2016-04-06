import {list}                       from './list'
import {listWithFinishState}        from './listWithFinishState'

export const all = ( list ) =>
    list.length
all.dependencies = [ list ]

export const finished = ( list ) =>
    list.reduce( (sum,x) => sum + x.finished , 0 )
finished.dependencies = [ listWithFinishState ]

export const unfinished = ( all, finished ) =>
    all - finished
unfinished.dependencies = [ all, finished ]
