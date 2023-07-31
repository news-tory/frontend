import { Sidebar, Profile, All, Modaltoo, Itsmodal, ModalContainer } from "./style";
import { useState, useEffect } from "react";
import basicimage from "../user.png";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Modalpage from '../changemodal';


const serverApi = axios.create({
    headers: {
        "Content-Type": "application/json",
    }
});

const sideApi = async () => {

    let data = [];
    await serverApi.get(`https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/articles/nyt/`).then((response) => {
        data = response.data;
        console.log(data);
    })
    return [data];
}


function Body() {


    const [info, setInfo] = useState('')

    const getData = async () => {
        const nowData = await sideApi();
        setInfo(nowData);
        console.log(info);
    }


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




    return (
        <Modaltoo>
            <Sidebar className="v-line">
                <All>
                    <Profile>
                        <img src={basicimage}></img>
                        <div className="change">
                            <h4>nickname</h4>
                            <FontAwesomeIcon
                                onClick={openModal} className='pencil' icon={faPencil} />
                        </div>
                        <h6>id</h6>
                    </Profile>
                    <p><Link to='/' className="noline">
                        Home</Link></p>
                    <p><Link to='/community' className="noline">
                        Community</Link></p>
                    <p><Link to='mypage' className="noline">
                        MyPage</Link></p>
                    <h5 className="bottom">NewStory</h5>
                    <Link to='/login'>
                        <div>로그인/회원가입</div>
                    </Link>

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