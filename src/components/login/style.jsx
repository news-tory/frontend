import styled from 'styled-components';

export const Border = styled.div`
    margin: 200px;
    padding-top: 50px;
    width: 400px;
    height: 400px;
    border: solid black;
    text-align: center;
    button {
        width: 305px;
        height: 30px;
        margin-top: 30px;
    }
    .tosignup {
        display: flex;
        flex-direction: row;
        padding-left: 50px;
    }
    .signup {
        padding-left: 110px;
    }
`

export const Inputs = styled.div`
    flex-direction: column;
    p {
        text-align: left;
        padding-left: 50px;
    }
    input {
        width: 300px;
        height: 30px;
    }

`