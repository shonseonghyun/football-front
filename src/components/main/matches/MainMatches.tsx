import React, { useState } from 'react';
import DateNav from './DateNav';
import MatchList from './MatchList';
import { getToday } from '../../../utils/DateUtil';
import styled from 'styled-components';
import { useGetMatchesByStartDt } from '../../../hooks/api/apiHooks';

const Container = styled.div`
    margin-bottom: 50px;
`;

const MainMatches = () => {
    const [date,setDate]= useState(getToday());
    const {data,isLoading,error} = useGetMatchesByStartDt(date);
    
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

export default MainMatches;