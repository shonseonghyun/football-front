import { Route, Routes } from 'react-router-dom';
import StadiumInfo from '../components/stadium/find/StadiumInfo';
import StadiumReg from '../components/stadium/reg/StadiumReg';
import Main from '../components/main/Main';
import Match from '../components/match/find/Match';
import MatchReg from '../components/match/reg/MatchReg';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/match/:matchNo" element={<Match />} />
            <Route path="/match/reg" element={<MatchReg />} />
            <Route path="/stadium/reg" element={<StadiumReg />} />
            <Route path="/stadium/:stadiumNo" element={<StadiumInfo />} />
        </Routes>
    );
};

export default Routers;