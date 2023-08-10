import { Sidebar, Profile, All, Modaltoo, Itsmodal, ModalContainer, Tologin, Image } from "./style";
import { useState, useEffect } from "react";
import basicimage from "../user.png";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Modalpage from '../changemodal';
import logo from './newstory.png'

// const serverApi = axios.create({
//     headers: {
//         'Authorization': "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNjc4NzUyLCJpYXQiOjE2OTE2NzY5NTIsImp0aSI6IjJkZDI3ZDZmZWM4YzQyM2I4NmE5OWE0NDg3MjdhNTBhIiwidXNlcl9pZCI6MX0.9_oCYAHWAmG8Z20lObL_eMGwYBwEnO0FhBqpVxoAdKM",
//     }
// });

// const userApi = async () => {
//     let user = [];

//     await serverApi.get(`https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/`).then((response) => {
//         user = response.data;
//         console.log(user);
//     })
//     return user;
// }



function Body() {
    const [data, setData] = useState('');

    // const getUser = async () => {
    //     const nowDetail = await userApi();
    //     setData(nowDetail);
    // }
    // console.log(data.nickname);

    // useEffect(() => {
    //     getUser();
    //     // getComment();
    // }, [])

    // const ServerUrl = 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/';

    // axios.get(ServerUrl, {
    //     headers: {
    //       'Authorization': "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNjc4NzUyLCJpYXQiOjE2OTE2NzY5NTIsImp0aSI6IjJkZDI3ZDZmZWM4YzQyM2I4NmE5OWE0NDg3MjdhNTBhIiwidXNlcl9pZCI6MX0.9_oCYAHWAmG8Z20lObL_eMGwYBwEnO0FhBqpVxoAdKM"
    //     }
    //   })
    //     .then(response => {
    //         console.log(response.data); 
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });



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

    // 로그인 여부
    const [isloggedin, setIsloggedin] = useState(true)


    return (
        <Modaltoo>
            <Sidebar className="v-line">
                <All>
                    <Profile>
                        <img src={basicimage}></img>
                        {isloggedin ?
                            <div style={{ display: 'flex', marginLeft: '10px' }}>
                                <h4>nickname</h4>
                                <FontAwesomeIcon
                                    onClick={openModal} className='pencil' icon={faPencil} />

                            </div> :
                            <Tologin>
                                <Link to="/login" className="tologin">
                                    <h5>로그인을 해주세요.</h5>
                                </Link>
                            </Tologin>}
                    </Profile>
                    <p><Link to='/' className="noline">
                        Home</Link></p>
                    <p><Link to='/community' className="noline">
                        Community</Link></p>
                    <p><Link to='mypage' className="noline">
                        MyPage</Link></p>
                    <h5 className="bottom">NewStory</h5>

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