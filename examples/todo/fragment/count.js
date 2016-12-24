import {list}                       from './list'
import {listWithFinishState}        from './listWithFinishState'

export const all = ( list ) =>
    list.length
all.dependencies = [ list ]
all.stateless    = true

export const finished = ( list ) =>
    list.reduce( (sum,x) => sum + x.finished , 0 )
finished.dependencies = [ listWithFinishState ]
finished.stateless    = true

export const unfinished = ( all, finished ) =>
    all - finished
unfinished.dependencies = [ all, finished ]
unfinished.stateless    = true

export const finished_plus_1 = ( finished ) =>
    finished +1
finished_plus_1.dependencies = [ finished ]
finished_plus_1.stateless    = true

export const finished_plus_2 = x => x+1
finished_plus_2.dependencies = [ finished_plus_1 ]
finished_plus_2.stateless    = true

export const finished_plus_3 = x => x+1
finished_plus_3.dependencies = [ finished_plus_2 ]
finished_plus_3.stateless    = true

export const finished_plus_4 = x => x+1
finished_plus_4.dependencies = [ finished_plus_3 ]
finished_plus_4.stateless    = true

export const finished_plus_5 = x => x+1
finished_plus_5.dependencies = [ finished_plus_4 ]
finished_plus_5.stateless    = true
