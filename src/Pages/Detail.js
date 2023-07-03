import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as S from '../style/styledComponents'

function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const Todo = useSelector((state) => state.todos.todos)
  const detailTodo = Todo.find((item) => {
    console.log('item.id=>' + item.id, 'id=>' + id)
    return item.id === Number(id)

  })

  return (
    <S.Detailwrap>
      <S.Detaildiv>
        <div>
          <S.Detailheader>{`ID : ${id}`}
            <S.Homebutton onClick={() => navigate("/")}>이전으로</S.Homebutton>
          </S.Detailheader>
          <S.detailTitle>제목:{detailTodo.title}</S.detailTitle>
          <S.detailContnet>내용:{detailTodo.content}</S.detailContnet>
        </div>
      </S.Detaildiv>
    </S.Detailwrap>
  )
}

export default Detail
