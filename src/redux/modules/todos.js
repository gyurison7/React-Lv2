const ADD_TODO = 'ADD_TODO'

export const addTodo = (payload) => {
    return {type: ADD_TODO, payload}
}

const initialState = {
    todos: [
        {
            id: 0,
            title: '',
            body: '',
            status: false
        }
    ]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}

export default todos