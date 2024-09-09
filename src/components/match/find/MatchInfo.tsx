import React from 'react';
import styled from 'styled-components';
import { IMatchResponse } from '../../../interface/MatchInterface';

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

const RuleContainer = styled.div`
    margin-bottom: 10px;
`;

const ManagerContainer  = styled.div`
`;

const MangerInnerContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    border-top: 1px solid #d9e0e6;
    padding-top: 20px;
`;

const Img = styled.img`
    padding-right: 10px;
    
`;

const RuleList = styled.ul`
`;

const RuleItem = styled.li`
    display: inline-flex;
    align-items: center;
    width: 50%;
    padding: 10px 0px;
`;

const Text  =styled.p`
`;

interface IMatchInfoProps{
    match:IMatchResponse
}

const MatchInfo = ({match}:IMatchInfoProps) => {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>
                    매치 포인트
                </SectionTitle>
            </SectionHeader> 
            <SectionBody>
                <RuleContainer>
                    <RuleList>
                        <RuleItem>
                            <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_level.svg" />
                            <Text>
                                {match.levelRule.desc} 이하
                            </Text>
                        </RuleItem>
                        <RuleItem>
                            <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_gender.svg" />
                            <Text>
                                {match.genderRule.desc}
                            </Text>
                        </RuleItem>
                        <RuleItem>
                            <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_stadium.svg" />
                            <Text>
                                {match.headCount}vs{match.headCount} 3파전
                            </Text>
                        </RuleItem>
                        <RuleItem>
                            <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_max_player_cnt.svg" />
                            <Text>
                                {match.headCount*2}~{match.headCount*3}명
                            </Text>
                        </RuleItem>
                        <RuleItem>
                            <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg" />
                            <Text>
                                풋살화/운동화
                            </Text>
                        </RuleItem>
                    </RuleList>
                </RuleContainer>
                <ManagerContainer>
                    <MangerInnerContainer>
                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_manager.svg" />
                        <Text>
                            {match.matchState.name == "MATCH_REG_MANAGER_BEFORE" ? match.matchState.desc : `${match.manager.managerName}가 진행해요`}
                        </Text>
                    </MangerInnerContainer>
                </ManagerContainer>
            </SectionBody>
        </Section>
    );
};

export default MatchInfo;