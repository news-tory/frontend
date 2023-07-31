import { All } from "./style";
import { useState, useRef } from "react";
import axios from "axios";

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
        setFileImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }    };

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
                    'Content-Type' : 'multipart/form-data',
                },
            });
            console.log('이미지 업로드 성공:', response.data);
        } catch(error) {
        console.error('이미지 업로드 실패:', error);
    }
};
    return (
        <All>
            <div>
                <h3>프로필 변경</h3>
                <h4>프로필 이미지 변경</h4>
                <img
                    className="viewimage"
                    src={fileImage}
                    alt="이미지 미리보기" />
                <input
                    className="changeimg"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage} />
                <button
                    onClick={() => deleteFileImage()}> 삭제 </button>
                <button
                    onClick={UploadFile}>변경</button>
                <h4>닉네임 변경</h4>
                <input
                    type="text"
                    value={nickname}
                    onChange={handleChange} />
                <button onClick={handleSubmit}>변경</button>

            </div>
        </All>
    )
}
export default Modalpage;


