import {
    MainWrapper,
    MainContainer,
    CommunityText,
    CommunityContainer,
    CommunityWrapper,
    CommunityNewsWrapper,
    CommunityContent,
    ModalBackground,
    ModalContainer,
    PostUser,
    NewsAbstract,
    ButtonSection,
    HeartButton,
    PostButton
} from "./style";
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Newsview from "../../components/newview/newsview";
import CommunityNews from "../../components/communitynews/communitynews"
import CommunityNewsview from "../../components/communityNewsView/communitynewsview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faTrash , faFilePen} from "@fortawesome/free-solid-svg-icons";
import {authApi} from "../../modules/axiosInterceptor";
import { connect } from 'react-redux';
import store from "../../store";



function Body(props) {
    
    const serverUrl = "https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/community/posts/"
    const [communityList, setCommunityList] = useState([]);
    const [selectedNews, setSelectedNews] = useState([]);
    const [activeMyFav, setActiveMyFav] = useState(false);
    const navigate = useNavigate();
    let [modal, setModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState([]);
    const [newsModal, setNewsModal] = useState(false);

    
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    
    console.log('ComToken', props.accessToken);
    const fetchCommunity = async () => {
        try {
            // const token = localStorage.getItem('accToken')
            const response = await authApi.get('/community/posts/');
            // console.log(token);
            console.log(response.data); // 서버의 응답 데이터 확인
            setCommunityList(response.data);
        } catch (error) {
            alert('인터셉터에 실패했습니다.')
            console.log(store.getState())
            console.error(error);
        }
    };
    
    const onClickPosts = (post) => {
        setSelectedPost(post);
        console.log(post)
        changeModal();
    }
    const changeModal = () => {
        setModal(!modal);
    };
    

 
    useEffect(() => {
        if (!props.isLoggedIn) {
            alert('로그인이 필요한 서비스입니다.')
            navigate("/");
        } else {
            fetchCommunity();
        }
    }, [props.isLoggedIn]);
    


    const newsclick = (post) => {
        setSelectedNews(post);
        console.log(post)
        changeNewsModal();
    }

    const changeNewsModal = () => {
        setNewsModal(!newsModal);
    };
    

    const onClickMyFav = () => {
        setActiveMyFav(!activeMyFav)
        console.log(activeMyFav)
    }

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
        else{
            alert('로그인 후 이용가능합니다.')
            navigate('/login')
        }
    }
    
    return (
        <>
            <MainContainer>
                <MainWrapper>
                    <CommunityText>Community</CommunityText>
                    <CommunityContainer>
                        {communityList.map((list, index) => (
                            <CommunityWrapper key={index}>
                                <PostUser>
                                    <div>{list.user}</div>
                                    <NewsAbstract>
                                        <div>{list.created_at}</div>
                                    </NewsAbstract>
                                </PostUser>
                                <CommunityContent>{list.content}</CommunityContent>
                                <CommunityNewsWrapper>
                                    <CommunityNews newsId={list.article} />
                                </CommunityNewsWrapper>
                                <ButtonSection>
                                    <HeartButton>
                                        <FontAwesomeIcon icon={faHeart} style={{color: list.is_liked ? 'red': 'grey'}} onClick={() => onClickLike(list.id)}/>
                                        <p>{list.like_cnt}</p>
                                    </HeartButton>
                                    <PostButton onClick={() => onClickPosts(list)}>
                                        <FontAwesomeIcon icon={faComment} />
                                        <p>Comment</p>
                                    </PostButton>
                                </ButtonSection>
                            </CommunityWrapper>
                        ))}
                    </CommunityContainer>
                </MainWrapper>
            </MainContainer>
            {modal &&
                <ModalBackground onClick={changeModal}>
                    <ModalContainer onClick={stopPropagation}>
                        <CommunityNewsview postId={selectedPost.id} articleId={selectedPost.article} />
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