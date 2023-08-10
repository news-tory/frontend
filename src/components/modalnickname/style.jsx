import styled from 'styled-components';

export const All = styled.div`
    display:flex;
    border: solid #4ad395;
    /*margin-left: 300px;*/
    width: 500px;
    height: 550px;
`;

export const Nickname = styled.div`
    padding-left: 30px;
    padding-top: 60px;
    h4 {
        padding-bottom: 20px;
    }
    .input {
        width: 330px;
        margin-right: 20px;
        height: 20px;
    }
    button {
        width: 80px;
        height: 26px;
        border : 1px solid #4ad395;
        cursor: pointer;
    }
    #message {
        margin-top: 10px;
        font-size: 12px;
    }
    p {
        font-size: 13px;
    }

`