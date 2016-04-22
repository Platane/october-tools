
export const list = ( action, previousValue=[] ) => {

    switch( action.type ) {
        case 'todo:add' :
            return [ ...previousValue, action.payload ]

        case 'todo:remove' :
        {
            const i = previousValue.findIndex( ({id}) => id == action.payload.id )

            if ( i==-1 )
                return previousValue

            const value = previousValue.slice()
            value.splice(i,1)

            return value
        }

        case 'todo:rename' :
        {
            if( !value[ i ] || value[ i ].label == action.payload.label )
                return previousValue

            const value = previousValue.slice()

            const i = value.findIndex( x => x.id == action.payload.id )

            value[ i ] = { ...value[ i ], label: action.payload.label }

            return value
        }

        case 'todo:removeMulti' :
        {
            const value = previousValue
                .filter( x => !action.payload.ids.some( id => x.id == id ) )

            return value.length == previousValue.length
                ? previousValue
                : value
        }
    }
}
list.actions = ['todo:add', 'todo:remove', 'todo:removeMulti']
list.defaultValue = []
