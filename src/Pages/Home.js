import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo, deleteTodo } from '../redux/modules/todos'
import { Link } from 'react-router-dom'
// import todos from '../redux/modules/todos'
import { styled } from 'styled-components'

const Layout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;`

const AddDiv = styled.div`
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;`

const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;`

const AddInput = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;`

const AddButton = styled.button`
    border: none;
    height: 40px;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: #fff;
    font-weight: 700;`

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;`

const TodoContainer = styled.div`
    width: 270px;
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;`

const TodoButtonSet = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;`

const TodoButton = styled.button`
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid ${(props) => props.borderColor};
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;`

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
        <Layout>
            <h2>My Todo List</h2>
            <AddDiv>
                <InputGroup>
                    <AddInput
                        type='text'
                        placeholder='제목'
                        value={input.title}
                        name='title'
                        onChange={inputChange} />
                    <AddInput
                        type='text'
                        placeholder='내용'
                        value={input.content}
                        name='content'
                        onChange={inputChange} />
                    <AddButton onClick={addButton}>추가하기</AddButton>
                </InputGroup>
            </AddDiv>
            <h2>Working...🔥</h2>
            <ListWrapper>
                {
                    todos.filter((item) => item.status === false)
                        .map((item) => (
                            <TodoContainer key={item.id}>
                                <Link to={`/${item.id}`}>
                                    <h5>상세보기</h5>
                                </Link>
                                <h3>{item.title}</h3>
                                {item.content}
                                <TodoButtonSet>
                                    <TodoButton borderColor='green' onClick={() => updateButton(item.id)}>완료</TodoButton>
                                    <TodoButton borderColor='red' onClick={() => deleteButton(item.id)}>삭제</TodoButton>
                                </TodoButtonSet>
                            </TodoContainer>
                        ))
                }
            </ListWrapper>
            <h2>Done..! 🚀</h2>
            <ListWrapper>
                {
                    todos.filter((item) => item.status !== false)
                        .map((item) => (
                            <TodoContainer key={item.id}>
                                <h3>{item.title}</h3>
                                {item.content}
                                <TodoButtonSet>
                                    <TodoButton borderColor='green' onClick={() => updateButton(item.id)}>취소</TodoButton>
                                    <TodoButton borderColor='red' onClick={() => deleteButton(item.id)}>삭제</TodoButton>
                                </TodoButtonSet>
                            </TodoContainer>
                        ))
                }
            </ListWrapper>
        </Layout>
    )
}

export default Home