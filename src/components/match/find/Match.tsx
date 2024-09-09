import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetMatch } from "../../../hooks/api/apiHooks";
import ShowImgs from "../../common/ImgSlider";
import MatchApply from "./MatchApply";
import MatchInfo from "./MatchInfo";
import MatchLevel from "./MatchLevel";

const Container = styled.div`
    background-color: #f2f5f7;
`;

const BodyContainer = styled.div`
    max-width: 1024px;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
`;

const InfoContainer = styled.div`
    width: 100%;
    background-color: white;
`;

const StickyContainer = styled.div`
    position: sticky;
    width: 60%;
    height: fit-content;
    min-width: 380px;
    top: 10px;
    margin-left: 10px;
    z-index: 3;
    background-color: white;
`;

const Match = () => {
    const {matchNo}  = useParams() as { matchNo: string };
    const {match,isMatchError,isMatchLoading} = useGetMatch(matchNo);
    const images  = match ? match?.data.stadium.imageList.map(image=>{return image.filePath}) : [];
    if(match){
        return (    
            <Container>
                {/* 이미지 */}
                <ShowImgs images={images}  />
    
                {/* 매치 정보 및 신청  */}
                <BodyContainer>
                    <InfoContainer>
                        <MatchInfo match={match.data}/>
                        <MatchLevel avgMatchLevel={match.data.avgMatchLevel} levels={match.data.levels}/>
                    </InfoContainer>
                    <StickyContainer>
                        <MatchApply match={match.data}/>
                    </StickyContainer>
                </BodyContainer>
            </Container>
        );
    }

    else{
        return null;
    }

};

export default Match;