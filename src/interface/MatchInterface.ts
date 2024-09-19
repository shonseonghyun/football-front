import { IStadiumResponse } from "./StadiumInterface";

export type IMatchRegType = {
    stadiumNo:number,
    price:number,
    startDt:string,
    startTm:string,
    headCount: number,
    genderRule:string,
    levelRule:string,
}

export interface IEnumResponse{
    name: string,
    desc: string;
}

export interface ILevelResponse{
    name: string,
    desc: string;
}

export interface ILevelRuleResponse{
    name: string,
    desc: string;
}
export interface IGenderRuleResponse{
    name: string,
    desc: string;
}

export interface IPlayerResponse{
    playerNo:number,
    memberNo:number,
    name:string,
    playStatus:string,
    level:string
}

export interface IManagerResponse{
    memberNo:number,
    managerName:string,
}


export interface IMatchResponse{
    matchNo:number,
    price:number,
    stadium: IStadiumResponse,
    manager:IManagerResponse,
    startDt:string,
    startTm:string,
    headCount:number,
    matchState:IEnumResponse,
    players:IPlayerResponse[],
    levels: ILevelResponse[],
    avgMatchLevel:ILevelResponse,
    matchStatus:IEnumResponse,
    genderRule:IGenderRuleResponse,
    levelRule:ILevelResponse
    viewCount:number
}

export interface ISimpleMatcheResponse{
    matchNo:string,
    stadiumName:string,
    startTm:string,
    matchState: IEnumResponse
}

export interface IMatchRuleResponse{
    genderRule:IGenderRuleResponse[],
    levelRule:ILevelRuleResponse[],
    levelType:ILevelResponse[]
}
