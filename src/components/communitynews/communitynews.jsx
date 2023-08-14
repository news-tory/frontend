import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Body from '../../pages/community/body';
import Newsview from '../newview/newsview';
import {
  AllNews,
  NewsImage,
  NewsTitle,
  NewsContainer,
  NewsListContainer,
  ModalBackground,
  ModalContainer,
  NewsPaper,
  IndvidualNewsImage,
  NewsAbstract
} from "./style";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { noAuthApi } from '../../modules/axiosInterceptor';

function CommunityNews(props) {
  const { newsId } = props;
  const [newslist, setNewslist] = useState([]);
  const [selectedNews, setSelectedNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchnews();
  }, []);

  const fetchnews = async () => {
    try {
      const response = await noAuthApi.get('/articles/');
      console.log(response.data); // 서버의 응답 데이터 확인
      setNewslist(response.data);
      const filteredNews = response.data.filter(news => news.id === newsId); // 수정된 부분
      setSelectedNews(filteredNews[0]); // 선택된 뉴스 설정
    } catch (error) {
      console.log('communitynews error');
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  let [modal, setModal] = useState(false);
  const changeModal = () => {
    setModal(!modal);
  };
  const onClickNews = (news) => {
    setSelectedNews(news);
    changeModal();
  };

  return (
    <>
      <AllNews>
        <NewsListContainer>
          <NewsContainer onClick={() => onClickNews(selectedNews)}> {/* 수정된 부분 */}
            <NewsPaper>{selectedNews.paper}</NewsPaper>
            <NewsImage>
                <IndvidualNewsImage src={selectedNews.img_url} alt="ArticleImage" />
            </NewsImage>
            <NewsTitle>
                <div>{selectedNews.title}</div>
            </NewsTitle>
            <NewsAbstract>
                <div>{selectedNews.abstract}</div>
            </NewsAbstract>
          </NewsContainer>
        </NewsListContainer>
      </AllNews>
      {modal &&
        <ModalBackground onClick={changeModal}>
          <ModalContainer onClick={stopPropagation}>
            <Newsview news={selectedNews} />
          </ModalContainer>
        </ModalBackground>
      }
    </>
  )
}

export default CommunityNews;
