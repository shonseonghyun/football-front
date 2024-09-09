import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ISimpleMatcheResponse } from '../../../interface/MatchInterface';

const Container = styled.div`
    padding : 15px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
`;

const MatchScheduleTimeContainer = styled.div`
    width: 10%;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
`;

const MatchScheduleInfoContainer = styled.div`
    width: 80%;
`;

const MatchScheduleRegContainer = styled.div`
    width: 10%;
`;

const Time = styled.p`
    font-weight: 700;
    text-align: center;
    font-size: 15px;
`;

const MatchTitle = styled.h3`
    font-size: 16px;
`;


const Item = styled.li`
    display: flex;
    padding: 10px;
`;

interface IMatchInfoProps{
    match: ISimpleMatcheResponse
}

const MatchRow = ({match}:IMatchInfoProps) => {
    const navigate = useNavigate();

    const getMatch=()=>{
        navigate(`/match/${match.matchNo}`)
    }

    return (
        <Container onClick={getMatch}>
            <Item>
                <MatchScheduleTimeContainer>
                    <Time>
                        {match.startTm}
                    </Time>
                </MatchScheduleTimeContainer>

                <MatchScheduleInfoContainer>
                    <MatchTitle>
                        {match.stadiumName}
                    </MatchTitle>
                </MatchScheduleInfoContainer>

                <MatchScheduleRegContainer>
                    <button>신청 가능</button>
                </MatchScheduleRegContainer>
            </Item>
        </Container>
    );
};

export default MatchRow;