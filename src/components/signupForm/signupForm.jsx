import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Wrapper, LoginChangeButton, LoginandSignupWrapper, SignupChangebutton, EmailField, TextField, PasswordField, NicknameField, ErrorMessage, FootButton, FootButtonType, SignupFormStructure, LoginImage, LogoImage} from "./style.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt,faLock, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import newstory from "../../components/header/newstory.png"
import LoginForm from "../LoginForm/loginForm.jsx";

const ServerUrl = 'https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/members/signup/'

function SignupForm(){
    const navigate = useNavigate();
    const [activeSignupForm, setActiveSignupForm] = useState('signup');
    //정보확인
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nickname,setNickname] = useState('');

   //오류메시지 상태저장
   const [nicknameMessage, setNicknameMessage] = useState('')
   const [emailMessage, setEmailMessage] = useState('')
   const [passwordMessage, setPasswordMessage] = useState('')
   const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    // 유효성 검사
    const [isNickname, setIsNickname] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)


    const onSubmit = async () => {
      try {
            const response = axios.post(ServerUrl, {
                //정보 입력
            });
            console.log(response.data); // 서버의 응답 데이터 확인
            alert('회원가입이 완료되었습니다! 로그인을 다시 해주세요 :)')
            navigate('/login')
      } catch (error) {
        console.error(error);
      }
    };

    const onChangeEmail = useCallback((e) => {
        const emailRegex =
          /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)
    
        if (!emailRegex.test(emailCurrent)) {
          setEmailMessage('이메일 형식이 틀렸어요😢')
          setIsEmail(false)
        } else {
          setEmailMessage('올바른 이메일 형식이에요😉')
          setIsEmail(true)
        }
      }, [])

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

    const [button,setButton] = useState(false);

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


    const gotoMain = () => {
        navigate('/');
    }

    const loginActive = () => {
      setActiveSignupForm('login');
  }
  
    return(
      <>
      {activeSignupForm === 'signup' ? (
        <Wrapper>
          <SignupFormStructure onSubmit={onSubmit}>
            <LoginandSignupWrapper>
              <LoginChangeButton onClick = {loginActive}>
                로그인
              </LoginChangeButton>
              <SignupChangebutton>
                회원가입
              </SignupChangebutton>
            </LoginandSignupWrapper>
              <div className="formbox">
              <TextField>
                <FontAwesomeIcon icon={faAt} style={{color: "#4ad395",}} />
                <EmailField 
                  text="이메일" 
                  type="email" 
                  typeName="email" 
                  placeholder = "이메일"
                  onChange={onChangeEmail}/>
              </TextField>
              {email.length > 0 && <ErrorMessage className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</ErrorMessage>}
              </div>

              <div className="formbox">
              <TextField>
                <FontAwesomeIcon icon={faLock} style={{color: "#4ad395",}} />
                <PasswordField
                  onChange = {onChangePassword}
                  passwordText = "비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
                  placeholder = "비밀번호"
                  title="비밀번호"
                  typeTitle="password"/>
              </TextField>
              {password.length > 0 && (
                  <ErrorMessage className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</ErrorMessage>
              )}
              </div>

              <div>
              <TextField>
                <FontAwesomeIcon icon={faLock} style={{color: "#4ad395",}} />
                <PasswordField
                  onChange={onChangePasswordConfirm}
                  passwordText=" "
                  placeholder="비밀번호 확인"
                  title="비밀번호 확인"
                  typeTitle="passwordConfirm"/>
              </TextField>
              {passwordConfirm.length > 0 && (
                  <ErrorMessage className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</ErrorMessage>
              )}
              </div>

              <div className="formbox">
              <TextField>
              <FontAwesomeIcon icon={faCircleUser} style={{color: "#4ad395",}} />
                <NicknameField 
                  onChange={onChangeNickname}
                  placeholder="사용하실 닉네임을 입력해주세요."
                  title="닉네임 입력"
                  typeTitle="nickname"/>
              </TextField>
              
              {nickname.length > 0 && (
                  <ErrorMessage className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</ErrorMessage>
              )}
              </div>

              {/* 이름, 이메일, 패스워드, 패스워드 확인이 다 맞다면 주황버튼으로 */}
              <div>
              <section>
                  <FootButton
                  type="submit"
                  footButtonType={FootButtonType.ACTIVATION}
                  disabled={!(isNickname && isEmail && isPassword && isPasswordConfirm)}
                  >
                  다음
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

export default SignupForm;