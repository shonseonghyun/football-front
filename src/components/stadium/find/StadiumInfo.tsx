import { useCallback } from 'react';
import styled from 'styled-components';
import Matches from '../../main/matches/Matches';
import ShowImgs from '../../common/ImgSlider';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetMatchesByStartDt, useGetMatchesByStartDtAndStadiumNo, useGetStadium } from '../../../hooks/api/apiHooks';
import { copyText, getFullAddress } from '../../../utils/CommonUtils';
import StadiumMatches from './StadiumMatches';

const Container = styled.div`
    margin: 0 auto;
`;

const StadiumInfoContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const StadiumDescWrapper = styled.div`
    padding: 30px 0px;
`;

const StadiumInfoArea = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 5px;
`;

const StadiumName = styled.p`
    font-size: 22px;
    line-height: 120%;
    margin-bottom: 3px;
`;

const StadiumAddress = styled.span`
      font-size: 14px;
    line-height: 120%;
    margin-right: 4px;  
`;

const StadiumToggleText = styled.span`
    font-size: 14px;
    line-height: 120%;
    color: #727f88;
    text-decoration: underline;
    margin-right: 4px;  
`;

const MatchRegWrapper = styled.div`
    padding: 30px 20px;
`;

const MatchRegBtn = styled.div`
        background-color: #1570ff;
    border-radius: 12px;
    padding: 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    color: white;
`;

const fakeAddvertiseDatas = [
    {
        order:2,
        title:"아마추어2 이하 작은 전쟁",
        link:`/magazine/2`,
        isOpen:true,
        image:"https://d31wz4d3hgve8q.cloudfront.net/media/suwon-hk-corner.jpg"
    },
    {
        order:3,
        title:"6명 이상 모이면 2만원 할인쿠폰",
        link:`/magazine/3`,
        isOpen:true,
        image:"https://d31wz4d3hgve8q.cloudfront.net/media/suwon-hk-field-center.jpg"
    },
    {
        order:4,
        title:"이게 뭐시여",
        link:`/magazine/4`,
        isOpen:true,
        image:"https://d31wz4d3hgve8q.cloudfront.net/media/suwon-hk-field-3.jpg"
    }
];


const StadiumInfo = () => {
    const navigate = useNavigate();
    const {stadiumNo}  = useParams() as { stadiumNo: string };
    
    const {stadium,isStadiumLoading} = useGetStadium(stadiumNo);
    const images  = stadium ? stadium?.data.imageList.map(image=>{return image.filePath}) : [];
    

    const copyAddress = useCallback(()=>{
        if(stadium){
            copyText(getFullAddress(stadium?.data));
        }
    },[stadium]);

    const goToMatchRegPage=()=>{
      navigate("/match/reg",{state:{stadiumNo:stadiumNo}})
    }

    return (
        <Container>
            {
                stadium &&
                <>
                    <ShowImgs images={images} />

                    <StadiumInfoContainer>
                        <StadiumDescWrapper>
                            <StadiumInfoArea>
                                {stadium.data.location.province} / {stadium.data.location.city}
                            </StadiumInfoArea>
                            <StadiumName>
                                {stadium.data.stadiumName}
                            </StadiumName>
                            <StadiumAddress>
                                {getFullAddress(stadium.data)}
                            </StadiumAddress>
                            <StadiumToggleText style={{margin:"0 5px"}} onClick={copyAddress}>
                                주소 복사
                            </StadiumToggleText>
                            <StadiumToggleText >
                                지도 보기
                            </StadiumToggleText>
                        </StadiumDescWrapper>

                        <MatchRegWrapper>
                            <MatchRegBtn onClick={goToMatchRegPage}>
                                매치 등록
                            </MatchRegBtn>
                        </MatchRegWrapper>
                    </StadiumInfoContainer>
                    
                    <StadiumMatches stadiumNo={stadiumNo} />
                </>
            }

        </Container>
    );
};

export default StadiumInfo;