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
import { authApi, noAuthApi } from "../../modules/axiosInterceptor";

function Body(props) {
    const [newslist, setNewsList] = useState([]);
    const [hotnewsList,setHotnewsList] = useState([]);
    const [selectedNews,setSelectedNews] = useState([]);
    const [activeMyFav, setActiveMyFav] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const [filteredNews,setFilteredNews] = useState([]);
    let [modal, setModal] = useState(false);
    const [liked,setLiked] = useState(false);
    const [likedData, setLikedData] = useState([]);

    const changeModal = () => {
        setModal(!modal);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    
    const fetchnews = async () => {
        if(props.isLoggedIn === true){
        try {
            const response = await authApi.get('/articles/');
            setNewsList(response.data);
            console.log(newslist)
        } catch (error) {
            console.log('fetchnews_noauthApi Error');
            console.error(error);
            navigate('/')
        }}
        else {
            try{
            const response = await noAuthApi.get('/articles/');
            setNewsList(response.data);
        } catch(error) {
            console.log('fetchnews_noauthApi Error')
        }
        }

    };
    
    const fetchHotnews = async () => {
        try {
            const response = await noAuthApi.get('/articles/popularity/');
            setHotnewsList(response.data);
        } catch (error) {
            console.log('실시간 인기 뉴스 로딩에 실패했습니다.')
            navigate('/')
        }
    };
    
    const onClickNews = (newsId) => {
        if(props.isLoggedIn === true){
        setSelectedNews(newsId);
        changeModal();
        } else{
            alert('로그인 후 이용가능합니다.')
            navigate('/login')
        }
    }
    
    useEffect(() => {
        getUser();
        fetchnews();
        fetchHotnews();
    },[]);

    useEffect(() => {
        const trueKeys = Object.keys(userData).filter(key => userData[key] === true);
        setFilteredNews(newslist.filter(news => trueKeys.includes(news.section)));
    }, [userData, newslist]);
    

    const onClickMyFav = () => {
        setActiveMyFav(!activeMyFav)
    }

    const getUser = async () => {
        if(props.isLoggedIn) {
        try{
            const response = await authApi.get('/accounts/update/');
            setUserData(response.data);
            console.log(userData)
        }
            catch(error){
                console.log('유저 정보 가져오기 실패')
                console.error(error);   
            }
        }}


    const onClickLike = async (newsId) => {
        if(props.isLoggedIn){
            try{
                const response = await authApi.post(`/articles/${newsId}/likes/`)
                setLiked(!liked);
                fetchnews();
            }
            catch(error){
                console.log('like api error')
                console.error(error);
            }
        }
        else{
            alert('로그인 후 이용가능합니다.')
            navigate('/login')
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
                        <NewsWrapper key={index}>
                            <NewsPaper>{news.paper}</NewsPaper>
                            <NewsImage src={news.img_url}></NewsImage>
                            <NewsTitle>{news.title}</NewsTitle>
                            <NewsAbstract>{news.abstract}</NewsAbstract>
                            <ButtonSection>
                                <HeartButton>
                                    <FontAwesomeIcon icon={faHeart} style={{color: news.user_like ? 'red' : 'grey'}} onClick={() => onClickLike(news.id)}/>
                                    <div>{news.like_cnt}</div>
                                </HeartButton>
                                <PostButton onClick={() => onClickNews(news.id)} modal = {modal} changeModal={changeModal}>
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
                                    <FontAwesomeIcon icon={faHeart} style={{color: news.user_like ? 'red' : 'grey'}} onClick={() => onClickLike(news.id)}/>
                                    <p>{news.like_cnt}</p>
                                </HeartButton>
                                <PostButton onClick={() => onClickNews(news)} modal={modal} changeModal={changeModal}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <div> Post</div>
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
                        <HotNewsWrapper onClick={() => onClickNews(news.id)}>
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
                    <Newsview newsId = {selectedNews}/>
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

