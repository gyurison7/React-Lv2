import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo, deleteTodo } from '../redux/modules/todos'
import { Link } from 'react-router-dom'
// import todos from '../redux/modules/todos'
import * as S from '../style/styledComponents'

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

    const deleteButton = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <S.Layout>
            <h2>My Todo List</h2>
            <S.AddDiv>
                <S.InputGroup>
                    <S.AddInput
                        type='text'
                        placeholder='제목'
                        value={input.title}
                        name='title'
                        onChange={inputChange} />
                    <S.AddInput
                        type='text'
                        placeholder='내용'
                        value={input.content}
                        name='content'
                        onChange={inputChange} />
                    <S.AddButton onClick={addButton}>추가하기</S.AddButton>
                </S.InputGroup>
            </S.AddDiv>
            <h2>Working...🔥</h2>
            <S.ListWrapper>
                {
                    todos.filter((item) => item.status === false)
                        .map((item) => (
                            <S.TodoContainer key={item.id}>
                                <Link to={`/${item.id}`}>
                                    <h5>상세보기</h5>
                                </Link>
                                <h3>{item.title}</h3>
                                {item.content}
                                <S.TodoButtonSet>
                                    <S.TodoButton borderColor='green' onClick={() => updateButton(item.id)}>완료</S.TodoButton>
                                    <S.TodoButton borderColor='red' onClick={() => deleteButton(item.id)}>삭제</S.TodoButton>
                                </S.TodoButtonSet>
                            </S.TodoContainer>
                        ))
                }
            </S.ListWrapper>
            <h2>Done..! 🚀</h2>
            <S.ListWrapper>
                {
                    todos.filter((item) => item.status !== false)
                        .map((item) => (
                            <S.TodoContainer key={item.id}>
                                <h3>{item.title}</h3>
                                {item.content}
                                <S.TodoButtonSet>
                                    <S.TodoButton borderColor='green' onClick={() => updateButton(item.id)}>취소</S.TodoButton>
                                    <S.TodoButton borderColor='red' onClick={() => deleteButton(item.id)}>삭제</S.TodoButton>
                                </S.TodoButtonSet>
                            </S.TodoContainer>
                        ))
                }
            </S.ListWrapper>
        </S.Layout>
    )
}

export default Home