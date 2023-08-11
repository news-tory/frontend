import { Sidebar, Profile, All, Modaltoo, Itsmodal, ModalContainer, Tologin, Section, Goto } from "./style";
import { useState, useEffect } from "react";
import basicimage from "../user.png";
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



function Body() {

    const [data, setData] = useState('');

    // local Storage의 토큰
    const TOKEN = localStorage.getItem('token')

    // 로그인 판별
    const [isloggedin, setIsloggedin] = useState(!!TOKEN)


    // 유저 정보 get
    const serverApi = axios.create({
        headers: {
            // 'Authorization': "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNzM2NTk3LCJpYXQiOjE2OTE3MzQ3OTcsImp0aSI6ImQ5ODVkZjExNmQ2NjQ3MjhiNDIxY2M4Y2MyMjRjNjk5IiwidXNlcl9pZCI6MX0.GGgA8q0fjRmYNT6yj9rJWfHTii03pqrFyreA1wTf4ic",
            'Authorization': `token ${TOKEN}`
        },
    });

    const userApi = async () => {
        let user = [];
        await serverApi.get(`https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/`).then((response) => {
            user = response.data;
            console.log(user);
        })
        return user;
    }

    const getUser = async () => {
        if (TOKEN) {
            const nowData = await userApi();
            setData(nowData);
        }
    }

    useEffect(() => {
        getUser();
    }, [])




    // 로그아웃
    const Onclicklogout = async () => {
        try {
            localStorage.removeItem('token');
            const response = await axios.delete(`https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/auth/`, {
            });
            const TOKEN = localStorage.getItem('token')
            console.log('삭제 요청 성공:', response.data);
            console.log(localStorage.getItem('token'))
            console.log(TOKEN)
            setIsloggedin(!!TOKEN)
            console.log(isloggedin)

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
        setModal(false);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };


    const [image, setImage] = useState('');
    const [id, setId] = useState('');

    const userkey = useParams().userkey;


    // islogin 확인
    console.log(isloggedin)


    return (
        <Modaltoo>
            <Sidebar className="v-line">

                <All>
                    <Profile>

                        <img src={basicimage}></img>
                        {isloggedin ?
                            <div style={{ display: 'flex', marginLeft: '10px' }}>
                                <h4>{data.nickname}</h4>
                                <FontAwesomeIcon
                                    onClick={openModal} className='pencil' icon={faPencil} />

                            </div> :
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
                        <Goto>
                            <img className="gotoimage" src={mypage}></img>
                            <Link to='mypage' className="noline">
                                <p>MyPage</p></Link>
                        </Goto>
                    </Section>

                    <h5 className="bottom">NewStory</h5>
                    <button onClick={Onclicklogout}>로그아웃</button>


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




export default Body;