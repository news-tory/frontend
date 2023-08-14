import { All, Profile, Password, Category, Every, Itsmodal, ModalContainer, CategoryButton, CategoryWrapper } from "./style";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import basicimage from "../user.png";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Modalimage from '../modalimage';
import Modalnickname from '../modalnickname';
import Modalpassword from '../modalpassword';
import Modalcategory from '../modalcategory';

import { connect } from 'react-redux';
import { authApi } from "../../modules/axiosInterceptor";


function Modalpage(props) {

    const [data, setData] = useState('');

    console.log('modalToken', props.accessToken);

    // 유저 정보 가져오기
    const userApi = async () => {
        let user = [];
        await authApi.get(`/accounts/update/`).then((response) => {
            user = response.data;
            //  console.log(user);
        })
        return user;
    }

    const getUser = async () => {
        const nowDetail = await userApi();
        setData(nowDetail);
    }
    console.log(data.nickname);

    useEffect(() => {
        getUser();
    }, [])


    // true 값인 카테고리 필터링
    const filteredCategories = Object.keys(data)
        .filter((key) => data[key] === true)
        .map((key) => key);
    
    // 카테고리 매핑
    const categoryMapping = {
        sport: "스포츠",
        world: "세계",
        art: "예술",
        film: "영화",
        society: "사회",
        books: "도서",
        business: "비즈니스",
        tech: "기술",
        culture: "문화",
    };
        

    // 이미지 모달창 관리
    let [modalimage, setModalimage] = useState(false);
    const openModalimage = () => {
        setModalimage(!modalimage);
    };
    const closeModalimage = () => {
        setModalimage(false);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    // 닉네임 모달창 관리
    let [modalnickname, setModalnickname] = useState(false);
    const openModalnickname = () => {
        setModalnickname(!modalnickname);
    };
    const closeModalnickname = () => {
        setModalnickname(false);
    };

    // 비밀번호 모달창 관리
    let [modalpassword, setModalpassword] = useState(false);
    const openModalpassword = () => {
        setModalpassword(!modalpassword);
    };
    const closeModalpassword = () => {
        setModalpassword(false);
    };

    // 선호 카테고리 모달창 관리
    let [modalcategory, setModalcategory] = useState(false);
    const openModalcategory = () => {
        setModalcategory(!modalcategory);
    };
    const closeModalcategory = () => {
        setModalcategory(false);
    };





    return (
        <Every>
            <h3 className="title">내 프로필</h3>

            <All>
                <Profile>
                    <img
                        className="viewimage"
                        src={basicimage} />
                    <FontAwesomeIcon
                        onClick={openModalimage} className='pencil' icon={faPencil} />
                    <div className="nickname">
                        <h4>{data.nickname}</h4>
                        <p onClick={openModalnickname}>닉네임 변경</p>
                        <p onClick={openModalpassword}>비밀번호 변경</p>
                    </div>
                </Profile>
                <Category>
                    <h4 className="smalltitle">선호 카테고리</h4>
                    <p onClick={openModalcategory}>선호 카테고리 변경</p>
                    <CategoryWrapper>
                        {filteredCategories.map((category) => (
                            categoryMapping[category] && (
                            <CategoryButton key={category}>
                                <p className="catbutton">{categoryMapping[category]}</p>
                            </CategoryButton>
                            )
                        ))}
                    </CategoryWrapper>
                </Category>
                {modalimage &&
                    <Itsmodal onClick={closeModalimage}>
                        <ModalContainer onClick={stopPropagation}>
                            <Modalimage />
                        </ModalContainer>
                    </Itsmodal>
                }
                {modalnickname &&
                    <Itsmodal onClick={closeModalnickname}>
                        <ModalContainer onClick={stopPropagation}>
                            <Modalnickname />
                        </ModalContainer>
                    </Itsmodal>
                }
                {modalpassword &&
                    <Itsmodal onClick={closeModalpassword}>
                        <ModalContainer onClick={stopPropagation}>
                            <Modalpassword />
                        </ModalContainer>
                    </Itsmodal>
                }
                {modalcategory &&
                    <Itsmodal onClick={closeModalcategory}>
                        <ModalContainer onClick={stopPropagation}>
                            <Modalcategory />
                        </ModalContainer>
                    </Itsmodal>
                }


            </All>
        </Every>
    )
}


const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(Modalpage);


