
export const list = ( action, previousValue=[] ) => {

    switch( action.type ) {
        case 'todo:add' :
            return [ ...previousValue, action.payload ]

        case 'todo:remove' :
            const i = previousValue.findIndex( ({id}) => id == action.payload.id )

            if ( i==-1 )
                return previousValue

            const value = previousValue.splice()
            value.splice(i,1)

            return value
    }
}
list.actions = ['todo:add', 'todo:remove']
list.defaultValue = []


export const count = ( list, previousValue, getValue, getPreviousValue ) =>
    list.length
count.dependencies = [ list ]
