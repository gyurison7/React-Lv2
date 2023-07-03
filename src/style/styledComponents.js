import { styled } from 'styled-components'

export const Layout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;`

export const AddDiv = styled.div`
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;`

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;`

export const AddInput = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;`

export const AddButton = styled.button`
    border: none;
    height: 40px;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: #fff;
    font-weight: 700;`

export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;`

export const TodoContainer = styled.div`
    width: 270px;
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;`

export const TodoButtonSet = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;`

export const TodoButton = styled.button`
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid ${(props) => props.borderColor};
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;`