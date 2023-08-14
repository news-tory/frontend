import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 760px;
    background-color: #fff;
    `

export const NewsViewSection = styled.div`
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    border-right: 3px solid #eaeaea;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0px 20px;
`

export const NewsPaper = styled.div`
    width: 100%;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export const NewsImage = styled.img`
    width: 100%;
    height: 40%;`
    

export const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    height: 30px;
    justify-content: space-between;
    margin-top: 10px;
    
`

export const ViewWrapper = styled.div`
    display:flex;
    gap: 20px;
    
    `

export const HeartView = styled.div`
    font-size: 20px;
    display: flex;
    gap: 10px;
    `

export const PostView = styled.div`
    font-size: 20px;
    display: flex;
    gap: 10px;
    `

export const NewsTitle = styled.div`
    width:100%;
    margin-top: 10px;
    font-size: 30px;
`

export const NewsAbstract = styled.div`
    width: 100%;
    margin-top: 30px;
    font-size: 20px;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end`

export const NewsLinkButton = styled.a`
    align-text: center;
    border-radius: 20px;
    text-decoration: none;
    `
export const NewsPostSection = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    `


export const PostText = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
`

export const PostInput = styled.textarea`
    text-align: left;
    width: 300px;
    height: 200px;
    resize: none;
    margin: 0px 20px 20px 20px;
    border: none;
    padding: 20px;
    font-size: 15px;
`

export const PostButton = styled.button`
    border: none;
    background-color: #fff;
    cursor: pointer;
    font-size: 15px;
`

export const LoginInform = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
`
export const LoginInformImage = styled.img`
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 60%;
`
export const LoginInformText = styled.div`
    width: 100%;
    position: absolute;
    top: 17%;
    left: 50%;
    font-size: 20px;
    color: #fff;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
    `