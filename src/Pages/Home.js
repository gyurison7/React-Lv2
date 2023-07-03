import React from 'react'
import { useSelector } from 'react-redux'
import InputForm from '../component/inputForm'
import * as S from '../style/styledComponents'
import List from '../component/list'

function Home() {
    const todos = useSelector((state) => state.todos.todos)


    return (
        <S.Layout>
            <h2>My Todo List</h2>
            <InputForm todos={todos}/>
            <List todos={todos} />    
        </S.Layout>
    )
}

export default Home