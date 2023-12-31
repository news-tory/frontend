import styled from 'styled-components';

export const Sidebar = styled.div`
    width: 210px;

    /* background-color: #aac8a7; */

    display: flex;
    /* list-style-type: none; */
    /* margin: 0;  */
    height: auto;
    border-right :  solid #eaeaea;
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
        padding-top: 84px;
        padding-left: 7px;
        cursor: pointer;
        font-size: 13px;
    }
    .nickname {
        padding-left: 10px;
        padding-top: 60px;
        text-align: right;    }
    
`

export const Goto = styled.div`
    display: flex;
    .gotoimage {
        position: absolute;
        width: 25px;
        height: 25px;
        padding-top: 20px;
        padding-left: 20px;
    }
    p {
        padding-left: 65px;
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
        padding-top: 60px;
        padding-left: 10px;
    }
`

export const All = styled.div`
    text-align: center;
    .logo {
        width: 150px;
        height:20px;
        padding-top: 25px;
        padding-left: 20px;
    }
    .basicimage {
        width:40px;
        height: 40px;
        margin-top: 70px;
        margin-left: 20px;
    }
    .noline {
        text-decoration: none;
        color: black;
        display: flex;
        justify-content: space-between;
      }
    .logout {
        margin-top: 26vh;
        padding-left: 23px;
        font-size: 10px;
        cursor: pointer;
        color: gray;
    }
    .bottom {
        /* padding-top:15vh; */
        color: #4ad395;
        font-weight: lighter;
        padding-left: 23px;
    }
    .bottom2 {
        padding-top:27.5vh;
        color: #4ad395;
        font-weight: lighter;
        padding-left: 23px;
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
