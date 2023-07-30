import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
`
export const SignupFormStructure = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 20px;
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
    background-color: white;
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
    background-color: #f2f2f2;
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

export const NicknameField = styled.input`
    flex: 1;
    padding-left: 10px;
    border-radius: 10px;
    height: 30px;
    border: none;
`

export const ErrorMessage = styled.span`
    padding-left: 15px;
`

export const footButtonWrapper = styled.div`
    width: 400px;
    height: 50px;
`

export const FootButton = styled.button`
    width: 408px;
    height: 50px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    background-color: ${({ disabled }) => (disabled ? '#65bf97' : '#4AD395')};
`

export const FootButtonType = styled.button`
    width: 408px;
    height: 50px;
    background-color: orange;
    border: 1px solid black;
`

export const LoginImage = styled.img`
    width: 100%;
    height: calc(100vh-64px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
`

export const LogoImage = styled.img`
    height: 25px;
    margin: 10px;
    `