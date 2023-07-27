import { Sidebar, Profile, All } from "./style";
import { useState, useEffect } from "react";
import basicimage from "../user.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

const sideApi = async (movieid) => {

    let data = [];
    await serverApi.get(``).then((response) => {
        data = response.data;
        // console.log(data);
    })
    return [data];
}


function Body() {
    const [image, setImage] = useState('');
    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');


    return (
        <Sidebar>
            <All>
                <Profile>
                    <img src={basicimage}></img>
                    <h4>nickname</h4>
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
    );
};
export default Body;