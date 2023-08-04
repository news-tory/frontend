import styled from 'styled-components';

export const All = styled.div`
    display:flex;
    border: solid #4ad395;
    /*margin-left: 300px;*/
    width: 1000px;
    height: 500px;
    .title {
        text-align: center;
    }
`;

export const Image = styled.div`
    height: 250px;
    padding-top: 10px;
    padding-left: 30px;
    flex-direction: column;
    display: grid;
    .button {
        width: 100px;
        height:  25px;
        margin-right: 10px;
        margin-top: 10px;
    }
    .changeimg {
        margin-top: 20px;
    }
    .viewimage {
        height: 100px;
        width:100px;
        border-radius: 50%;
        margin-left: 50px;
    }

`

export const Nickname = styled.div`
    padding-left: 30px;
    .input {
        width: 350px;
        margin-right: 20px;
        height: 20px;
    }
    button {
        width: 60px;
        height: 26px;

    }

`