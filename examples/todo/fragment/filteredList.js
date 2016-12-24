import {listWithFinishState}   from './listWithFinishState'
import {filter}   from './filter'


export const filteredList = ( list, filter ) =>
    filter == 'all'
        ? list
        : list.filter( todo => todo.finished == ( filter == 'finished' )  )

filteredList.dependencies = [ listWithFinishState, filter ]
filteredList.stateless    = true
