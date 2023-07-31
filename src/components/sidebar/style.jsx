import styled from 'styled-components';

export const Sidebar = styled.div`
    width: 200px;
    display: flex;
    /* list-style-type: none; */
    /* margin: 0;  */
    height: 90vh;
    height: 90vh;
    border-right :  solid #4ad395;
    /* z-index: 99999;  */

`

export const Profile = styled.div`
    padding-bottom: 10vh;
    h4 {
        margin-bottom:0;
    }
    h6 {
        margin-top:5px;
    }
    img {
        /* margin: 0; */
    }
    .change{
        display: flex;
        margin-left: 10px;
    }
    .pencil {
        padding-top: 25px;
        padding-left: 5px;
        cursor: pointer;
    }
`

export const All = styled.div`
    padding-left: 50px;  
    text-align: center;
    img {
        width:100px;
        padding-top: 60px;
        border-radius: 30%;
    }
    .noline {
        text-decoration: none;
        color: black;
    }
    .bottom {
        padding-top:20vh;
        color: white;
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
    /* z-index: 9999;  */
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-left: 9px;
`

export const ModalContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    /* pointer-events: none;  */

`;
