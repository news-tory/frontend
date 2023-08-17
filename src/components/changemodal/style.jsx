import { symbol } from 'prop-types';
import styled from 'styled-components';

export const Every = styled.div`
    .title {
    text-align: center;
    }
`

export const All = styled.div`
    /* display:flex; */
    border: solid #4ad395;
    /*margin-left: 300px;*/
    width: 500px;
    height: 500px;
    .left-pane{
        width: 500px;
    }

`;


export const Profile = styled.div`
    /* display: flex; */
    .pencil {
        padding-top: 25px;
        padding-left: 5px;
        cursor: pointer;
        align-items: right;
        font-size: 15px;
    }
    .viewimage {
        height: 100px;
        width:100px;
        border-radius: 50%;
        margin-left: 200px;
        margin-top: 30px;
    }
    h4 {
        /* margin-left: 210px; */
        text-align: center;
    }
    p {
        font-size: 12px;
        text-align: center;
        cursor: pointer;

    }

`


export const Image = styled.div`
    /* height: 250px; */
    /* padding-top: 20px;
    padding-left: 30px; */
    /* flex-direction: column; */
    /* display: grid; */
    .viewimage {
        height: 100px;
        width:100px;
        border-radius: 50%;
        margin-left: 50px;
    }
    justify-content: center;
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
        cursor: pointer;
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
        cursor: pointer;
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
    padding-left: 50px;
    padding-top: 10px;

    p {
        font-size: 12px;
    }
    .changecategory {
        cursor: pointer;
        text-align: right;
        margin-right: 50px;
        margin-top:  20px;

    }

`

export const CategoryButton = styled.div`
    border-radius: 20px;
    font-size: 20px;
    /* margin: 7px; */
    width: 100px;
    height: 20px;
    padding-top: 5px;
    margin-bottom: 10px;
    background-color: ${({ active }) => (active ? '#f2f2f2' : 'transparent')};
    border: 1px solid #4ad395;
    align-items: center;
    text-align: center;
    .catbutton {
        font-size: 12px;
        font-weight: lighter;
            }
`

export const CategoryWrapper = styled.div`
    width: 390px;
    height: 105px;
    display: grid;
    grid-template-columns: 140px 140px 130px;
    padding-left: 8px;
    padding-top: 5px;
    /* background-color: white; */
    flex-wrap: wrap;
    justify-content: left;
    text-align: center;
    border: 1px solid lightgray;
    
`

export const Itsmodal = styled.div`
    padding-left: 100px;
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.5); */
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-left: 9px;
`

export const ModalContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin: 150px;
    /* pointer-events: none;  */

`;

