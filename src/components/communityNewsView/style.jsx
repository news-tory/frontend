import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: auto;
    `

export const NewsViewSection = styled.div`
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    border-right: 3px solid #eaeaea;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0px 20px;
    align-items: center;
    overflow: auto;
`

export const PostingSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative
    `

export const PostingUserInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    `

export const PostingContent = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    `

export const NewsContainer = styled.div`
    width: 80%;
    border: 3px solid #eaeaea;
    display: flex;
    flex-direction: column;
    `
export const NewsPaper = styled.div`
    width: 100%;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-left: 25px;
`

export const NewsImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const ArticleImage = styled.img`
    width: 90%;
    `

export const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    height: 30px;
    justify-content: space-between;
    
`

export const ViewWrapper = styled.div`
    display:flex;
    box-sizing: border-box;
    padding-left: 30px;
    gap: 10px;
    `

export const HeartView = styled.div`
    font-size: 20px;
    display: flex;
    gap: 7px;
    `

export const PostView = styled.div`
    font-size: 20px;
    display: flex;
    gap: 7px;
    `

export const NewsTitle = styled.div`
    width: 100%;
    margin-top: 10px;
    font-size: 25px;
    padding: 0px 20px 0px 20px;
`

export const NewsAbstract = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 0px 20px 0px 20px;
    font-size: 20px;
    box-sizing: border-box;
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
    overflow: auto;
    `
export const CommentPostWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const CommmentPostContent = styled.textarea`
    width: 80%;
    height: 60px;
    box-sizing: border-box;
    margin: 20px;
    resize: none;
    align-items: center;
    border: none;
    padding: 20px 10px 20px 20px;
    box-sizing: border-box;
    
    `
export const CommentPostButton = styled(FontAwesomeIcon)`
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    `

export const PostDeleteButton = styled(FontAwesomeIcon)`
    font-size: 10px;
    `
export const CommentWrapper = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    gap: 10px;
    flex-wrap: wrap;
    `

export const CommentUser = styled.div`
    font-size: 15px;
    `
export const CommmentContent =styled.div`
    width: 80%;
    font-size: 13px;
    overflow-wrap: break-word;
    `
export const PostInput = styled.textarea`
    text-align: left;
    width: 300px;
    height: 80px;
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