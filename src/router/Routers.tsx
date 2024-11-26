import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import Match from '../components/match/find/Match';
import MatchReg from '../components/match/reg/MatchReg';
import Join from '../components/my/Join';
import Login from '../components/my/Login';
import MyPage from '../components/my/MyPage';
import FreeSubNotiReg from '../components/noti/freeSub/FreeSubNotiReg';
import StadiumInfo from '../components/stadium/find/StadiumInfo';
import StadiumReg from '../components/stadium/reg/StadiumReg';
import ProtectedRoute from './ProtectedRoute';
import MySubNoti from '../components/my/MySubNoti';

const Routers = () => {
    return (
        <Routes>
            {/* 게스트(회원,비회원 모두) 가능 */}
            <Route path="/" element={<Main />}/>
            <Route path="/match/:matchNo" element={<Match />} />
            <Route path="/match/reg" element={<MatchReg />} />
            <Route path="/stadium/reg" element={<StadiumReg />} />
            <Route path="/stadium/:stadiumNo" element={<StadiumInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            
            {/* 회원 전용 */}
            <Route  element={<ProtectedRoute />}>
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypage/sub-noti" element={<MySubNoti />} />
                <Route path="/noti/freeSub" element={<FreeSubNotiReg />} />
            </Route>
        </Routes>
    );
};

export default Routers;