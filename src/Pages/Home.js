import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Home() {
    const [input, setInput] = useState({ title: '', content: '' })

    const inputChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }

    const dispatch = useDispatch()

    const addButton = () => {
        
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