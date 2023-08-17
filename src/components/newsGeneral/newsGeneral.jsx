import React, {useCallback, useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Newsview from '../newview/newsview'
import styled from 'styled-components'
import {AllNews,
        SearchBarWrapper,
        SearchBar,
        SearchBarInput,
        NewsImage,
        NewsTitle,
        CategoryButton,
        NewsCategory,
        NewsContainer,
        NewsListContainer,
        ModalBackground,
        ModalContainer,
        SearchIcon,
        CategoryWrapper} from "./style";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { noAuthApi } from '../../modules/axiosInterceptor';

function NewsGeneral() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const SlideRef = useRef(null);
    const [newsLen, setNewsLen] = useState(0);
    const category = [{스포츠: 'Sport'},
                        {세계: 'World'},
                        {예술:'Art'},
                        {영화:'Film'},
                        {사회:'Society'},
                        {도서:'Books'},
                        {경영:'Business'},
                        {기술:'Tech'},
                        {문화:'Culture'}];
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [newslist, setNewslist] = useState([]);
    const [selectedNews,setSelectedNews] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    

    useEffect(() => {
        fetchnews();
    }, []);

    const fetchnews = async () => {
        try {
            const response = await noAuthApi.get('/articles/');
            console.log(response.data); // 서버의 응답 데이터 확인
            setNewslist(response.data);
            setNewsLen(response.data.length)
        } catch (error) {
            console.log('newsGeneral fetchnews error')
        }
    };


    const onClickFav = useCallback(
        (category) => {
          if (selectedCategory.includes(category)) {
            setSelectedCategory((prevFavorites) => prevFavorites.filter((fav) => fav !== category));
          } else {
            setSelectedCategory((prevFavorites) => [...prevFavorites, category]);
          }
          setCurrentSlide(0);
        },
        [selectedCategory]
      );

      const filteredNews = newslist.filter(news => 
        (selectedCategory.length === 0 || selectedCategory.map(c => category.find(a => Object.keys(a)[0] === c)[c]).includes(news.section))
        &&
        (news.title.toLowerCase().includes(searchTerm.toLowerCase()) || news.content?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    

    useEffect(() => {
        setNewsLen(filteredNews.length);
    }, [filteredNews]);
    
    let [modal, setModal] = useState(false);
    const changeModal = () => {
        setModal(!modal);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const onClickNews = (news) => {
        setSelectedNews(news);
        changeModal();
    }

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <>
        <AllNews>
            <SearchBarWrapper>
                <SearchBar>
                <SearchIcon icon={faMagnifyingGlass} style={{color: "#4ad395",}} />
                <SearchBarInput onChange = {onChangeSearchTerm} placeholder='보고 싶은 기사를 검색하세요'></SearchBarInput>
                </SearchBar>
            </SearchBarWrapper>
        <CategoryWrapper>
        <NewsCategory>
        {category.map((categoryObject) => {
            const key = Object.keys(categoryObject)[0];
            return (
                <CategoryButton 
                    onClick={() => onClickFav(key)}
                    active={selectedCategory.includes(key)}
                >
                    {key}
                </CategoryButton>
            );
        })}
        </NewsCategory>
        </CategoryWrapper>
        <NewsListContainer>
            {filteredNews.map((news, index) => (
                <NewsContainer key={index} onClick={() => onClickNews(news)}>
                <NewsImage src={news.img_url}></NewsImage>
                <NewsTitle>{news.title}</NewsTitle>
                </NewsContainer>
            ))}
        </NewsListContainer>
    </AllNews>
    { modal &&
        <ModalBackground onClick={changeModal}>
            <ModalContainer onClick={stopPropagation}>
                <Newsview newsId = {selectedNews.id}/>
            </ModalContainer>
        </ModalBackground>
    }
    </>
    )
    }

export default NewsGeneral;