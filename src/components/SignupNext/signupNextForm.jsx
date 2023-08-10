import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Wrapper, TitleText, FootButton, SubTitleText, SignupFormStructure, CategoryButton, CategoryWrapper} from "./style.jsx"
import { useSignupContext } from "../signupForm/signupContext.js";
import newstory from "../../components/header/newstory.png"
import LoginForm from "../LoginForm/loginForm.jsx";

const ServerUrl = 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/register/';

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
          const response = axios.post(ServerUrl, {
              nickname: nickname,
              email: email,
              password: password,
              sport: favorite.includes('스포츠'),
              world: favorite.includes('세계'),
              art: favorite.includes('예술'),
              film: favorite.includes('영화'),
              society: favorite.includes('사회'),
              books: favorite.includes('도서'),
              business: favorite.includes('경영'),
              tech: favorite.includes('기술'),
              culture: favorite.includes('문화')
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