import {Container,
        NewsPostSection,
        NewsViewSection,
        NewsPaper,
        NewsImage,
        NewsTitle,
        NewsAbstract,     
        NewsLinkButton,
        ButtonContainer,
        PostText,
        PostInput,
        InputWrapper,
        PostButton,
        ButtonSection,
        HeartView,
        PostView,
        ViewWrapper,
        LoginInformImage,
        LoginInform,
        LoginInformText
} from './style' ;
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faHeart} from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import newscat from '../../images/catnews.png'
import { connect } from 'react-redux';
import { authApi } from '../../modules/axiosInterceptor';

function Newsview(props) {
    const [like, setLike] = useState(false);
    const {newsId} = props;
    const navigate = useNavigate()
    const [posting, setPosting] = useState("");
    const [userData,setUserData] = useState([]);
    const [news,setNews] = useState([]);

    const onClickNewsSite = (url) => {
        window.open(url,'_blank');
        }

    const fetchnews = async () => {
        try{
            const response = await authApi.get(`/articles/${newsId}/`)
            setNews(response.data);
        } catch(error){
            console.log("newsview_fetchnews Error");
        }
    }
    const postfeed = async () => {
        try {
            // const token = localStorage.getItem('accToken');
            const response = await authApi.post('/community/posts/',{
                article: news.id,
                content: posting
            });
            console.log(response.data); // 서버의 응답 데이터 확인
            alert('게시되었습니다.');
            setPosting("");
        } catch (error) {
            alert('업로드에 실패했습니다. 인터넷 연결을 확인 후 다시 시도해보시겠어요?')
            console.error(error)
        }
    };

    const getUser = async () => {
        try{
            const response = await authApi.get('/accounts/update/');
            setUserData(response.data);
            console.log(userData)
        }
            catch(error){
                console.log('유저 정보 가져오기 실패')
                console.error(error);   
            }
        }
    
    const onChangePosting = (e) => {
        setPosting(e.target.value)
    }

    useEffect(() => {
        getUser();
        fetchnews();
        console.log(newsId);
    },[])


    const onClickLike = async() => {
        try{
            const res = await authApi.post(`/articles/${news.id}/likes/`)
        fetchnews();
    } catch(error){
        console.log("newsview_onClickLike Error")
    }
    }
    

    
    return(
        <Container>
            <NewsViewSection>
                <NewsPaper>
                    {news.paper}
                </NewsPaper>
                <NewsImage src={news.img_url} onClick={() => onClickNewsSite(news.url)} style={{cursor: 'pointer'}}/>
                <ButtonSection>
                    <ViewWrapper>
                    <HeartView>
                        <FontAwesomeIcon icon={faHeart} onClick={onClickLike} style={{ color: news.user_like ? 'red' : 'grey' , cursor: 'pointer'}} />
                        <div>{news.like_cnt}</div>
                    </HeartView>
                    <PostView>
                        <FontAwesomeIcon icon={faPenToSquare} style={{color: "grey",}} />
                        <div>{news.post_cnt}</div>
                    </PostView>
                    </ViewWrapper>
                    <div>이미지를 누르면 뉴스 사이트로 이동합니다.</div>
                </ButtonSection>
                <NewsTitle> 
                    {news.title}
                </NewsTitle>
                <NewsAbstract>
                    {news.abstract}...
                <NewsLinkButton href={news.url} target='blank'>원문보기</NewsLinkButton>
                </NewsAbstract>
            </NewsViewSection>
            <NewsPostSection>
                {props.isLoggedIn === true ? (
                    <>
                        <PostText>
                            <div>{userData.nickname}</div>
                            <PostButton onClick={postfeed}>
                                공유하기
                                </PostButton>
                        </PostText>
                        <PostInput 
                            placeholder='다양한 분야에서 해당 기사를 공부한 글을 적어주세요!'
                            value={posting}
                            onChange={onChangePosting}
                            />
                    </>
                    ): (
                        <LoginInform>
                            <LoginInformImage src={newscat}/>
                            <LoginInformText>로그인 후 글 작성이 가능합니다.</LoginInformText>
                        </LoginInform>
                    )}
            </NewsPostSection>
        </Container>
        

    )

}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(Newsview);
