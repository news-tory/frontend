import { useState, useRef, useEffect } from "react";
import basicimage from "../user.png";
import axios from "axios";
import { All, Image } from './style';
import { connect } from 'react-redux';
import { authApi } from "../../modules/axiosInterceptor";


const ServerUrl = 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/'

function Modalpage(props) {


    const [fileImage, setFileImage] = useState(''); 
    const fileInputRef = useRef(null);
    const [data, setData] = useState('');
    const [userimg, setUserimg] = useState('')
    const formData = useRef(new FormData()); // formData를 useRef로 생성


    // 원래 정보 불러오기

    const userApi = async () => {
        let user = [];
        await authApi.get('/accounts/update/').then((response) => {
            user = response.data;
            console.log(user);
        })
        return user;
    }

    const getUser = async () => {
        const nowDetail = await userApi();
        setData(nowDetail);
    }

    useEffect(() => {
        getUser();
    }, [])


    // 이미지 파일 저장 (URL.createObjectURL : client 내에서만 이용 가능. 미리보기)
    // formData로 변환

    const [uploadFile, setUploadFile] = useState('');

    const saveFileImage = (e) => {
        e.preventDefault();
        setFileImage(URL.createObjectURL(e.target.files[0]));

        setUploadFile(e.target.files[0])
    };

    console.log('uploadfile:', uploadFile);

    // 이미지 서버로 전송
    const UploadFile = async () => {
        const formData = new FormData();
        formData.append('userImg', uploadFile);
        console.log('form');
        for (const [key, value] of formData.entries()) {
            console.log('이거', key, value);
        }
        if (!fileImage) {
            alert('이미지를 먼저 선택하시오');
            return;
        }

        try {
            const response = await axios.patch(ServerUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `bearer ${props.accessToken}`,
                },
            });
            console.log('이미지 업로드 성공:', response.data);
        } catch (error) {
            console.error('이미지 업로드 실패:', error);
        }
    };


    // 이미지 파일 삭제 (미리보기)
    const deleteFileImage = () => {
        if (!fileImage) {
            alert('이미지가 없습니다')
            return;
        }
        URL.revokeObjectURL(fileImage);
        setFileImage('');
        setUploadFile('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    console.log(data)


    return (
        <All>
            <Image>

                <h4 className="smalltitle">프로필 이미지 변경</h4>
                {fileImage ?
                    <img
                        className="viewimage"
                        src={fileImage}
                    // alt="이미지 미리보기" 
                    />
                    : <img
                        className="viewimage"
                        src={`https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app${data.userImg}`} />
                }
                {!fileImage &&
                    <input
                        className="changeimg"
                        type="file"
                        accept="image/*"
                        onChange={saveFileImage}
                    />
                }
                {!fileImage ?
                    <div className="buttons">
                        <button className="button"
                            onClick={() => deleteFileImage()}> 기본 이미지로 변경 </button>
                    </div>
                    : <div className="buttons">
                        <button className="button"
                            onClick={() => deleteFileImage()}> 다른 이미지 선택 </button>
                        <button className="button"
                            onClick={UploadFile}>선택한 이미지로 변경</button>
                    </div>
                }
            </Image>
        </All>

    )
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(Modalpage);