import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../redux/modules/todos'
import { Link } from 'react-router-dom'
// import todos from '../redux/modules/todos'

function Home() {
    const [input, setInput] = useState({ title: '', content: '' })
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    const inputChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }



    const addButton = () => {
        if (input.title !== '' && input.content !== '') {
            dispatch(addTodo({
                id: todos.length + 1,
                title: input.title,
                content: input.content,
                status: false
            }))
        } else {
            alert('제목과 내용 모두 입력하세요')
            return
        }
        setInput({ title: '', content: '' })
    }

    const updateButton = (id) => {
        dispatch(updateTodo(id))
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
            <div>Working...🔥</div>
            {
                todos.filter((item) => item.status === false)
                    .map((item) => (
                        <div key={item.id}>
                            <Link to={`/${item.id}`}>
                                <h5>상세보기</h5>
                            </Link>
                            <h3>{item.title}</h3>
                            {item.content}
                            <button onClick={() => updateButton(item.id)}>완료</button>
                            <button>삭제</button>
                        </div>
                    ))
            }
            <div>Done..! 🚀 </div>
            {
                todos.filter((item) => item.status !== false)
                    .map((item) => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            {item.content}
                            <button>완료</button>
                            <button>삭제</button>
                        </div>
                    ))
            }
        </div>
    )
}

export default Home