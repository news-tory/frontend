import { useState, useEffect, useCallback } from "react";
import basicimage from "../user.png";
import axios from "axios";
import { All, Nickname } from './style';
import { connect } from 'react-redux';


const ServerUrl = 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/'

function Modalpage (props){

    const [data, setData] = useState('');
    const [currentNickname, setCurrentNickname] = useState('nickname')
    const [nickname, setNickname] = useState('')
    const [isNickname, setIsNickname] = useState(false)
    const [nicknameMessage, setNicknameMessage] = useState('')


    // 원래 정보 불러오기
    const serverApi = axios.create({
        headers: {
            //   'Authorization': "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNzM2NTk3LCJpYXQiOjE2OTE3MzQ3OTcsImp0aSI6ImQ5ODVkZjExNmQ2NjQ3MjhiNDIxY2M4Y2MyMjRjNjk5IiwidXNlcl9pZCI6MX0.GGgA8q0fjRmYNT6yj9rJWfHTii03pqrFyreA1wTf4ic",
            // 'Authorization': localStorage.getItem('token')
            'Authorization': `bearer ${props.accessToken}`
        },
    });
    const userApi = async () => {
        let user = [];
        await serverApi.get(ServerUrl).then((response) => {
            user = response.data;
             console.log(user);
        })
        return user;
    }

    const getUser = async () => {
        const nowDetail = await userApi();
        setData(nowDetail);
    }

    useEffect(() => {
        getUser();
    }, [])

    // 닉네임 변경
    const onSubmit = async () => {
        try {
            const response = await axios.patch(ServerUrl,{
                "nickname": nickname,
            },{
                headers: {
                    Authorization: `bearer ${props.accessToken}`
                }
            });
            alert('변경이 완료되었습니다!')
            setNickname("")
            setCurrentNickname(nickname)
        } catch (error) {
            alert('변경에 실패했습니다. 인터넷 연결을 확인 후 다시 시도해보시겠어요?')
            console.error(error)
        }
    };

     useEffect(() => {
        getUser();
    }, [currentNickname]); // currentNickname 상태가 변경될 때마다 useEffect 실행



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

    return (
        <All>
            <Nickname>
                <h4 className="smalltitle">닉네임 변경</h4>
                <p>현재 닉네임</p>
                <input
                    type="text"
                    className="input"
                    onChange={onChangeNickname}
                    placeholder={data.nickname}
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

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(Modalpage);