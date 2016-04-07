import {listWithChange} from 'fragment/action'

export const selectedId = ( action ) =>
    action.payload.id


selectedId.defaultValue = null
selectedId.actions = [ 'action:select' ]


export const selected = ( selectedId, list ) =>
    list.find( ({id}) => id == selectedId )

selected.dependencies = [ selectedId, listWithChange ]
