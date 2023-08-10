import { useState, useRef, useCallback } from "react";
import basicimage from "../user.png";
import axios from "axios";
import { All, Nickname } from './style';

const ServerUrl = 'https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/members/'

const Modalpage = () => {

    const [currentNickname, setCurrentNickname] = useState('nickname')
    const [nickname, setNickname] = useState('')
    const [isNickname, setIsNickname] = useState(false)
    const [nicknameMessage, setNicknameMessage] = useState('')


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

    return (
        <All>
            <Nickname>
                <h4 className="smalltitle">닉네임 변경</h4>
                <p>현재 닉네임</p>
                <input
                    type="text"
                    className="input"
                    onChange={onChangeNickname}
                    placeholder={currentNickname}
                    disabled={true} />
                <p>변경할 닉네임</p>
                <input
                    type="text"
                    className="input"
                    onChange={onChangeNickname}
                    placeholder="변경할 닉네임을 입력하세요." />
                <button onClick={onSubmit}>변경</button>
                {nickname.length > 0 && (
                    <div id='message' className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</div>
                )}
            </Nickname>
        </All>

    )
};

export default Modalpage;