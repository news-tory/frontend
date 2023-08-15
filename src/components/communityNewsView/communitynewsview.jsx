import {
    Container,
    NewsPostSection,
    NewsViewSection,
    NewsPaper,
    NewsImage,
    NewsTitle,
    NewsAbstract,
    NewsLinkButton,
    ButtonContainer,
    CommentWrapper,
    PostButton,
    ButtonSection,
    HeartView,
    PostView,
    ViewWrapper,
    NewsContainer,
    ArticleImage,
    PostingSection,
    PostingUserInfo,
    PostingContent,
    CommentUser,
    CommmentContent,
    CommentPostWrapper,
    CommmentPostContent,
    CommentPostButton
} from './style';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faHeart, faPen, faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { authApi, noAuthApi } from '../../modules/axiosInterceptor';


function CommunityNewsview(props) {
    const [like, setLike] = useState(false);
    const { postId, articleId } = props;
    const navigate = useNavigate()
    const [posting, setPosting] = useState({});
    const [comments, setComments] = useState([]);
    const [writeComment, setWriteComment] = useState("");
    const [newsData, setNewsData] = useState([]);

    const onClickNewsSite = (props) => {
        const movetoLink = prompt(newsData.url);
    }

    const fetchPosting = async () => {
        try {
            // const token = localStorage.getItem('accToken');
            const response = await authApi.get(`/community/posts/${postId}/`);
            console.log(response.data); // 서버의 응답 데이터 확인
            setPosting(response.data);
            setComments(response.data.comments);
        } catch (error) {
            alert('데이터 로드 중 오류가 발생했습니다.')
            console.error(error)
        }
    };

    const fetchnews = async () => {
        try {
            const response = await noAuthApi.get('/articles/');
            console.log(response.data); // 서버의 응답 데이터 확인
            const filteredNews = response.data.filter(news => news.id === articleId); // 수정된 부분
            setNewsData(filteredNews[0]); // 선택된 뉴스 설정
        } catch (error) {
            alert('데이터 로딩에 실패했습니다.');
            navigate('/');
        }
    };

    useEffect(() => {
        fetchPosting();
        fetchnews();
    }, [])

    const onChangeCommenting = (e) => {
        setWriteComment(e.target.value)
    }

    const onClickCommentPost = async () => {
        try {
            // const token = localStorage.getItem('accToken');
            const response = await authApi.post(`/community/posts/${postId}/comment/`, {
                content: writeComment
            });
            alert('댓글이 작성되었습니다.');
            fetchPosting();
            setWriteComment("");
        } catch (error) {
            alert('댓글을 게시하는데 문제가 발생했습니다.')
            console.error(error);
        }
    }

    // useEffect(async () => {
    //     const fetchData = async() => {
    //         const res = await axios.get()
    //         if (res.data.type === 'liked') setLike(true)
    //     }
    // fetchData()
    // },[])

    // const toggleLike = async(e) => {
    //     const res = await axios.post()
    //     setLike(!like)
    // }
    // useEffect(async () => {
    //     const fetchData = async() => {
    //         const res = await axios.get()
    //     }
    // fetchData()
    // },[])


    return (
        <Container>
            <NewsViewSection>
                <PostingSection>
                    <PostingUserInfo>
                        <div>{posting.user}님의 이야기</div>
                        <div>{posting.created_at}</div>
                    </PostingUserInfo>
                    <PostingContent>
                        {posting.content}
                    </PostingContent>
                </PostingSection>
                <NewsContainer>
                    <NewsPaper>
                        {newsData.paper}
                    </NewsPaper>
                    <NewsImage>
                        <ArticleImage src={newsData.img_url} />
                    </NewsImage>
                    <ButtonSection>
                        <ViewWrapper>
                            <HeartView>
                                <FontAwesomeIcon icon={faHeart} style={{ color: like ? 'red' : 'grey' }} />
                                <div>{newsData.like_cnt}</div>
                            </HeartView>
                            <PostView>
                                <FontAwesomeIcon icon={faPenToSquare} style={{ color: "grey", }} />
                                <div>{newsData.post_cnt}</div>
                            </PostView>
                        </ViewWrapper>
                        <div>이미지를 누르면 뉴스 사이트로 이동합니다.</div>
                    </ButtonSection>
                    <NewsTitle>
                        {newsData.title}
                    </NewsTitle>
                    <NewsAbstract>
                        {newsData.abstract}...
                        <NewsLinkButton href={newsData.url} target='blank'>원문보기</NewsLinkButton>
                    </NewsAbstract>
                </NewsContainer>
            </NewsViewSection>
            <NewsPostSection>
                <CommentPostWrapper>
                    <CommmentPostContent onChange={onChangeCommenting} placeholder='당신의 이야기를 들려주세요.' />
                    <CommentPostButton icon={faPen} onClick={onClickCommentPost} />
                </CommentPostWrapper>
                {comments.map((cmt) => (
                    <CommentWrapper>
                        <CommentUser>{cmt.user}</CommentUser>
                        <CommmentContent>{cmt.content}</CommmentContent>
                    </CommentWrapper>
                ))}
            </NewsPostSection>
        </Container>


    )

}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(CommunityNewsview);