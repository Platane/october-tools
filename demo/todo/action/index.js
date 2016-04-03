export const addTodo = label =>
    ({
        type    : 'todo:add',
        payload : { label, id:Math.random().toString(36).slice(2,6) }
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
