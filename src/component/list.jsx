import React from 'react'
import * as S from '../style/styledComponents'
import { Link } from 'react-router-dom'
import { updateTodo, deleteTodo } from '../redux/modules/todos'
import { useDispatch } from 'react-redux'
const List = ({ todos }) => {
    const dispatch = useDispatch()

    const updateButton = (id) => {
        dispatch(updateTodo(id))
    }

    const deleteButton = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
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
        </div>
    )
}

export default List