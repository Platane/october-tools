let i=1
export const addTodo = label =>
    ({
        type    : 'todo:add',
        payload : { label, id:i++ }
    })

export const renameTodo = ( id, label ) =>
    ({
        type    : 'todo:rename',
        payload : { id, label }
    })

export const removeTodo = id =>
    ({
        type    : 'todo:remove',
        payload : { id }
    })

export const finishTodo = id =>
    ({
        type    : 'todo:finish',
        payload : { id }
    })

export const unfinishTodo = id =>
    ({
        type    : 'todo:unfinish',
        payload : { id }
    })

export const setFilter = filter =>
    ({
        type    : 'app:filter',
        payload : { filter }
    })

export const removeMulti = ( ids ) =>
    ({
        type    : 'todo:removeMulti',
        payload : {ids}
    })
