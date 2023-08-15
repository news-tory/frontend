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
import { authApi, noAuthApi } from '../../modules/axiosInterceptor';

function PostRevise(props) {
    const [like, setLike] = useState(false);
    const {postingInf} = props;
    const navigate = useNavigate()
    const [posting, setPosting] = useState(`${postingInf.content}`);
    const [userData,setUserData] = useState([]);
    const [postData, setPostData] = useState({});
    const [news,setNews] = useState([]);
    
    const onClickNewsSite = () => {
        const movetoLink = prompt(news.url);
        }

    const revisefeed = async () => {
        try {
            // const token = localStorage.getItem('accToken');
            const response = await authApi.put(`/community/posts/${postingInf.id}/`,{
                content: posting
            });
            console.log(response.data); // 서버의 응답 데이터 확인
            alert('수정되었습니다.')
            setPosting("")
        } catch (error) {
            alert('업로드에 실패했습니다. 인터넷 연결을 확인 후 다시 시도해보시겠어요?')
            console.error(error)
            console.log(error);
        }
    };

    // const fetchPosting = aync () => {
    //     try{
    //         const response = await authApi.get(`/community/posts/${postId}`)
    //         setPostData(response.data);
    //         setPosting(response.data.content)
    //     }
    //     catch(error){
    //         console.log('fetchposting Error')
    //     }
    // } 
    
    const fetcharticle = async() => {
        try{
            const response = await noAuthApi.get(`/articles/${postingInf.article}/`)
            setNews(response.data)
        }
        catch(error){
            console.log('fetcharticle error');
        }
    } 
    const onChangePosting = (e) => {
        setPosting(e.target.value)
    }

    useEffect(() => {
        fetcharticle();
    },[])

    
    return(
        <Container>
            <NewsViewSection>
                <NewsPaper>
                    {news.paper}
                </NewsPaper>
                <NewsImage src={news.img_url}/>
                <ButtonSection>
                    <ViewWrapper>
                    <HeartView>
                        <FontAwesomeIcon icon={faHeart} style={{ color: like ? '#BABABA' : 'grey' }} />
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
                            <PostButton onClick={revisefeed}>
                                공유하기 <FontAwesomeIcon icon={faPenToSquare} style={{color: "#4ad395",}} />
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


export default connect(mapStateToProps)(PostRevise);
