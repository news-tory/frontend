import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { All, Category, CategoryWrapper, CategoryButton } from './style';
import { connect } from 'react-redux';
import { useEffect } from "react";
import { authApi } from "../../modules/axiosInterceptor";




function Modalpage(props) {

    console.log("cateToken", props.accessToken);


    // 선호 카테고리
    const navigate = useNavigate();
    const [activeSignupForm, setActiveSignupForm] = useState('signup');
    const [activeButton, setActiveButton] = useState(false);

    const category = ['스포츠', '세계', '예술', '영화', '사회', '도서', '경영', '기술', '문화'];

    //정보확인
    const [favorite, setFavorite] = useState([]);

    //오류메시지 상태저장
    const [favMessange, setFavMessage] = useState('')

    // 유효성 검사
    const [isFav, setIsFav] = useState(false)

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



    // 카테고리 변경
    const onSubmit = async () => {
        try {
            const response = await authApi.patch('/accounts/update/', {
                sport: favorite.includes('스포츠'),
                world: favorite.includes('세계'),
                art: favorite.includes('예술'),
                film: favorite.includes('영화'),
                society: favorite.includes('사회'),
                books: favorite.includes('도서'),
                business: favorite.includes('경영'),
                tech: favorite.includes('기술'),
                culture: favorite.includes('문화'),
              });
              console.log(response.data); 
              alert('카테고리 변경이 완료되었습니다.')
        } catch (error) {
          console.error(error);
        }
      };
    
  

    return (
        <All>
        <Category>
            <h4 className="smalltitle">선호 카테고리 변경</h4>

            <CategoryWrapper>
                {category.map((category) => (
                    <CategoryButton
                        onClick={() => onClickFav(category)}
                        active={favorite.includes(category)}>
                        {category}
                    </CategoryButton>
                ))}
            </CategoryWrapper>
            <button onClick={onSubmit}>변경</button>
        </Category>
        </All>

    )
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(Modalpage);