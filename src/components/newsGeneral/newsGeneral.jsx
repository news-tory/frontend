import React, {useCallback, useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { ListWrapper, AllNews, NewsImage, NewsTitle, FavNews,SlideSection ,CategoryButton, Wrapper, NewsCategory, NewsContainer, NewsListContainer, SlideContainer, PrevButton, NextButton } from "./style";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

function NewsGeneral() {
    const serverUrl = "https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/articles/nyt/"
    const [currentSlide, setCurrentSlide] = useState(0);
    const SlideRef = useRef(null);
    const [newsLen, setNewsLen] = useState(0);
    const category = [{스포츠: 'us'},
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
    const navigate = useNavigate();

    useEffect(() => {
        fetchnews();
    }, []);

    const fetchnews = async () => {
        try {
            const response = await axios.get(serverUrl);
            console.log(response.data); // 서버의 응답 데이터 확인
            setNewslist(response.data);
            setNewsLen(response.data.length)
        } catch (error) {
            alert('데이터 로딩에 실패했습니다.')
            navigate('/')
        }
    };

    const NextSlide = () => {
        if (currentSlide >= newsLen - 2){
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 2);
        }
    }

    const PrevSlide = () => {
        if (currentSlide <= 0){
            setCurrentSlide(newsLen - 2);
        } else{
            setCurrentSlide(currentSlide - 2);
        }
    }

    useEffect(() => {
        console.log(currentSlide);
        console.log(SlideRef.current);
        SlideRef.current.style.transition = 'all 0.5s ease-in-out';
        SlideRef.current.style.transform = `translateX(-${currentSlide * (100 / filteredNews.length)}%)`;
    },[currentSlide]);


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

    const filteredNews = newslist.filter(news => selectedCategory.length === 0 || selectedCategory.map(c => category.find(a => Object.keys(a)[0] === c)[c]).includes(news.section));

    useEffect(() => {
        setNewsLen(filteredNews.length);
    }, [filteredNews]);
    
    return (
        <AllNews>
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
        <NewsListContainer>
            <PrevButton onClick={PrevSlide} icon={faCircleChevronLeft} style={{color: "#4ad395",}} />
            <SlideContainer currentSlide={currentSlide} ref={SlideRef} slides={filteredNews.length}>
            {filteredNews.map((news, index) => (
                <NewsContainer key={index}>
                <NewsImage src={news.img_url}></NewsImage>
                <NewsTitle>{news.title}</NewsTitle>
                </NewsContainer>
            ))}
            </SlideContainer>
            <NextButton onClick={NextSlide} icon={faCircleChevronRight} style={{color: "#4ad395",}} />
        </NewsListContainer>
    </AllNews>
    )
    }

export default NewsGeneral;