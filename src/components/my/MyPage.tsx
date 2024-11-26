import React from 'react';
import { useResetRecoilState } from 'recoil';
import { AuthUserInfo } from '../../recoil/AuthUserInfo';
import { Link, useNavigate } from 'react-router-dom';

const MyPage = () => {
    const resetAuthUserInfo = useResetRecoilState(AuthUserInfo);
    const navigate = useNavigate();

    const logout = ()=>{
        resetAuthUserInfo();
        navigate("/");
    }
    return (
        <div>
            <div>
                <Link to="sub-noti">서브 알림</Link>
            </div>

            <div>
                <button onClick={logout}>로그아웃</button>
            </div>
        </div>
    );
};

export default MyPage;