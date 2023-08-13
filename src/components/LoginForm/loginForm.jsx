import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Wrapper, LoginandSignupWrapper, LoginChangeButton, SignupChangebutton, EmailField, TextField, PasswordField, ErrorMessage, FootButton, FootButtonType, LoginFormStructure} from "./style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import SignupForm from "../signupForm/signupForm.jsx";
import { connect } from 'react-redux';
import { loginSuccess, loginFailure, saveResponseData } from '../../modules/authActions.js'
import { useDispatch, useSelector } from "react-redux";



function LoginForm(props) {
    const ServerUrl = 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/auth/';
    const navigate = useNavigate();
    const [activeSignupForm, setActiveSignupForm] = useState('login');
    // 정보확인
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 오류메시지 상태저장
    const [emailMessage, setEmailMessage] = useState('');

    // 유효성 검사
    const [isEmail, setIsEmail] = useState(false);


    console.log('Isloggedinlogin:', props.isLoggedIn)

    const dispatch = useDispatch();
    const accessToken = useSelector(store => store);

    const onSubmit = async () => {
        try {
            const response = await axios.post(ServerUrl, {
                email: email,
                password: password
            });
            localStorage.clear()

            // REDUX에 accessToken 저장
            const accToken = response.data.token.access;
            props.loginSuccess(accToken);
            dispatch(props.saveResponseData(accToken));

            // local에 accessToken, refreshToken 저장
            const refToken = response.data.token.refresh;
            localStorage.setItem('refToken', refToken)
            localStorage.setItem('accToken', accToken)

            alert('환영합니다');
            navigate('/');
            console.log('Isloggedinlogin:', props.isLoggedIn)

            // console.log('TOken: ', props.accessToken)
            
        } catch (error) {
            props.loginFailure();
            alert('회원 정보가 일치하지 않습니다.')
            console.error(error);
        }
    };

    const onChangeEmail = useCallback((e) => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);

        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage('이메일 형식을 잘못 쓰진 않았나요?🤔');
            setIsEmail(false);
        } else {
            setEmailMessage('올바른 이메일 형식이에요😉');
            setIsEmail(true);
        }
    }, []);

    const gotoMain = () => {
        navigate('/');
    };

    const signupActive = () => {
        setActiveSignupForm('signup');
    }

    return (
        <>
        {activeSignupForm === 'signup'? (
            <SignupForm/>
        ):(
            <Wrapper>
                <LoginFormStructure>
                    <LoginandSignupWrapper>
                        <LoginChangeButton>
                            로그인
                        </LoginChangeButton>
                        <SignupChangebutton onClick={signupActive}>
                            회원가입
                        </SignupChangebutton>
                    </LoginandSignupWrapper>
                    <div className="formbox">
                        <TextField>
                            <FontAwesomeIcon icon={faAt} style={{ color: "#4ad395" }} />
                            <EmailField
                                text="이메일"
                                type="email"
                                typeName="email"
                                placeholder="이메일"
                                onChange={onChangeEmail}
                            />
                        </TextField>
                        {email.length > 0 && (
                            <ErrorMessage className={`message ${isEmail ? 'success' : 'error'}`}>
                                {emailMessage}
                            </ErrorMessage>
                        )}
                    </div>

                    <div className="formbox">
                        <TextField>
                            <FontAwesomeIcon icon={faLock} style={{ color: "#4ad395" }} />
                            <PasswordField
                                onChange={(e) => setPassword(e.target.value)}
                                passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
                                placeholder="비밀번호"
                                title="비밀번호"
                                typeTitle="password"
                            />
                        </TextField>
                    </div>

                    <div>
                        <section>
                            <FootButton type="submit" footButtonType={FootButtonType.ACTIVATION} onClick = {onSubmit}>
                                로그인
                            </FootButton>
                        </section>
                    </div>
                </LoginFormStructure>
            </Wrapper>
        )}
        </>
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});

const mapDispatchToProps = {
    loginSuccess,
    loginFailure,
    saveResponseData,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
