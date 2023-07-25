import { Sidebar, Profile, All } from "./style";
import { useState, useEffect } from "react";
import basicimage from "../user.png";
import { Link, useNavigate } from 'react-router-dom';

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