import styled from "styled-components";

const Container = styled.div`
    width: 100%
    box-sizing:border-box;
`

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 20px;
    box-sizing:border-box;
`

const SearchBar = styled.input`
    width: 27rem;
    height: 50px;
    border: 3px solid #AAC8A7;
    padding-left: 20px;
    border-radius: 10px;
`

const LogoImage = styled.img`
    height: 30px;
`

export {Wrapper, SearchBar,Container, LogoImage};