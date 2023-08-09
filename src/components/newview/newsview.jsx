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
        PostButton
} from './style' ;
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Newsview(props) {
    const {news} = props ;
    const navigate = useNavigate()
    const [posting, setPosting] = useState("");

    const onClickNewsSite = () => {
        const movetoLink = prompt(news.url);
        }

    const serverUrl = "https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/articles/nyt/"
    const postfeed = async () => {
        try {
            const response = await axios.post(serverUrl, posting);
            console.log(response.data); // 서버의 응답 데이터 확인
            navigate("/")
        } catch (error) {
            alert('업로드에 실패했습니다. 인터넷 연결을 확인 후 다시 시도해보시겠어요?')
        }
    };

    const onChangePosting = (e) => {
        setPosting(e.target.value)
    }

    return(
        <Container>
            <NewsViewSection>
                <NewsImage src={news.img_url}/>
                <NewsPaper>
                    발행사: {news.paper}
                </NewsPaper>
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
                    <PostButton>
                    {/* // onClick={postdeed}> */}
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

