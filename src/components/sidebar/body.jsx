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

const sideApi = async (userkey) => {

    let data = [];
    await serverApi.get(``).then((response) => {
        data = response.data;
        // console.log(data);
    })
    return [data];
}


function Body({ nickname }) {

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
    // const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');

    const userkey = useParams().userkey;

    // const getData = async () => {
    //     const nowData = await sideApi(userkey);
    //     setImage(nowData[0]);
    //     setNickname(nowData[1]);
    // }


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

                </All>

            </Sidebar>
            {modal &&
                <Itsmodal onClick={closeModal}>
                    <ModalContainer onClick={stopPropagation}>
                        <Modalpage/>
                    </ModalContainer>
                </Itsmodal>}
        </Modaltoo>
    );
};




export default Body;