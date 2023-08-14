import { useState, useRef, useCallback } from "react";
import axios from "axios";
import { All, Password } from './style';
import { connect } from 'react-redux';

const ServerUrl = 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/'

const Modalpage = (props) => {


    const [userpassword, setUserpassword] = useState('123456aa!')
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [userpasswordMessage, setUserpasswordMessage] = useState('');
    const [isTruepassword, setIsTruepassword] = useState(false);
    const [userinputpassword, setUserinputpassword] = useState('');


    // 정보 변경 버튼
    const onSubmit = async () => {
        try {
            const response = await axios.patch(ServerUrl, {
                password: password,
            }, {
                headers: {
                    Authorization: `bearer ${props.accessToken}`
                }
            });
            console.log('password', passwordConfirm);
            setUserpassword(password)
            alert('변경이 완료되었습니다!')
        } catch (error) {
            alert('변경에 실패했습니다. 인터넷 연결을 확인 후 다시 시도해보시겠어요?')
            console.error(error);
        }
    };

    // 현재 비밀번호 일치 검사

    const onChangeUserpassword = useCallback((e) => {
        const inputed = e.target.value;
        setUserinputpassword(inputed);
        // const Userinputpassword = e.target.value
        // if (Userinputpassword === userpassword) {
        //     setUserpasswordMessage('비밀번호가 일치합니다')
        //     setIsTruepassword(true)
        // } else {
        //     setUserpasswordMessage('현재 비밀번호를 올바르게 입력해주세요')
        //     setIsTruepassword(false)
        // }

    }, [])

    const onConfirm = async () => {
        try {
            const response = await axios.post(ServerUrl, {
                password: '3dlrkdms!',
            }, {
                headers: {
                    Authorization: `bearer ${props.accessToken}`,
                }
            });
            // console.log('password', passwordConfirm);
            // setUserpassword(password)
            alert('확인이 완료되었습니다!')
            console.log(response);
            console.log(userinputpassword);

        } catch (error) {
            alert('확인에 실패했습니다. 인터넷 연결을 확인 후 다시 시도해보시겠어요?')
            console.error(error);
            console.log(userinputpassword);
        }
    };



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

    return (
        <All>
            <Password>
                <h4 className="smalltitle">비밀번호 변경</h4>
                <div>
                    <input
                        className="input"
                        placeholder="현재 비밀번호"
                        title="비밀번호"
                        onChange={onChangeUserpassword}
                        typeTitle="password" />
                    <button onClick={onConfirm}>확인</button>
                    {/* {password.length > 0 ? (
                        <div id="message" className={`message ${isTruepassword ? 'success' : 'error'}`}>{userpasswordMessage}</div>
                    ) : <div id="nomessage"> </div>} */}

                </div>
                <div>
                    <input
                        className="input"
                        passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
                        placeholder="새 비밀번호"
                        onChange={onChangePassword}
                        title="비밀번호"
                        typeTitle="password"
                        disabled={!isTruepassword}
                    />
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
                        typeTitle="passwordConfirm"
                        disabled={!isTruepassword}
                    />
                    <button onClick={onSubmit}>변경</button>
                    {passwordConfirm.length > 0 ? (
                        <div id="message" className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</div>
                    ) : <div id="nomessage"> </div>}
                </div>
            </Password>
        </All>

    )
};


const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(Modalpage);
