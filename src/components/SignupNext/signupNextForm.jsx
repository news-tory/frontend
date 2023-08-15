import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Wrapper, TitleText, FootButton, SubTitleText, SignupFormStructure, CategoryButton, CategoryWrapper} from "./style.jsx"
import { useSignupContext } from "../signupForm/signupContext.js";
import newstory from "../../images/newstory.png"
import LoginForm from "../LoginForm/loginForm.jsx";
import { noAuthApi } from "../../modules/axiosInterceptor.js";


function SignupNextForm({updateActiveNextForm}){
    const navigate = useNavigate();
    const [activeSignupForm, setActiveSignupForm] = useState('signup');
    const [activeButton, setActiveButton] = useState(false);
    const {nickname, email, password} = useSignupContext();

    const category = ['스포츠','세계','예술','영화','사회','도서','경영','기술','문화'];

    //정보확인
    const [favorite,setFavorite] = useState([]);

   //오류메시지 상태저장
   const [favMessange, setFavMessage] = useState('')

    // 유효성 검사
    const [isFav, setIsFav] = useState(false)


    const onSubmit = async () => {
      try {
          const response = noAuthApi.post('/accounts/register/', {
              nickname: nickname,
              email: email,
              password: password,
              Sport: favorite.includes('스포츠'),
              World: favorite.includes('세계'),
              Art: favorite.includes('예술'),
              Film: favorite.includes('영화'),
              Society: favorite.includes('사회'),
              Books: favorite.includes('도서'),
              Business: favorite.includes('경영'),
              Tech: favorite.includes('기술'),
              Culture: favorite.includes('문화')
            });
            console.log(response.data); // 서버의 응답 데이터 확인
            alert('회원가입이 완료되었습니다! 로그인을 다시 해주세요 :)')
            updateActiveNextForm(false);
      } catch (error) {
        console.error(error);
      }
    };


    const onClickFav = useCallback(
      (selectedCategory) => {
        if (favorite.includes(selectedCategory)) {
          setFavorite((prevFavorites) => prevFavorites.filter((fav) => fav !== selectedCategory));
        } else {
          setFavorite((prevFavorites) => [...prevFavorites, selectedCategory]);
        }
      },
      [favorite]
    );

    const loginActive = () => {
      setActiveSignupForm('login');
  }
  
    return(
      <>
      {activeSignupForm === 'signup' ? (
        <Wrapper>
          <SignupFormStructure>
            <TitleText>원하는 기사의 종류를 골라주세요!</TitleText>
            <SubTitleText>선택한 종류의 기사를 추천해드려요</SubTitleText>
              <CategoryWrapper>
                {category.map((category) => (
                  <CategoryButton 
                    onClick={() => onClickFav(category)}
                    active={favorite.includes(category)}
                    >{category}</CategoryButton>
                ))}
              </CategoryWrapper>
              <div>
              <section>
                  <FootButton onClick = {onSubmit}>
                    완료
                  </FootButton>
              </section>
              </div>
        </SignupFormStructure>
    </Wrapper>
      ): (
        <LoginForm/>
      )}
    </>
    )
}

export default SignupNextForm;