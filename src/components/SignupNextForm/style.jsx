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
    width: 450px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    height: auto;
`

export const ErrorMessage = styled.span`
    padding-left: 15px;
`

export const FootButton = styled.button`
    width: 408px;
    height: 50px;
    margin: 10px 10px 30px 10px;
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

export const CategoryButton = styled.button`
    border-radius: 20px;
    font-size: 20px;
    padding: 5px 20px 5px 20px;
    margin: 7px;
    width: 120px;
    background-color: ${({ active }) => (active ? '#f2f2f2' : 'transparent')};
    border: 1px solid #4ad395
    `

export const CategoryWrapper = styled.div`
    display: flex;
    background-color: white;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 20px;
    padding: 10px 0px 40px 0px;
    `

export const TitleText = styled.div`
    font-size: 20px;
    padding: 40px 0px 10px 0px;
    `
export const SubTitleText = styled.div`
    font-size: 15px;
    color: grey;
    padding-bottom: 20px;
    `
    