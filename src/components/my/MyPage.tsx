import React from 'react';
import { useResetRecoilState } from 'recoil';
import { AuthUserInfo } from '../../recoil/AuthUserInfo';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const resetAuthUserInfo = useResetRecoilState(AuthUserInfo);
    const navigate = useNavigate();

    const logout = ()=>{
        resetAuthUserInfo();
        alert("로그아웃 완료되었습니다.");
        navigate("/");
    }
    return (
        <div>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

export default MyPage;