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

export const Detailwrap = styled.div`
    border: 2px solid #eee;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Detaildiv = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Homebutton = styled.button`
    border: 1px solid #eee;
    height: 40px;
    width: 120px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
`

export const Detailheader = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
`

export const detailTitle = styled.h1`
  padding: 0 24px;
`

export const detailContnet = styled.main`
  padding: 0 24px;
`