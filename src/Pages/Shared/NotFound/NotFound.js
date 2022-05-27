import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'
import error from '../../../images/error.jpg'

const NotFound = () => {
    const navigate = useNavigate();
    const backToHome = () => {
        const path = '/';
        navigate(path);
    };
    return (
        <div className="error-div">
            <button onClick={() => backToHome()} className="error-btn">
                Back to Home
            </button>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;