import React, { useState } from 'react';
import styled from 'styled-components';
import { getToday } from '../../../utils/DateUtil';
import DateNav from '../../main/matches/DateNav';
import MatchList from '../../main/matches/MatchList';
import { getMatchesByStartDtAndStadiumNo } from '../../../axios/api';
import { useGetMatchesByStartDtAndStadiumNo } from '../../../hooks/api/apiHooks';

const Container = styled.div`
    margin-bottom: 50px;
`;


interface IStadiumMatchesProps{
    stadiumNo:string,
}

const StadiumMatches = ({stadiumNo}:IStadiumMatchesProps) => {
    const [date,setDate]= useState(getToday());
    const {data,isLoading,error} = useGetMatchesByStartDtAndStadiumNo(date,stadiumNo);
    
    return (
        <Container>
        <DateNav date={date} setDate={setDate} />
        {
            data &&
            <MatchList matches={data?.data}/>
        }
    </Container>
    );
};

export default StadiumMatches;