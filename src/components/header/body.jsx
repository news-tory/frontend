import logo from './newstory.png';
import {Wrapper, SearchBar, Container, LogoImage} from './style.jsx';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Body() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState();
  const [searhResult, setSearchResult] = useState();

  const handleSearch = async () => {
    try {
      const searchData = await axios.get(
        `api/${searchTerm}/`
      );
      setSearchResult(searchData.data);
    } catch (error) {
      alert("정보를 가져오는데 실패했습니다.");
      navigate("/");
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      handleSearch();
    }
  }, [searchTerm]);

  const onClickLogin = () => {
    navigate("/login")
  }

    return (
      <Container>
        <Wrapper>
          <LogoImage src={logo} alt='newstory' />
          <SearchBar 
          type="text" 
          placeholder='원하는 기사를 찾아보세요'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
        </Wrapper>
      </Container>
    );
  }
  

export default Body;