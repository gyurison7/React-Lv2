import React, { useState } from 'react'
import * as S from '../style/styledComponents'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/modules/todos'

const InputForm = ({todos}) => {
    const [input, setInput] = useState({ title: '', content: '' })

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

    return (
        <div>
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
        </div>
    )
}

export default InputForm