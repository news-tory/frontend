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

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`

export const CommunityText = styled.div`
    width: 100%;
    padding: 20px 10px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    background-color: white;
    border-bottom: 2px solid #eaeaea;
    border-left: 2px solid #eaeaea;
    position: fixed;
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
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
`

export const CommunityContainer =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
`

export const CommunityWrapper =  styled.div`
    width: 75%;
    border: 2px solid #eaeaea;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
`

export const NewsImage =  styled.img`
    width: 90%;
    margin: 20px;
`

export const PostUser = styled.div`
    width: 100%;
    margin: 10px;
    padding: 20px 20px 10px 20px;
    font-size: 20px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    `
export const CommunityContent =  styled.div`
    width: 100%;
    font-size: 20px;
    padding-left: 50px;

`
export const NewsAbstract = styled.div`
    font-size: 17px;
`

export const ButtonSection = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 2px solid #eaeaea;
    justify-content: center;
    align-items: center;
`

export const HeartButton = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #eaeaea;
    gap: 5px;
    cursor: pointer;
`
export const PostButton = styled.div`
    width: 50%;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const CommunityNewsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    `