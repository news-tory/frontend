import styled from 'styled-components';

export const All = styled.div`
    /* display:flex; */
    border: solid #4ad395;
    /*margin-left: 300px;*/
    width: 500px;
    height: 550px;
`;

export const Image = styled.div`
    height: 250px;
    padding-top: 100px;
    padding-left: 150px;
    flex-direction: column;
    display: grid;
    h4 {
    padding-left: 40px;
    }
    .button {
        width: 100px;
        height:  25px;
        margin-right: 10px;
        margin-top: 10px;
        border : 1px solid #4ad395;
        cursor: pointer;
    }
    .buttonoriginal{
        width: 200px;
        height:  25px;
        margin-right: 10px;
        margin-top: 10px;
        border : 1px solid #4ad395;
        cursor: pointer;
    }
    .buttonother {
        width: 150px;
        height:  25px;
        margin-right: 10px;
        margin-top: 10px;
        border : 1px solid #4ad395;
        cursor: pointer;
    }
    .buttonchosen {
        width: 150px;
        height:  25px;
        margin-right: 10px;
        margin-top: 10px;
        border : 1px solid #4ad395;
        cursor: pointer;
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
    .buttons2{
        margin-right: 60px;
        margin-left: 25px;
    }
`

