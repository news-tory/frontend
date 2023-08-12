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

function CommunityNews(props) {
  const { newsId } = props;
  const serverUrl = "https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/articles/";
  const SlideRef = useRef(null);
  const [newslist, setNewslist] = useState([]);
  const [selectedNews, setSelectedNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchnews();
  }, []);

  const fetchnews = async () => {
    try {
      const response = await axios.get(serverUrl);
      console.log(response.data); // 서버의 응답 데이터 확인
      setNewslist(response.data);
      const filteredNews = response.data.filter(news => news.id === newsId); // 수정된 부분
      setSelectedNews(filteredNews[0]); // 선택된 뉴스 설정
    } catch (error) {
      alert('데이터 로딩에 실패했습니다.');
      navigate('/');
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
