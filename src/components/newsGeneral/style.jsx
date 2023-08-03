import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AllNews = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    padding: 20px;
`

export const NewsCategory = styled.div`
    width: 100%;
    height: 50px;
    border: none;
    display: flex;
    padding-left: 20px;
    `

export const CategoryButton = styled.div`
    width: 60px;
    height: 15px;
    border: 2px solid #4AD395;
    border-radius: 20px;
    padding : 10px;
    text-align: center;
    margin: 10px;
    cursor: pointer;
    background-color: ${({ active }) => (active ? '#f2f2f2' : 'transparent')};
    `

export const NewsListContainer = styled.div`
        display: flex;
        width: 100%;
        overflow:hidden;
        border-radius: 20px;
        `
export const NewsContainer = styled.div`
    width: 100%; // SlideContainer의 너비의 일부로 설정합니다.
    height: 300px;
    display: flex;
    flex-direction: column;
    margin: 15px;
    border: 2px solid #4ad395;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2; // 원하는 색상으로 변경하세요
    }
    `

export const SlideContainer = styled.div`
    display: flex;
    width: calc(${props => props.slides * 100}%); // 버튼들의 너비를 고려하여 너비를 조절합니다.
    transform: translateX(0); // 변경된 부분
    transition: all 0.5s ease-in-out;
    margin-left: 20px;
    position: relative;
`

export const PrevButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    z-index:1;
    transform: translateY(-50%);
    cursor: pointer;
    `
export const NextButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    right: 10px;
    width: 30px;
    height: 30px;
    z-index:1;
    transform: translateY(-50%);
    cursor: pointer;
    `

export const NewsImage = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 20px;
`
export const NewsTitle = styled.div`
    width: 90%;
    height: 100px;
    padding:20px;
    display:flex;
    align-items: center;
    justify-content: center;
`


export const FavNews = styled.div`
`

export const ListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    `