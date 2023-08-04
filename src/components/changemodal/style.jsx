import { symbol } from 'prop-types';
import styled from 'styled-components';

export const Every = styled.div`
    .title {
    text-align: center;
    }
`

export const All = styled.div`
    display:flex;
    border: solid #4ad395;
    /*margin-left: 300px;*/
    width: 1000px;
    height: 500px;
    .left-pane{
        width: 500px;
    }

`;


export const Image = styled.div`
    height: 250px;
    padding-top: 20px;
    padding-left: 30px;
    flex-direction: column;
    display: grid;
    .button {
        width: 100px;
        height:  25px;
        margin-right: 10px;
        margin-top: 10px;
        border : 1px solid #4ad395;
    }
    .changeimg {
        margin-top: 20px;
    }
    .viewimage {
        height: 100px;
        width:100px;
        border-radius: 50%;
        margin-left: 50px;
    }
`

export const Nickname = styled.div`
    padding-left: 30px;
    padding-top: 30px;
    .input {
        width: 300px;
        margin-right: 20px;
        height: 20px;
    }
    button {
        width: 60px;
        height: 26px;
        border : 1px solid #4ad395;
    }
    #message {
        margin-top: 10px;
        font-size: 12px;
    }

`
export const Password = styled.div`
    /* padding-left: 30px; */
    padding-top: 50px;
    .input {
        width: 370px;
        margin-right: 20px;
        height: 20px;
        margin-bottom: 10px;
    }
    button {
        width: 60px;
        height: 26px;
        border : 1px solid #4ad395;
    }
    #message {
        font-size: 12px;
        margin-bottom: 5px;
    }
    #nomessage {
        height: 17px;
    }
`

export const Category = styled.div`
    padding-top: 20px;
    /* padding-left: 90px; */
    button {
        border : 1px solid #4ad395;
        width: 60px;
        height: 25px;
        margin-left: 400px;
    }
`

export const CategoryButton = styled.div`
    border-radius: 20px;
    font-size: 15px;
    margin: 7px;
    width: 140px;
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
`