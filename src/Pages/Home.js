import React, { useState } from 'react'

function Home() {
    const [input, setInput] = useState({ title: '', content: '' })

    const inputChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
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
                    <button>추가하기</button>
            </div>
        </div>
    )
}

export default Home