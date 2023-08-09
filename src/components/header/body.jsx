import logo from './newstory.png';
import {Wrapper, SearchBar,SearchBarWrapper, Container, LogoImage} from './style.jsx';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Body() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState();
  const [searhResult, setSearchResult] = useState();

  const onClickSearch = () => {
    navigate(`/search/?query=${encodeURIComponent(searchTerm)}`);
  }
  
  const onClickLogin = () => {
    navigate("/login")
  }

    return (
      <Container>
        <Wrapper>
          <LogoImage src={logo} alt='newstory' />
          <SearchBarWrapper>
            <SearchBar
            type="text" 
            placeholder='원하는 기사를 찾아보세요'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#4ad395", paddingRight:"20px", cursor: "pointer"}} 
          onClick={onClickSearch}/>
          </SearchBarWrapper>
        </Wrapper>
      </Container>
    );
  }
  

export default Body;