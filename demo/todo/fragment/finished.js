import {list} from './list'

export const finished = ( action, previousValue={} ) => {

    switch( action.type ) {
        case 'todo:finish' :
            return { ...previousValue, [action.payload.id]:true }

        case 'todo:unfinish' :

            const value = { ...previousValue }
            delete value[ action.payload.id ]
            return value

        default:
            return previousValue
    }
}
finished.source = true
