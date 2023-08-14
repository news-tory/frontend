import { useState, useRef, useEffect } from "react";
import basicimage from "../user.png";
import axios from "axios";
import { All, Image } from './style';
import { connect } from 'react-redux';


const ServerUrl = 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/accounts/update/'

function Modalpage(props) {


    const [fileImage, setFileImage] = useState('');
    const fileInputRef = useRef(null);
    const [data, setData] = useState('');
    const [userimg, setUserimg] = useState('')
    const imgInput = useRef(null);


    // 원래 정보 불러오기
    const serverApi = axios.create({
        headers: {
            //   'Authorization': "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNzM2NTk3LCJpYXQiOjE2OTE3MzQ3OTcsImp0aSI6ImQ5ODVkZjExNmQ2NjQ3MjhiNDIxY2M4Y2MyMjRjNjk5IiwidXNlcl9pZCI6MX0.GGgA8q0fjRmYNT6yj9rJWfHTii03pqrFyreA1wTf4ic",
            // 'Authorization': localStorage.getItem('token')
            'Authorization': `bearer ${props.accessToken}`
        },
    });
    const userApi = async () => {
        let user = [];
        await serverApi.get(ServerUrl).then((response) => {
            user = response.data;
            //  console.log(user.userImg);
        })
        return user;
    }
             console.log(data.userImg);

    const getUser = async () => {
        const nowDetail = await userApi();
        setData(nowDetail);
    }

    useEffect(() => {
        getUser();
    }, [])

    const formData = new FormData();

    // 이미지 파일 저장 (URL.createObjectURL : client 내에서만 이용 가능. 미리보기)
    // formData로 변환
    const saveFileImage = (e) => {
        e.preventDefault();
        setFileImage(URL.createObjectURL(e.target.files[0]));

        const uploadFile = e.target.files[0]
        const formData = new FormData()
        formData.append('userImg', imgInput.current.files[0])
    };


    // 이미지 서버로 전송
    const UploadFile = async () => {
        if (!fileImage) {
            alert('이미지를 먼저 선택하시오');
            return;
        }
        try {

            const response = await axios.patch(ServerUrl, formData, {
                headers: {
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
                        src={data.userImg} />
                }
                {!fileImage &&
                    <input
                        className="changeimg"
                        type="file"
                        accept="image/*"
                        onChange={saveFileImage}
                        ref={imgInput} />
                }
                <div className="buttons">
                    <button className="button"
                        onClick={() => deleteFileImage()}> 삭제 </button>
                    <button className="button"
                        onClick={UploadFile}>변경</button>
                </div>
            </Image>
        </All>

    )
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
});


export default connect(mapStateToProps)(Modalpage);