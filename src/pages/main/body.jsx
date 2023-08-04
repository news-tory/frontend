import { BodyWrapper} from "./style";
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import NewsGeneral from "../../components/newsGeneral/newsGeneral";


function Body() {
    return (
        <>
            <NewsGeneral/>
        </>
    );
};

export default Body;

