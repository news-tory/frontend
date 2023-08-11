import axios from "axios";
import { useState } from "react";

const HeartPost = (props) => {
    const [like, setLike] = useState(false)
    
    useEffect(async () => {
      const fetchData = async () => {
        const res = await axios.get(...)
        if (res.data.type === 'liked') setLike(true)
      }
      fetchData()
    }, []);
    
    const toggleLike = async (e) => {
      const res = await axios.post(...) // [POST] 사용자가 좋아요를 누름 -> DB 갱신
      setLike(!like)
    }

    return (
    <>
      <HeartButton like={like} onClick={toggleLike}/>
      <Detail content={content} />
    </>
    );
};

export default HeartPost;