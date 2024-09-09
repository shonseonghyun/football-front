import styled from 'styled-components';
import ExclamationMarkIcon from '../../icon/ExclamationMarkIcon';
import { IEnumResponse } from '../../../interface/MatchInterface';
import { useGetMatchRule } from '../../../hooks/api/apiHooks';
import { useEffect, useState } from 'react';
import LevelBar from './LevelGrap';
import LevelGrap from './LevelGrap';

const Section = styled.section`
    border-bottom: 20px solid #f2f5f7;

`;

const SectionHeader =styled.div`
    padding:20px;
`;

const SectionTitle = styled.h3`
    font-size: 1.17em;
    font-weight: 700;
`;

const SectionBody =styled.div`
    padding: 0px 20px 24px 20px;
`;



const Text  =styled.p`
`;

const H4 = styled.h4`
    text-decoration: underline;
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 20px;
`;

const AverageLevel = styled.p`
    color: rgb(21, 112, 255);
    font-weight: 700;
    display: inline;
    margin-bottom: 20px;
`;

const LevelGraphContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const LevelGraphItem = styled.li`
    display : flex;
    flex-direction: column;

    width: 15%;
    margin: 10px 0;
`;

// const LevelGraphContainer = styled.div`
//     background-color: #f2f5f7;
//     border-radius: 10px 10px 2px 2px;
//     height: 100px;
//     width: 100%;
//     position: relative;
// `;

const GraphGage = styled.span<{$height:number}>`
    position: absolute;
    width: 100%;
    background-color: #fed771;
    height: ${props=>props.$height}%;
    bottom: 0;
`;

const LevelValue = styled.span`
    text-align: center;
    font-size: 14px;
    display: block;
    margin-top: 10px;
`;

const LevelLabel = styled.span`
    text-align: center;
    font-size: 12px;
    display: block;
    margin-top: 5px;
    color: #999;
`;

const LevelInfoText = styled.p`
    color: #727f88;
    padding: 10px 0px;
    font-size: 14px;
    line-height: 150%;
    display: flex;
`;

interface IMatchLevelProps{
    avgMatchLevel : IEnumResponse,
    levels:IEnumResponse[]
}

const MatchLevel = ({avgMatchLevel,levels}:IMatchLevelProps) => {
    const {rule,isRuleError,isRuleLoading} =useGetMatchRule();
    // const [levelRates,setLevelRates] = useState([]);
    // useEffect(()=>{
    //     console.log("useEffct");
    //     if(rule){
    //         const arr: number[] = [];

    //         rule.data.levelType.forEach(function (elm){
    //             arr.push(0);
    //         })

    //         console.log(arr);
    //     }
    // },[levels]);


    
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>
                    매치 데이터
                </SectionTitle>
            </SectionHeader>
            <SectionBody>
                <H4>
                    레벨 분포도
                </H4>
                <Text>
                    예상 평균 레벨은&nbsp;
                        <AverageLevel>
                            {avgMatchLevel && avgMatchLevel.desc}
                        </AverageLevel>
                    입니다
                </Text>
                <LevelGraphContainer>
                    {
                        rule && <LevelGrap levelType={rule?.data.levelType} levels={levels}/>
                    }
                </LevelGraphContainer>
                <LevelInfoText>
                    <ExclamationMarkIcon />
                    &nbsp;팀 레벨이 맞지 않으면 친구끼리 와도 다른 팀이 될 수 있어요
                </LevelInfoText>
            </SectionBody>
        </Section>
    );
};

export default MatchLevel;