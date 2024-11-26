import styled from "styled-components";
import NotiIcon from "../icon/noti/NotiFillIcon";
import { useRecoilValue } from "recoil";
import { AuthUserInfo } from "../../recoil/AuthUserInfo";
import { useDelFreeSubNoti, useGetFreeSubNoties } from "../../hooks/api/apiHooks";
import { SubType } from "../../interface/MatchInterface";
import { formatDateTime } from "../../utils/DateUtil";
import { useCallback } from "react";

const MySubNotiContainer = styled.div`
    width: 1024px;
    margin: 0 auto;
    padding: 0 20px;
`;

const Header = styled.div`
    margin: 10px 0;
`;

const Title = styled.h1`
  display :  flex;
  line-height: 24px;
  gap: 10px;
  font-weight: 550;
  /* align-items: center; */
  /* justify-content: center; */
`;

const SubNotiListContainer = styled.div`

`;

const SubNotiList = styled.ul`

`;

const Item = styled.li`
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
`;

const ScheduleInfoContainer = styled.div`
    width: 100%;
    cursor: pointer;
`;

const IconContainer = styled.div`
    overflow-y: hidden;
`;

const MatchDate = styled.p`
    margin-bottom: 4px;
    margin-right: 0px;
    font-size: 14px;
    font-weight: 600;
`;

const MatchName = styled.p`
    font-size: 14px;
    font-weight: 400;
    word-break: keep-all;
`;

interface FreeSubTypeProps{
    type:string;
}

const FreeSubType = styled.p<FreeSubTypeProps>`
    display: inline-block;
    background-color: ${props=>props.type == "MANAGER_FREE" ? "#282b33" : "rgb(21, 112, 255);"};
    color: ${props=>props.type == "MANAGER_FREE" ? "#ffcf0a" : "rgb(244, 244, 244);"};
    padding: 3px 7px;
    border-radius: 4px;
    font-size: 10px;
`;

const MySubNoti = () => {
    const {memberNo} = useRecoilValue(AuthUserInfo);
    const {freeSubNoties} = useGetFreeSubNoties(memberNo);
    const {mutate}=useDelFreeSubNoti();

    const clickedMatch = useCallback((matchNo:number)=>{
        window.open(`https://www.plabfootball.com/match/${matchNo}/`);
    },[]);

    const delFreeSubNoti = useCallback((notiNo:number)=>{
        if(window.confirm("알림 취소하시겠습니까?")){
            mutate.mutate({notiNo:notiNo});
        }
    },[]);

    return (
        <MySubNotiContainer>
            <Header>
                <Title>
                    <NotiIcon />
                    프리서브 알림
                </Title>
            </Header>

            <SubNotiListContainer>
                <SubNotiList>
                    {
                        freeSubNoties?.data.map((freeSubNoti)=>
                            <Item>
                                <ScheduleInfoContainer onClick={()=>clickedMatch(freeSubNoti.matchNo)}>
                                    <MatchDate>
                                        {formatDateTime(freeSubNoti.startDt+freeSubNoti.startTm)}
                                    </MatchDate>
                                    <MatchName>
                                        {freeSubNoti.matchName}
                                    </MatchName>
                                    <FreeSubType type={freeSubNoti.subType}>
                                        {freeSubNoti.subType == SubType.MANAGER_SUB ? "매니저 서브" : "슈퍼 서브"}
                                    </FreeSubType>
                                </ScheduleInfoContainer>
                                <IconContainer onClick={()=>delFreeSubNoti(freeSubNoti.notiNo)}>
                                    <NotiIcon />
                                </IconContainer>   
                            </Item>
                        )
                    }
                </SubNotiList>
            </SubNotiListContainer>
        </MySubNotiContainer>
    );
};

export default MySubNoti;