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
        ViewWrapper
} from './style' ;
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faHeart} from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Newsview(props) {
    const [like, setLike] = useState(false);
    const {news} = props ;
    const navigate = useNavigate()
    const [posting, setPosting] = useState("");
    
    const onClickNewsSite = () => {
        const movetoLink = prompt(news.url);
        }

    const serverUrl = "https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/community/posts/"
    const postfeed = async () => {
        try {
            const token = localStorage.getItem('accToken');
            const response = await axios.post(serverUrl,{
                article: news.id,
                content: posting
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data); // 서버의 응답 데이터 확인
            alert('게시되었습니다.')
            setPosting("")
        } catch (error) {
            alert('업로드에 실패했습니다. 인터넷 연결을 확인 후 다시 시도해보시겠어요?')
            console.error(error)
        }
    };

    const onChangePosting = (e) => {
        setPosting(e.target.value)
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
                        <FontAwesomeIcon icon={faHeart} style={{ color: like ? '#BABABA' : '#ededed' }} />
                        <p></p>
                    </HeartView>
                    <PostView>
                        <FontAwesomeIcon icon={faPenToSquare} style={{color: "grey",}} />
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
                <PostText>
                    <div>포스트</div>
                    <PostButton onClick={postfeed}>
                        공유하기 <FontAwesomeIcon icon={faPenToSquare} style={{color: "#4ad395",}} />
                        </PostButton>
                </PostText>
                <PostInput 
                    placeholder='다양한 분야에서 해당 기사를 공부한 글을 적어주세요!'
                    onChange={onChangePosting}
                    />
            </NewsPostSection>
        </Container>
        

    )

}

