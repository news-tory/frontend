import styled from 'styled-components';

export const Sidebar = styled.div`
    width: 250px;

    /* background-color: #aac8a7; */

    display: flex;
    /* list-style-type: none; */
    /* margin: 0;  */
    height: auto;
    border-right :  solid #4ad395;
    height : 100vh;
    margin-bottom: 40px;
    position: fixed;
`

export const Section = styled.div`
    position: relative;
`


export const Profile = styled.div`
    padding-bottom: 5vh;
    display: flex;
    .pencil {
        padding-top: 114px;
        padding-left: 7px;
        cursor: pointer;
        font-size: 13px;
    }
    h4 {
        padding-left: 10px;
        padding-top: 92px;
        text-align: right;    }
`

export const Goto = styled.div`
    display: flex;
    padding-top: 30px;
    .gotoimage {
        position: absolute;
        width: 25px;
        height: 25px;
    }
    p {
        padding-left: 80px;
    }
`

export const Tologin = styled.div`
    .tologin {
    text-decoration-line: none;
    color: black;


    }
`

export const All = styled.div`
    text-align: center;
    img {
        width:40px;
        height: 40px;
        padding-top: 100px;
        border-radius: 10%;
        padding-left: 25px;
    }
    .noline {
        text-decoration: none;
        color: black;
        display: flex;
        justify-content: space-between;
      }
    .bottom {
        padding-top:20vh;
        color: #4ad395;
        font-weight: lighter;
        padding-left: 20px;
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
