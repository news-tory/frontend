import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { All, Category, CategoryWrapper, CategoryButton } from './style';



const ServerUrl = 'https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/members/'

const Modalpage = () => {

    // 정보 변경 버튼
    const onSubmit = async () => {
        try {
            const response = await axios.patch(ServerUrl, {
                //정보 입력
            });
            console.log(response.data); // 서버의 응답 데이터 확인
            alert('변경이 완료되었습니다!')
        } catch (error) {
            console.error(error);
        }
    };

    // 선호 카테고리
    const navigate = useNavigate();
    const [activeSignupForm, setActiveSignupForm] = useState('signup');
    const [activeButton, setActiveButton] = useState(false);

    const category = ['🏈 스포츠', '🌎 세계', '🎨 예술', '🎬 영화', '👫 사회', '📚 도서', '🏢 경영', '🖥️ 기술', '🧑‍🤝‍🧑 문화'];

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

export default Modalpage;