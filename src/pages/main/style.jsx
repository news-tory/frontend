import styled from 'styled-components';


export const Wrapper = styled.div`
    padding: 0;
    text-decoration: none;
    /* max-width: 1280px; */
    /* background-color: #F0F0F0; */
    height: 100vh;
    width: 100%;

    
`
export const Sidebody = styled.div`
    display: flex;
`

export const BodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    `


export const MainContainer = styled.div`
    margin-left: 250px;
    height: 100vh;
    display: flex;
    `

export const LeftWrapper = styled.div`
    width: 70%;
    border-right: 2px solid #eaeaea;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const HomeText = styled.div`
    height: 50px;
    width: 100%;
    padding: 10px 10px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
`
export const Text = styled.div`
border-bottom: ${props => props.active ? '3px solid #4ad395' : ''};
    padding: 5px;
`
export const ArticleSection = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #eaeaea;
    justify-content: space-between;
`
export const ArticleText = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const MyFavoriteText = styled.div`
    display: flex;
    border-right: 2px solid #eaeaea;
    width: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    `

    export const ModalBackground = styled.div`
    padding-left: 100px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 0;
`

export const ModalContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
`

export const NewsContainer =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NewsWrapper =  styled.div`
    width: 75%;
    background-color: #eaeaea;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    align-items: center;
`

export const NewsImage =  styled.img`
    width: 90%;
    margin: 20px;
`

export const NewsPaper = styled.div`
    width: 100%
    margin: 10px;
    margin-top: 20px;
    font-size: 25px;
    `
export const NewsTitle =  styled.div`
    font-size: 25px;
    margin: 0px 50px 0px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NewsAbstract = styled.div`
    width: 80%;
    margin: 20px 40px 20px 40px;
    font-size: 17px;
`

export const ButtonSection = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 2px solid #656565;
    justify-content: center;
    align-items: center;
`

export const HeartButton = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #656565;
    cursor: pointer;
`
export const PostButton = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const RightWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    `

export const HotNewsText = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    font-size: 20px;
    `

export const HotNewsWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: #eaeaea;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    `

export const HotNewsPaper = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    `

export const HotNewsImageSection = styled.div`
    width: 100%;
    display: flex;
    padding: 0px 10px 10px 10px;
    box-sizing: border-box;
    justify-content: center;
    `

export const HotNewsImage = styled.img`
    width: 90%;
    `

export const HotNewsTitle = styled.div`
    width: 100%;
    padding: 0px 20px 20px 20px;
    box-sizing: border-box;
    `