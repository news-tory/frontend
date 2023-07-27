import styled from 'styled-components'

const Title = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    justify-content: center;
    align-items: center;
`

const selfWrap = styled.div
    `
`

const TextField = styled.input`
    width: 500px;
    height: 50px;
`

const PasswordField = styled.input`
    width: 500px;
    height: 50px;
`

const footButtonWrapper = styled.div`
    width: 500px;
    height: 50px;
`

const FootButton = styled.button`
    width: 400px;
    height: 50px;
    background-color: grey;
    border: 1px solid black;
`

const FootButtonType = styled.button`
    width: 400px;
    height: 50px;
    background-color: orange;
    border: 1px solid black;
`

export {Title,selfWrap,TextField, PasswordField, footButtonWrapper, FootButton, FootButtonType};