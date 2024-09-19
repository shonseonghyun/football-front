import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMatchResponse } from '../../../interface/MatchInterface';
import { convertWonCurreny, copyText, getFullAddress } from '../../../utils/CommonUtils';
import { format } from 'path';
import { formatDateTime } from '../../../utils/DateUtil';

const Container = styled.div`
    padding:30px 20px;
`;

const MatchTime = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    margin-right: 3px;
    margin-bottom: 3px;
`;

const StadiumName = styled(Link)`
    color: #282b33;
    font-size: 22px;
    line-height: 120%;
    word-break: keep-all;
    font-weight: 400;  
`;

const StadiumAddress = styled.span`
    font-size: 14px;
    line-height: 120%;
    margin-right: 4px;
    
`;

const StadiumAddressWithOutUnderLine = styled(StadiumAddress)`
`;

const StadiumAddressWithUnderLine = styled(StadiumAddress)`
    color: #727f88;
    text-decoration: underline;
`;


const MatchPlaceContainer = styled.div`
    padding: 10px 0px ;
`;

const FeeContainer = styled.div`
    border-top: 1px solid #eeeeee;
    padding : 20px 0px;
`;


const MatchMoney = styled.span`
    font-size: 18px !important;
    color: #282b33;
    font-weight: 700;
`;

const MatchDuration= styled.span`
    font-size: 12px;
    color:#727f88;
`;

const ApplyContainer = styled.div`
    border-top: 1px solid #eeeeee;
    padding : 20px 0px;
    display: flex;
    align-items: center;
`;

const ApplyInfoText = styled.span`
    font-size: 13px;
    line-height: 150%;
    display: block;
    word-break: break-all;

`;

const Btn = styled.button`
    width: 100%;
    color: white;
    border-radius: 6px;
    border: none;
    box-shadow: none;
    padding: 15px 10px;
    -webkit-transition: background-color 0.3s ease-out;
    -moz-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
    transition: background-color 0.3s ease-out;
    display: block;
    text-align: center;
`

const PossibleApplyBtn = styled(Btn)`
     background-color: #1570ff;
     cursor: pointer;

`;

const NotPossibleApplyBtn = styled(Btn)`
    background-color: #eeeeee;
    cursor: not-allowed;
`

interface IMatchApplyProps{
    match:IMatchResponse
}


const MatchApply = ({match}:IMatchApplyProps) => {
    const address = getFullAddress(match.stadium);

    return (
        <Container>
            <MatchTime>
                {formatDateTime(match.startDt+match.startTm)}
            </MatchTime>
            <MatchPlaceContainer>
                <h1 style={{fontWeight:"800"}}>
                    <StadiumName to={`/stadium/${match.stadium.stadiumNo}`} >
                        {match.stadium.stadiumName}
                    </StadiumName>
                </h1>
                <div style={{paddingBottom:"10px"}}>
                    <StadiumAddressWithOutUnderLine>
                        {match.stadium.location.address}
                    </StadiumAddressWithOutUnderLine>
                    <div>
                        <StadiumAddressWithUnderLine style={{cursor:"pointer"}} onClick={()=>copyText(address)}>
                            주소 복사
                        </StadiumAddressWithUnderLine>
                        <StadiumAddressWithUnderLine style={{cursor:"pointer"}}>
                            지도보기
                        </StadiumAddressWithUnderLine>
                    </div>
                </div>
                <div>
                    <span style={{display:"inline-flex",marginRight:"8px",fontSize:"12px",alignItems:"center"}}>
                        <img style={{marginRight:"5px",width:"16px"}} src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_viewer.svg" />
                        {match.viewCount}
                    </span>
                    <span style={{display:"inline-flex",marginRight:"8px",fontSize:"12px", alignItems:"center"}}>
                        <img style={{marginRight:"5px",width:"16px"}} src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_bookmark_filled.svg" />
                        0
                    </span>
                </div>
            </MatchPlaceContainer>
            <FeeContainer>
                <MatchMoney>
                    {convertWonCurreny(match.price)}
                </MatchMoney>
                <MatchDuration>
                    / 2시간
                </MatchDuration>
            </FeeContainer>
            <ApplyContainer>
                <div>
                    <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_bookmark.svg" />
                    <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_bookmark_filled.svg" />
                </div>
                <div style={{margin:"5px 10px"}}>
                    <ApplyInfoText>
                        다음 일정을 미리 예약하세요
                        <br />
                        2일 전까지 무료 취소
                    </ApplyInfoText>
                </div>
                <div style={{width:"144px"}}>
                    {
                        match.matchState.desc == "MATCH_AVAILABLE" || match.matchState.desc == "MATCH_ALMOST_DONE"
                        ?
                        <PossibleApplyBtn onClick={()=>alert("결제 진행")}>
                            {match.matchState.desc}
                        </PossibleApplyBtn>
                        :
                        <NotPossibleApplyBtn>
                            {match.matchState.desc}
                        </NotPossibleApplyBtn>
                    }
                </div>
            </ApplyContainer>
        </Container>
    );
};

export default MatchApply;