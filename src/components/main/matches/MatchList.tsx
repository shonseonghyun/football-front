import styled from "styled-components";
import { ISimpleMatcheResponse } from "../../../interface/MatchInterface";
import MatchRow from "./MatchRow";

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

export interface IMatchListProps{
    matches : ISimpleMatcheResponse[]
}

const MatchList = ({matches}:IMatchListProps) => {
    return (
        <Container>
            <ul>
                {
                    matches && 
                    matches.map(match=>(
                        <MatchRow key={match.matchNo} match={match}/>
                    ))
                }
            </ul>
        </Container>
    );
};

export default MatchList;