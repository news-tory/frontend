import styled from 'styled-components';

export const Sidebar = styled.div`
    width: 200px;

    /* background-color: #aac8a7; */

    display: flex;
    /* list-style-type: none; */
    /* margin: 0;  */
    height: 90vh;
    height: 90vh;
    /* border-right :  solid #aac8a7;
    border-left :  solid #aac8a7; */
    /* z-index: 99;  */
    border-right :  solid #4ad395;
    height : 100vh;
    margin-bottom: 40px;
    position: fixed;


`

export const Profile = styled.div`
    padding-bottom: 10vh;
    display: flex;

    .pencil {
        padding-top: 120px;
        padding-left: 5px;
        cursor: pointer;
    }
    h4 {
        /* padding-left: 30px; */
        padding-top: 100px;
        text-align: right;    }
`

export const Tologin = styled.div`
    .tologin {
    text-decoration-line: none;
    color: black;


    }
`

export const All = styled.div`
    padding-left: 25px;  
    text-align: center;
    img {
        width:30px;
        padding-top: 100px;
        border-radius: 30%;
        padding-left: 10px;
    }
    .noline {
        text-decoration: none;
        color: black;
    }
    .bottom {
        padding-top:20vh;
        color: #4ad395;
        font-weight: lighter;
    }
`
export const Modaltoo = styled.div`
    display: flex;
`

export const Itsmodal = styled.div`
    padding-left: 100px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-left: 9px;
`

export const ModalContainer = styled.div`
    background-color: #fff;
    /* border-radius: 10px; */
    padding: 20px;
    /* pointer-events: none;  */

`;
