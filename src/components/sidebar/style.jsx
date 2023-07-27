import styled from 'styled-components';

export const Sidebar = styled.div`
    width: 200px;
    background-color: #aac8a7;
    display: flex;
    /* list-style-type: none; */
    /* margin: 0;  */
    height: 90vh;
    /* border-right :  solid #aac8a7;
    border-left :  solid #aac8a7; */

`

export const Profile = styled.div`
    padding-bottom: 10vh;
    h4 {
        margin-bottom:0;
    }
    h6 {
        margin-top:5px;
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
