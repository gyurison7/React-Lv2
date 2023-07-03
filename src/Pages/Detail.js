import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {
  const {id} = useParams()
  const navigate = useNavigate()

  const Todo = useSelector((state)=> state.todos.todos)
  const detailTodo = Todo.find((item)=>{
    console.log('item.id=>'+ item.id, 'id=>'+id)
    return item.id === Number(id)
    
  })
  
  return (
    <div>
      <div>{`ID : ${id}`}</div>
      <button onClick={() => navigate("/")}>이전으로</button>
      <h2>제목:{detailTodo.title}</h2>
      <h4>내용:{detailTodo.content}</h4>
    </div>
  )
}

export default Detail