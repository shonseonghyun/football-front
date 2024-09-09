import React from 'react';
import styled from 'styled-components';
import { ILevelResponse } from '../../../interface/MatchInterface';
import LevelBar from './LevelBar';


const LevelGraphItem = styled.li`
    display : flex;
    flex-direction: column;

    width: 15%;
    margin: 10px 0;
`;

const LevelGraphContainer = styled.div`
    background-color: #f2f5f7;
    border-radius: 10px 10px 2px 2px;
    height: 100px;
    width: 100%;
    position: relative;
`;

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

interface ILevelGrapProps{
    levelType:ILevelResponse[];
    levels: ILevelResponse[]
}

const LevelGrap = ({levelType,levels}:ILevelGrapProps) => {

    console.log(levelType);
    console.log(levels);
    
    return (
        <>
            {
                levelType.map((level,key) =>{
                    return <LevelBar key={key} level={level} />
                })
            } 
        </>

    );
};

export default LevelGrap;