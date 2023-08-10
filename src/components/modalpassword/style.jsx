import styled from 'styled-components';

export const All = styled.div`
    display:flex;
    border: solid #4ad395;
    /*margin-left: 300px;*/
    width: 500px;
    height: 550px;
`;

export const Password = styled.div`
    padding-left: 30px;
    padding-top: 120px;
    .input {
        width: 360px;
        margin-right: 20px;
        height: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
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