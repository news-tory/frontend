import styled from 'styled-components';

export const All = styled.div`
    display:flex;
    border: solid #4ad395;
    /*margin-left: 300px;*/
    width: 500px;
    height: 550px;
`;

export const Category = styled.div`
    padding-top: 100px;
    padding-left: 20px;
    button {
        border : 1px solid #4ad395;
        width: 60px;
        height: 25px;
        margin-left: 350px;
        cursor: pointer;
    }
    .smalltitle {
        padding-left: 40px;
    }
`

export const CategoryButton = styled.div`
    border-radius: 20px;
    font-size: 15px;
    margin-left: 10px;
    margin-right: 25px;
    margin-bottom: 10px;
    padding-top: 7px;
    width: 100px;
    height: 25px;
    background-color: ${({ active }) => (active ? '#f2f2f2' : 'transparent')};
    border: 1px solid #4ad395
    

    `

export const CategoryWrapper = styled.div`
    width: 500px;
    display: flex;
    /* background-color: white; */
    flex-wrap: wrap;
    justify-content: left;
    text-align: center;
    padding: 10px 0px 20px 0px;
    margin-left: 30px;
    cursor: pointer;
`