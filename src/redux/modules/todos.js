

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
        default:
            return state
    }
}

export default todos