import { Sidebar, Profile, All, Modaltoo, Itsmodal, ModalContainer, Tologin, Section, Goto } from "./style";
import { useState, useEffect } from "react";
import basicimage from "../../images/BasicProfile.png";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Modalpage from '../changemodal';
import logo from './newstory.png'
import home from './home.png';
import community from './community.png';
import search from './search.png';
import mypage from './mypage.png';

import { connect } from 'react-redux';
import { logout } from '../../modules/authActions';
import { authApi } from "../../modules/axiosInterceptor";

const ServerURL = `https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/`

function Body(props) {

    // 로그인 판별
    // const [isloggedin, setIsloggedin] = useState(!!TOKEN)

    // const [isloggedin, setIsloggedin] = useState(false)




    // 유저 정보 get
    const [data, setData] = useState('');

    const getUser = async () => {
        if (props.isLoggedIn) {
            try {
                const response = await authApi.get('/accounts/update/');
                setData(response.data);
                // console.log(data);
            } catch (error) {
                console.log('유저 정보 가져오기 실패');
                console.error(error);
            }
        }
    };

    useEffect(() => {
        getUser();
    }, [])




    // 로그아웃
    const Onclicklogout = async () => {
        try {
            localStorage.removeItem('refToken');

            const response = await axios.delete(`https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/auth/`, {
            });
            props.logout();
            // const TOKEN = localStorage.getItem('token')
            console.log('삭제 요청 성공:', response.data);
            // console.log(localStorage.getItem('token'))
            // console.log(TOKEN)
            // setIsloggedin(!!TOKEN)
            // console.log(isloggedin)


        } catch (error) {
            console.error('삭제 요청 실패:', error);
        }
    };


    // 모달창 관리
    let [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    };
    const closeModal = () => {
        getUser();
        setModal(false);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };


    const [image, setImage] = useState('');
    const [id, setId] = useState('');

    const userkey = useParams().userkey;


    // islogin 확인
    // console.log(isloggedin)


    // console.log(data);


    return (
        <Modaltoo>
            <Sidebar className="v-line">

                <All>
                    <img className='logo' src={logo}></img>

                    <Profile>
                        {props.isLoggedIn ?
                            <img style={{ borderRadius: '50px' }} className='basicimage' src={`https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app${data.userImg}`} alt="User Profile" />

                            :
                            <img className='basicimage' src={basicimage} alt="User Profile" />
                        }



                        {props.isLoggedIn ?
                            <>

                                <div style={{ display: 'flex' }}>
                                    <h5 className="nickname">{data.nickname}</h5>
                                    <FontAwesomeIcon
                                        onClick={openModal} className='pencil' icon={faPencil} />

                                </div>
                            </> :
                            <Tologin>
                                <Link to="/login" className="tologin">
                                    <h5>로그인을 해주세요.</h5>
                                </Link>
                            </Tologin>}
                    </Profile>
                    <Section>
                        <Goto>
                            <img className="gotoimage" src={home}></img>
                            <Link to='/' className="noline">
                                <p>Home</p></Link>
                        </Goto>
                        <Goto>
                            <img className="gotoimage" src={search}></img>
                            <Link to='/search' className="noline">
                                <p>Search</p></Link>
                        </Goto>
                        <Goto>
                            <img className="gotoimage" src={community}></img>
                            <Link to='/community' className="noline">
                                <p>Community</p></Link>
                        </Goto>
                        {props.isLoggedIn ?
                            <Goto>
                                <img className="gotoimage" src={mypage}></img>
                                <Link to='/mypage' className="noline">
                                    <p>MyPage</p></Link>
                            </Goto>
                            :
                            <Goto>
                                <img className="gotoimage" src={mypage}></img>
                                <Link to='/mypage' className="noline">
                                    <p>MyPage</p></Link>
                            </Goto>
                        }
                    </Section>
                    {props.isLoggedIn ?
                        <>
                            <div className='logout' onClick={Onclicklogout}>로그아웃</div>
                            <h5 className="bottom">NewStory</h5>
                        </>
                        :
                        <h5 className="bottom2">NewStory</h5>
                    }
                </All>
            </Sidebar>
            {modal &&
                <Itsmodal onClick={closeModal}>
                    <ModalContainer onClick={stopPropagation}>
                        <Modalpage />

                    </ModalContainer>
                </Itsmodal>}
        </Modaltoo>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});

const mapDispatchToProps = {
    logout,
};


export default connect(mapStateToProps, mapDispatchToProps)(Body);