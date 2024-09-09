import { styled } from 'styled-components';
import useIdxNextPrev from '../../../hooks/useIdxNextPrev';
import { getDatesTodayToTwoWeeksLater, Idate } from '../../../utils/DateUtil';
import LeftArrow from '../../icon/arrow/LeftArrow';
import RightArrow from '../../icon/arrow/RightArrow';
import { useState } from 'react';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
  padding: 20px 0px;
`;

const TabContainer = styled.div`
    position : relative;
    max-width: 1024px;
    margin: 0 auto;
    padding : 10px 30px ;
`;


const ListContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

const DateList = styled.ul`
    
`;

const TransFormCotanier = styled.div<{$currentIdx:number}>`
    width: 1952px;
    transform: translateX(${props=>(props.$currentIdx)*(-138)}px);
    transition: all 0.3s ease-in-out;
`;

const Item = styled.li<{$isActive:boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;

    float :left ;
    width : 128px;
    height : 100%;

    ${props=>props.$isActive ? "background-color: #1570ff" : null};
    ${props=>props.$isActive ? "color: white" : null};

    border-radius: 38px;
    padding: 10px 0;
    margin-right: 10px;

    cursor: pointer;
`;

const DateText = styled.p`
    font-size: 16px;
    line-height: 160%;
    font-weight: 400;
`;

const DayText = styled.span`
    font-size: 12px;
    line-height: 120%;
`;

const ArrowBtn = styled.button`
        position: absolute;
        
        //가운데 정렬 (https://velog.io/@kmjstj3/%EA%B0%80%EC%9A%B4%EB%8D%B0-%EC%A0%95%EB%A0%AC-%EC%B5%9C%EA%B0%95%EC%9E%90-top50-left50-transformtranslate-50-50)
        top:50%;
        transform: translateY(-50%);

        width: 20px;
        height: 20px;
        padding: 0;
`;

const ArrowLeftBtn = styled(ArrowBtn)`
    left: 0;
`;

const ArrowRightBtn = styled(ArrowBtn)`
    right:0;
`;

const min = 0;
const max = 7;

interface IDateNavProps{
    date:string,
    setDate:React.Dispatch<React.SetStateAction<string>>
}

const DateNav = ({date,setDate}:IDateNavProps) => {
    const [currentIdx,movePrev,moveNext] = useIdxNextPrev(min,max);

    const clickDate = (data:Idate)=>{
        setDate(data.year+data.month+data.date);
    }

    return (
        <Container>
            <TabContainer>
                <ListContainer>
                    <DateList>
                            <ArrowLeftBtn onClick={movePrev}>
                                <LeftArrow />
                            </ArrowLeftBtn>
                            <TransFormCotanier $currentIdx={currentIdx}>
                                {
                                    getDatesTodayToTwoWeeksLater().map(data=>(
                                        <Item key={data.date} $isActive={data.date==date.substring(date.length-2)} onClick={()=>clickDate(data)}>
                                            <DateText>{data.date}</DateText>
                                            <DayText>{data.day}</DayText>
                                        </Item>
                                    ))
                                }
                            </TransFormCotanier>
                            <ArrowRightBtn onClick={moveNext}>
                                <RightArrow />    
                            </ArrowRightBtn>
                    </DateList>
                </ListContainer>
            </TabContainer>
        </Container>
    );
};

export default DateNav;