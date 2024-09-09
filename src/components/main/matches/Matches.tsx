import { useState } from "react";
import styled from "styled-components";
import { getToday } from "../../../utils/DateUtil";
import DateNav from "./DateNav";
import MatchList from "./MatchList";

const Container = styled.div`
    margin-bottom: 50px;
`;

interface IMatchesProps{
    getMatchesQuery: (startDt: string, stadiumNo:string) => any[];
}



const Matches = ({getMatchesQuery}:IMatchesProps) => {
    const [date,setDate]= useState(getToday());
    const [data,isLoading,error] = getMatchesQuery(date,"");
    
    return (
        <Container>
            <DateNav date={date} setDate={setDate} />
            <MatchList matches={data?.data}/>
        </Container>
    );
};

export default Matches;