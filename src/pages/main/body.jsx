import { LeftWrapper,
        MainContainer,
        HomeText,
        ArticleSection,
        ArticleText,
        MyFavoriteText,
        Text,
        NewsContainer,
        NewsWrapper,
        NewsImage,
        NewsTitle,
        ModalBackground,
        ModalContainer, 
        NewsPaper,
        NewsAbstract,
        ButtonSection,
        HeartButton,
        PostButton,
        RightWrapper,
        HotNewsText,
        HotNewsWrapper,
        HotNewsPaper,
        HotNewsImageSection,
        HotNewsImage,
        HotNewsTitle} from "./style";
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Newsview from "../../components/newview/newsview";
import NewsGeneral from "../../components/newsGeneral/newsGeneral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

function Body(props) {
    const serverUrl = "https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/articles/"
    const UserServerUrl = "https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/"
    const HotnewsUrl = "https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/articles/popularity/"
    const [newslist, setNewsList] = useState([]);
    const [hotnewsList,setHotnewsList] = useState([]);
    const [selectedNews,setSelectedNews] = useState([]);
    const [activeMyFav, setActiveMyFav] = useState(false);
    const navigate = useNavigate();
    const [filteredNews,setFilteredNews] = useState([]);
    let [modal, setModal] = useState(false);

    const changeModal = () => {
        setModal(!modal);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    
    const fetchnews = async () => {
        try {
            const response = await axios.get(HotnewsUrl);
            console.log(response.data); // 서버의 응답 데이터 확인
            setHotnewsList(response.data);
        } catch (error) {
            alert('뉴스데이터 로딩에 실패했습니다.')
            navigate('/')
        }
    };
    
    const fetchHotnews = async () => {
        try {
            const response = await axios.get(serverUrl);
            console.log(response.data); // 서버의 응답 데이터 확인
            setNewsList(response.data);
        } catch (error) {
            alert('실시간 뉴스 로딩에 실패했습니다.')
            navigate('/')
        }
    };
    
    const onClickNews = (news) => {
        setSelectedNews(news);
        changeModal();
    }
    
    useEffect(() => {
        fetchnews();
        getUser();
        fetchHotnews();
    }, []);

    const onClickMyFav = () => {
        setActiveMyFav(!activeMyFav)
        console.log(activeMyFav)
    }

    const getUser = async () => {
        try{
            const response = await axios.get(UserServerUrl, {
                headers: {
                    Authorization: `token ${props.accessToken}`
                }
            });
            const userData = response.data;
            const trueKeys = Object.keys(userData).filter(key => userData[key] === true);
            setFilteredNews(newslist.filter(news => trueKeys.includes(news.section)));
        }
            catch(error){
                alert('유저 정보 가져오기 실패')
                console.error(error);   
            }
        }

    return (
        <>
            <MainContainer>
                <LeftWrapper>
                    <HomeText>Home</HomeText>
                    {activeMyFav === false?(
                    <>
                    <ArticleSection>
                        <ArticleText>
                            <Text active={!activeMyFav}> 모든 기사</Text>
                        </ArticleText>
                        <MyFavoriteText onClick={onClickMyFav}>
                            <Text active={activeMyFav}>내 선호</Text>
                        </MyFavoriteText>
                    </ArticleSection>
                    <NewsContainer>
                        {newslist.map((news, index) => (
                        <NewsWrapper key={index} onClick={() => onClickNews(news)}>
                            <NewsPaper>{news.paper}</NewsPaper>
                            <NewsImage src={news.img_url}></NewsImage>
                            <NewsTitle>{news.title}</NewsTitle>
                            <NewsAbstract>{news.abstract}</NewsAbstract>
                            <ButtonSection>
                                <HeartButton>
                                    <FontAwesomeIcon icon={faHeart} />
                                </HeartButton>
                                <PostButton>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <p> Post</p>
                                </PostButton>
                            </ButtonSection>
                        </NewsWrapper>
                        ))}
                    </NewsContainer>
                    </>
                    ) : (
                        <>
                        <ArticleSection>
                            <ArticleText>
                                <Text active={!activeMyFav} onClick={onClickMyFav}> 모든 기사</Text>
                            </ArticleText>
                            <MyFavoriteText>
                                <Text active={activeMyFav}>내 선호</Text>
                            </MyFavoriteText>
                        </ArticleSection>
                        <NewsContainer>
                        {filteredNews.map((news, index) => (
                        <NewsWrapper key={index}>
                            <NewsPaper>{news.paper}</NewsPaper>
                            <NewsImage src={news.img_url}></NewsImage>
                            <NewsTitle>{news.title}</NewsTitle>
                            <NewsAbstract>{news.abstract}</NewsAbstract>
                            <ButtonSection>
                                <HeartButton>
                                    <FontAwesomeIcon icon={faHeart} />
                                </HeartButton>
                                <PostButton onClick={() => onClickNews(news)}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <p> Post</p>
                                </PostButton>
                            </ButtonSection>
                        </NewsWrapper>
                        ))}
                    </NewsContainer>
                    </>
                    )}
                </LeftWrapper>
                <RightWrapper>
                    <HotNewsText>
                        <div>실시간 인기 뉴스</div>
                    </HotNewsText>
                    {hotnewsList.map((news,index) => (
                        <HotNewsWrapper onClick={() => onClickNews(news)}>
                            <HotNewsPaper>
                                <div>{news.paper}</div>
                            </HotNewsPaper>
                            <HotNewsImageSection>
                                <HotNewsImage src={news.img_url}/>
                            </HotNewsImageSection>
                            <HotNewsTitle>
                                <div>{news.title}</div>
                            </HotNewsTitle>
                        </HotNewsWrapper>
                    ))}
                </RightWrapper>
            </MainContainer>
            { modal &&
            <ModalBackground onClick={changeModal}>
                <ModalContainer onClick={stopPropagation}>
                    <Newsview news = {selectedNews}/>
                </ModalContainer>
            </ModalBackground>
            }
        </>            
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(Body);

