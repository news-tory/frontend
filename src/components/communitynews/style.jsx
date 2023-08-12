import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AllNews = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
    margin-top: 40px;
`


export const NewsListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


export const NewsContainer = styled.div`
    width: 90%;  // 변경된 부분: 전체의 50%에서 마진값(예: 20px)을 뺀 크기로 설정해본다.
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    cursor: pointer;
    background-color: #eaeaea;
    &:hover {
        background-color: #f2f2f2;
    }
`;


export const NewsPaper = styled.div`
    width: 100%;
    font-size: 25px;
    box-sizing: border-box;
    padding: 20px 20px 10px 20px;
    `
export const NewsImage = styled.div`
    width: 100%;
    border-radius: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
`
export const IndvidualNewsImage = styled.img`
    width: 90%;
`
export const NewsTitle = styled.div`
    width: 100%;
    padding: 20px 40px 10px 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`
export const NewsAbstract = styled.div`
    width: 100%;
    padding: 10px 40px 20px 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    `

//모달창
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
    margin-left: 9px;
    padding: 0;
`

export const ModalContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    margin: 100px 0px 100px 0px;
    width: 1000px;
    height: 800px;
    display: flex;
    justify-content: center;
    z-index: 11;
`
