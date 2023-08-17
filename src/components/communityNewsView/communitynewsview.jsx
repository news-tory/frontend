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
    CommentPostButton,
    CommentInfWrapper,
    CommentSettingWrapper,
    ReviseCommentarea
} from './style';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faHeart, faPen, faXmark, faWrench} from '@fortawesome/free-solid-svg-icons';
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
    const [username,setUsername] = useState("");
    const [reviseComment, setReviseComment] = useState("")
    const [reviseCommentInput, setReviseCommentInput] = useState(false);

    const onClickNewsSite = (url) => {
        window.open(url,'_blank');
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
            const response = await authApi.get(`/articles/${articleId}/`);
            console.log(response.data); // 서버의 응답 데이터 확인
            setNewsData(response.data); // 선택된 뉴스 설정
        } catch (error) {
            alert('데이터 로딩에 실패했습니다.');
            navigate('/');
        }
    };

    useEffect(() => {
        fetchPosting();
        fetchnews();
        getUser();
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

    const getUser = async () => {
        try{
            const response = await authApi.get('/accounts/update/');
            setUsername(response.data.nickname);
        }
            catch(error){
                console.log('유저 정보 가져오기 실패')
                console.error(error);   
            }
        }
    
        const reviseCmt = async (commentId) => {
            try {
                const cmt = comments.find((cmt) => cmt.id === commentId);
                await authApi.patch(`/community/posts/${postId}/comment/${commentId}/`, {
                    content: cmt.reviseComment,
                });
                alert("수정되었습니다.");
                onClickRevise(commentId);
            } catch (error) {
                console.log("reviseSubmit Error");
            }
        };
        

    const deleteCmt = async (commentId) => {
        const confirmMessage = window.confirm('댓글을 삭제하시겠습니까?')
        if(confirmMessage){
        try{
            const response = await authApi.delete(`/community/posts/${postId}/comment/${commentId}/`);
            fetchPosting();
        }
        catch(error){
            console.log('deleteCmt Error');
        }
        }
    }

    const reviseSubmit = (commentId) => {
        reviseCmt(commentId);
        setReviseCommentInput(!reviseCommentInput);
        fetchPosting();
    }

    const onClickRevise = (commentId) => {
        const updatedComments = comments.map((cmt) => {
            if (cmt.id === commentId) {
                return { ...cmt, reviseCommentInput: !cmt.reviseCommentInput };
            }
            return cmt;
        });
        setComments(updatedComments);
    };

    const onClickLike = async (newsId) => {
        if(props.isLoggedIn){
            try{
                const response = await authApi.post(`/articles/${newsId}/likes/`)
                fetchnews();
            }
            catch(error){
                console.log('like api error')
                console.error(error);
            }
        }
    }

    
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
                        <ArticleImage src={newsData.img_url} style={{cursor:'pointer'}} onClick={() => onClickNewsSite(newsData.url)}/>
                    </NewsImage>
                    <ButtonSection>
                        <ViewWrapper>
                            <HeartView>
                                <FontAwesomeIcon icon={faHeart} style={{ color: newsData.user_like ? 'red' : 'grey' , cursor: 'pointer'}} onClick={() => onClickLike(newsData.id)} />
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
                    <CommmentPostContent onChange={onChangeCommenting} value={writeComment} placeholder='당신의 이야기를 들려주세요.' />
                    <CommentPostButton icon={faPen} onClick={onClickCommentPost} />
                </CommentPostWrapper>
                {comments.map((cmt) => (
                    <CommentWrapper>
                        <CommentInfWrapper>
                        <CommentUser>{cmt.user}</CommentUser>
                        {cmt.reviseCommentInput ? (
                        <ReviseCommentarea
                            value={cmt.reviseComment || ""}
                            onChange={(e) => {
                                const updatedComments = comments.map((comment) => {
                                    if (comment.id === cmt.id) {
                                        return { ...comment, reviseComment: e.target.value };
                                    }
                                    return comment;
                                });
                                setComments(updatedComments);
                            }}
                        />
                    ) : (
                        <CommmentContent>{cmt.content}</CommmentContent>
                    )}
                    </CommentInfWrapper>
                    {username === cmt.user ? (
                    <CommentSettingWrapper>
                        {cmt.reviseCommentInput ? (
                            <p onClick={() => reviseSubmit(cmt.id)} style={{cursor: 'pointer'}}>수정</p>
                        ) : (
                            <>
                            <FontAwesomeIcon icon={faWrench} onClick={() => onClickRevise(cmt.id)} style={{cursor:'pointer'}}/>
                            <FontAwesomeIcon icon={faXmark} onClick={() => deleteCmt(cmt.id)} style={{cursor:'pointer'}}/>
                            </>
                        )}
                    </CommentSettingWrapper>
                ) : null}
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