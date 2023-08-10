import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
`

export const LoginFormStructure = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 20px;
    margin: 0;
    height: auto;
`
export const LoginandSignupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0;
    width: 100%;
    background-color: white;
    border-radius: 20px 20px 0px 0px;
    `

export const LoginChangeButton = styled.div`
    flex: 1;
    flex-direction: column;
    text-align:center;
    cursor: pointer;
    border-radius: 20px 20px 0px 0px;
    background-color: #f2f2f2;
    height: 50px;
    display: flex;
    justify-content: center;
    margin: 0;
    `
export const SignupChangebutton = styled.div`
    flex: 1;
    flex-direction: column;
    text-align:center;
    cursor: pointer;
    border-radius: 20px 20px 0px 0px;
    background-color: white;
    height: 50px;
    display: flex;
    justify-content: center;
`

export const TextField = styled.div`
    display: flex;
    width: 400px;
    height: 50px;
    margin: 10px;
    border-radius: 10px;
    border: none;
    background-color: white;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
`
export const EmailField = styled.input`
    flex: 1;
    padding-left: 10px;
    border-radius: 10px;
    height: 30px;
    border: none;
`

export const PasswordField = styled.input`
    flex: 1;
    padding-left: 10px;
    border-radius: 10px;
    height: 30px;
    border: none;
`

export const ErrorMessage = styled.span`
    padding-left: 15px;
`

export const FootButton = styled.button`
    width: 408px;
    height: 50px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    background-color: ${({ disabled }) => (disabled ? '#65bf97' : '#4AD395')};
    cursor: pointer;
`

export const FootButtonType = styled.button`
    width: 408px;
    height: 50px;
    background-color: orange;
    border: 1px solid black;
`
