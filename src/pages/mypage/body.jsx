import { LeftWrapper,
    MainContainer,
    HomeText,
    ArticleSection,
    ArticleText,
    MyFavoriteText,
    Text,
    NewsContainer,
    CommunityWrapper,
    PostUser,
    CommunityNewsWrapper,
    ModalBackground,
    ModalContainer, 
    NewsPaper,
    NewsAbstract,
    CommunityContent,
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
import { faHeart, faComment, faTrash, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import CommunityNews from "../../components/communitynews/communitynews";
import CommunityNewsview from "../../components/communityNewsView/communitynewsview";
import PostRevise from "../../components/postrevise/postrevise";
import { authApi, noAuthApi } from "../../modules/axiosInterceptor";


function Body(props) {
const [newslist, setNewsList] = useState([]);
const [filteredNews,setFilteredNews] = useState([]);
const [activeMyFav, setActiveMyFav] = useState(false);
const navigate = useNavigate();
const [communityList, setCommunityList] = useState([]);
const [nickname, setNickname] = useState("");
const [liked,setLiked] = useState(false);

//모달창 관리 State
const [postModal, setPostModal] = useState(false);
const [newsModal, setNewsModal] = useState(false);
const [reviseModal, setReviseModal] = useState(false);
const [selectedPost,setSelectedPost] = useState({});
const [selectedCommunityPost,setSelectedCommunityPost] = useState({});
const [selectedNews, setSelectedNews] = useState({})



const fetchCommunity = async () => {
    try {
        // const token = localStorage.getItem('accToken')
        const response = await authApi.get('/community/posts/');
        // console.log(token);
        console.log(response.data); // 서버의 응답 데이터 확인
        const userArticles = response.data.filter(article => article.user === nickname);
        setCommunityList(userArticles);
    } catch (error) {
        console.log('데이터 로딩에 실패했습니다.')
        console.error(error);
    }
};

// 모달 배경 제어
const stopPropagation = (e) => {
    e.stopPropagation();
};

//마이페이지에서 내 포스트 눌렀을 때 뜨는 모달
const onClickCommunityPost = (post) => {
    setSelectedCommunityPost(post);
    changePostModal();
}
const changePostModal = () => {
    setPostModal(!postModal);
};


//수정버튼 눌렀을 때 뜨는 모달
const onClickRevise = (post) => {
    setSelectedPost(post);
    changereviseModal();
}
const changereviseModal = () => {
    setReviseModal(!reviseModal);
};
//인기뉴스 눌렀을 때 뜨는 모달
const onClickNews = (news) => {
    setSelectedNews(news);
    changeNewsModal();
}
const changeNewsModal = () => {
    setNewsModal(!newsModal);
};

const getUser = async () => {
    try{
        const response = await authApi.get('/accounts/update/');
        const userData = response.data;
        setNickname(userData.nickname)
    }
    catch(error){
            console.error(error);   
        }
    }
const fetchLikedNews = async () => {
        try {
            const response = await authApi.get(`/articles/like/user/${nickname}/`);
            console.log('124124')
            console.log(response.data); // 서버의 응답 데이터 확인
            setNewsList(response.data);
        } catch (error) {
            console.log('좋아요한 뉴스 로딩에 실패했습니다.')
            console.log(nickname)
        }
    };


    useEffect(() => {
        if (!props.isLoggedIn) {
            alert('로그인이 필요한 서비스입니다.')
            navigate("/");
        } else {
            getUser();
            fetchCommunity();
            fetchLikedNews();
        }
    }, [props.isLoggedIn]);
    

    const onClickLike = async (postId) => {
        if(props.isLoggedIn){
            try{
                const response = await authApi.post(`/community/posts/${postId}/like/`)
                fetchCommunity();
            }
            catch(error){
                console.log('like api error')
                console.error(error);
            }
        }
    }


const onClickDelete = async (postId) => {
    const confirmMessage = window.confirm('정말로 삭제하시겠습니까?')
    if(confirmMessage){
    try {
        const response = await authApi.delete(`/community/posts/${postId}/`)
        fetchCommunity();
    }
    catch(error) {
        console.log('onClickDelete Error')
    }
    }
}


return (
    <>
        <MainContainer>
            <LeftWrapper>
                <HomeText>Mypage</HomeText>
                <ArticleSection>
                    <ArticleText>
                        <Text active={!activeMyFav}> 내가 쓴 글 </Text>
                    </ArticleText>
                </ArticleSection>
                <NewsContainer>
                {communityList.map((list, index) => (
                            <CommunityWrapper key={index}>
                                <PostUser>
                                    <div>{list.user}님의 이야기</div>
                                    <NewsAbstract>
                                        <div>{list.created_at}</div>
                                        <FontAwesomeIcon icon={faFilePen} style={{color: 'grey', cursor: 'pointer'}} onClick={() => onClickRevise(list)} />
                                        <FontAwesomeIcon icon={faTrash} style={{color: 'grey', cursor: 'pointer'}} onClick={() => onClickDelete(list.id)}/>
                                    </NewsAbstract>
                                </PostUser>
                                <CommunityContent>{list.content}</CommunityContent>
                                <CommunityNewsWrapper>
                                    <CommunityNews newsId={list.article} />
                                </CommunityNewsWrapper>
                                <ButtonSection>
                                    <HeartButton>
                                        <FontAwesomeIcon icon={faHeart} style={{color: list.is_liked ? 'red': 'grey'}}onClick={() => onClickLike(list.id)}/>
                                        <p>{list.like_cnt}</p>
                                    </HeartButton>
                                    <PostButton onClick={() => onClickCommunityPost(list)}>
                                        <FontAwesomeIcon icon={faComment} />
                                        <p>Comment</p>
                                    </PostButton>
                                </ButtonSection>
                            </CommunityWrapper>
                        ))}
                </NewsContainer>
            </LeftWrapper>
            <RightWrapper>
                <HotNewsText>
                    <div>내가 좋아요 누른 기사</div>
                </HotNewsText>
                {newslist.map((news,index) => (
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
        {postModal &&
            <ModalBackground onClick={changePostModal}>
                <ModalContainer onClick={stopPropagation}>
                    <CommunityNewsview postId={selectedCommunityPost.id} articleId={selectedCommunityPost.article} />
                </ModalContainer>
            </ModalBackground>
        }
        {reviseModal &&
            <ModalBackground onClick={changereviseModal}>
                <ModalContainer onClick={stopPropagation}>
                    <PostRevise postingInf={selectedPost} />
                </ModalContainer>
            </ModalBackground>
        }
        {newsModal &&
            <ModalBackground onClick={changeNewsModal}>
                <ModalContainer onClick={stopPropagation}>
                    <Newsview news = {selectedNews} />
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