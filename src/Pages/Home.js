import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo, deleteTodo } from '../redux/modules/todos'
import { Link } from 'react-router-dom'
import InputForm from '../component/inputForm'
import * as S from '../style/styledComponents'

function Home() {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    const updateButton = (id) => {
        dispatch(updateTodo(id))
    }

    const deleteButton = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <S.Layout>
            <h2>My Todo List</h2>
            <InputForm todos={todos}/>
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