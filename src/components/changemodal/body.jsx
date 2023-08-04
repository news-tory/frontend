import { All, Image, Nickname } from "./style";
import { useState, useRef } from "react";
import axios from "axios";
import basicimage from "../user.png";


const Modalpage = () => {
    const [nickname, setNickname] = useState('')
    const [fileImage, setFileImage] = useState('');
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setNickname(e.target.value);
    };

    const handleSubmit = () => {
        console.log(nickname);
    }

    // 파일 저장 (URL.createObjectURL : client 내에서만 이용 가능. 미리보기)
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        // console.log(e.target.files[0]);
    };
    // 파일 삭제
    const deleteFileImage = () => {
        if (!fileImage) {
            console.log('이미지가 없습니다')
            return;
        }
        URL.revokeObjectURL(fileImage);
        setFileImage('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // 이미지 서버로 전송?
    const UploadFile = async (e) => {
        if (!fileImage) {
            console.log('이미지를 먼저 선택하시오');
            return;
        }
        const formData = new FormData();
        formData.append('image', fileImage);

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('이미지 업로드 성공:', response.data);
        } catch (error) {
            console.error('이미지 업로드 실패:', error);
        }
    };
    return (
        <All>
            <div className="left-pane">
                <h3 className="title">프로필 설정</h3>
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
                            src={basicimage} />
                    }
                    {!fileImage &&
                        <input
                            className="changeimg"
                            type="file"
                            accept="image/*"
                            onChange={saveFileImage} />
                    }
                    <div className="buttons">
                        <button className="button"
                            onClick={() => deleteFileImage()}> 삭제 </button>
                        <button className="button"
                            onClick={UploadFile}>변경</button>
                    </div>
                </Image>
                <Nickname>
                    <h4 className="smalltitle">닉네임 변경</h4>
                    <input
                        type="text"
                        className="input"
                        value={nickname}
                        onChange={handleChange} />
                    <button onClick={handleSubmit}>변경</button>
                </Nickname>
            </div>
            <div className="right-pane">
                <Image>
                    <h4 className="smalltitle">프로필 이미지 변경</h4>
                    
                </Image>
                <Nickname>
                    <h4 className="smalltitle">닉네임 변경</h4>
                    
                </Nickname>
            </div>

        </All>
    )
}
export default Modalpage;


