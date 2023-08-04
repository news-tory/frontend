import { All, Image, Nickname, Password, Category, Every, CategoryButton, CategoryWrapper } from "./style";
import { useState, useRef, useCallback } from "react";
import axios from "axios";
import basicimage from "../user.png";
import { useNavigate } from "react-router";

const ServerUrl = 'https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/members/'


const Modalpage = () => {
    const [nickname, setNickname] = useState('')
    const [fileImage, setFileImage] = useState('');
    const fileInputRef = useRef(null);

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [isNickname, setIsNickname] = useState(false)
    const [nicknameMessage, setNicknameMessage] = useState('')


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


    // 이미지 파일 저장 (URL.createObjectURL : client 내에서만 이용 가능. 미리보기)
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        // console.log(e.target.files[0]);
    };

    // 이미지 파일 삭제 (미리보기)
    const deleteFileImage = () => {
        if (!fileImage) {
            alert('이미지가 없습니다')
            return;
        }
        URL.revokeObjectURL(fileImage);
        setFileImage('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // 이미지 서버로 전송?
    const UploadFile = async (e) => {
        if (!fileImage) {
            alert('이미지를 먼저 선택하시오');
            return;
        }
        const formData = new FormData();
        formData.append('image', fileImage);

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('이미지 업로드 성공:', response.data);
        } catch (error) {
            console.error('이미지 업로드 실패:', error);
        }
    };


    // 닉네임 우효성 검사
    const onChangeNickname = useCallback((e) => {
        const nicknameRegex = /^[a-zA-Z0-9가-힣]{3,8}$/;
        const nicknameCurrent = e.target.value
        setNickname(nicknameCurrent)

        if (!nicknameRegex.test(nicknameCurrent)) {
            setNicknameMessage('3-8자리 닉네임만 가능합니다')
            setIsNickname(false)
        } else {
            setNicknameMessage('멋진 닉네임이네요!☺️')
            setIsNickname(true)
        }
    }, [])

    // 비밀번호 유효성 검사

    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)

        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
            setIsPassword(false)
        } else {
            setPasswordMessage('안전한 비밀번호에요☺️')
            setIsPassword(true)
        }
    }, [])

    const [button, setButton] = useState(false);

    // 비밀번호 확인
    const onChangePasswordConfirm = useCallback((e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요!')
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요.')
            setIsPasswordConfirm(false)
        }
    },
        [password]
    )

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
        <Every>
            <h3 className="title">프로필 설정</h3>

            <All>
                <div className="left-pane">
                    <Image>

                        <h4 className="smalltitle">프로필 이미지 변경</h4>
                        {fileImage ?
                            <img
                                className="viewimage"
                                src={fileImage}
                            // alt="이미지 미리보기" 
                            />
                            : <img
                                className="viewimage"
                                src={basicimage} />
                        }
                        {!fileImage &&
                            <input
                                className="changeimg"
                                type="file"
                                accept="image/*"
                                onChange={saveFileImage} />
                        }
                        <div className="buttons">
                            <button className="button"
                                onClick={() => deleteFileImage()}> 삭제 </button>
                            <button className="button"
                                onClick={UploadFile}>변경</button>
                        </div>
                    </Image>
                    <Nickname>
                        <h4 className="smalltitle">닉네임 변경</h4>
                        <input
                            type="text"
                            className="input"
                            onChange={onChangeNickname} />
                        <button onClick={onSubmit}>변경</button>
                        {nickname.length > 0 && (
                            <div id='message' className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</div>
                        )}
                    </Nickname>
                </div>
                <div className="right-pane">
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
                    <Password>
                        <h4 className="smalltitle">비밀번호 변경</h4>
                        <div>
                            <input
                                className="input"
                                passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
                                placeholder="비밀번호"
                                onChange={onChangePassword}
                                title="비밀번호"
                                typeTitle="password" />
                            {password.length > 0 ? (
                                <div id="message" className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</div>
                            ) : <div id="nomessage"> </div>}
                        </div>
                        <div>
                            <input
                                className="input"
                                onChange={onChangePasswordConfirm}
                                passwordText=" "
                                placeholder="비밀번호 확인"
                                title="비밀번호 확인"
                                typeTitle="passwordConfirm" />
                            <button onClick={onSubmit}>변경</button>
                            {passwordConfirm.length > 0 ? (
                                <div id="message" className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</div>
                            ) : <div id="nomessage"> </div>}
                        </div>
                    </Password>
                    

                </div>

            </All>
        </Every>
    )
}
export default Modalpage;


