import { All, Profile, Password, Category, Every, Itsmodal, ModalContainer } from "./style";
import { useState, useRef, useCallback } from "react";
import axios from "axios";
import basicimage from "../user.png";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Modalimage from '../modalimage';
import Modalnickname from '../modalnickname';
import Modalpassword from '../modalpassword';
import Modalcategory from '../modalcategory';

const ServerUrl = 'https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/members/'


const Modalpage = () => {

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


    // 정보 변경 버튼
    const onSubmit = async () => {
        try {
            const response = await axios.patch(ServerUrl, {
                //정보 입력
            });
            console.log(response.data); // 서버의 응답 데이터 확인
            alert('변경이 완료되었습니다!')
        } catch (error) {
            console.error(error);
        }
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
                        <h4>nickname</h4>
                        <p onClick={openModalnickname}>닉네임 변경</p>
                        <p onClick={openModalpassword}>비밀번호 변경</p>
                    </div>
                </Profile>
                <Category>
                    <h4 className="smalltitle">선호 카테고리</h4>
                    <p onClick={openModalcategory}>선호 카테고리 변경</p>
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
export default Modalpage;


