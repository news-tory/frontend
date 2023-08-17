import styled from 'styled-components';

export const Sidebar = styled.div`
    width: 220px;

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
    padding-bottom: 10vh;
    display: flex;
    .pencil {
        padding-top: 94px;
        padding-left: 7px;
        cursor: pointer;
        font-size: 13px;
    }
        .basicimage {
        width:40px;
        height: 40px;
        margin-top: 80px;
        /* border-radius: 20px; */
        margin-left: 13px;
    }
    h4 {
        padding-left: 5px;
        padding-top: 70px;
        text-align: right;    }
    
`

export const Goto = styled.div`
    display: flex;
    .gotoimage {
        position: absolute;
        width: 27px;
        height: 27px;
        padding-top: 20px;
        padding-left: 38px;
    }
    
    p {
        padding-left: 95px;
        padding-top: 10px;
        font-size: 15px;
    }
`

export const Tologin = styled.div`
    .tologin {
    text-decoration-line: none;
    color: black;
    }
    h5 {
        padding-top: 70px;
        padding-left: 10px;
    }
`

export const All = styled.div`
    text-align: center;
    .logo {
        width: 190px;
        height:25px;
        padding-top: 28px;
        padding-left: 2px;
    }
    .noline {
        text-decoration: none;
        color: black;
        display: flex;
        justify-content: space-between;
      }
    .logout {
        margin-top: 22vh;
        padding-left: 15px;
        font-size: 12px;
        cursor: pointer;
        color: gray;
    }
    .bottom {
        /* padding-top:15vh; */
        color: #4ad395;
        font-weight: lighter;
        padding-left: 15px;
    }
    .bottom2 {
        padding-top:24vh;
        color: #4ad395;
        font-weight: lighter;
        padding-left: 15px;
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
