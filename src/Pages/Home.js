import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/modules/todos'
// import todos from '../redux/modules/todos'

function Home() {
    const [input, setInput] = useState({ title: '', content: '' })
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()

    const inputChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }

    

    const addButton = () => {
        if (input.title !=='' && input.content !== '') {
            dispatch(addTodo({
                id: todos.length+1,
                title: input.title,
                content: input.content,
                status: false
            }))
            console.log(todos)
        } else {
            alert('제목과 내용 모두 입력하세요')
            return
        }
        setInput({title: '', content: ''})
    }

    return (
        <div>
            <div>
                <h2>My Todo List</h2>
                <input
                    type='text'
                    placeholder='제목'
                    value={input.title}
                    name='title'
                    onChange={inputChange}
                />
                <input
                    type='text'
                    placeholder='내용'
                    value={input.content}
                    name='content'
                    onChange={inputChange} />
                    <button onClick={addButton}>추가하기</button>
            </div>
            <div>Working...🔥 </div>
                {

                }
            <div>Done..! 🚀 </div>
        </div>
    )
}

export default Home