import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { getFreeSubNotiTypes, getFreeSubNoties, getMatch, getMatchRule, getMatchesByStartDt, getMatchesByStartDtAndStadiumNo, getMember, getPlabMatch, getStadium, postFreeSubNoti, postJoin, postLogin, regMatch } from "../../axios/api";
import { IJoinRealReqType } from "../../components/my/Join";
import { ILoignRegType } from "../../components/my/Login";
import { IApiResponse } from "../../interface/ApiReponse";
import { IFreeSubNotiSubTypesResponse, IFreeSubNotiesResponse, IMatchRegType, IMatchResponse, IMatchRuleResponse, ISimpleMatcheResponse } from "../../interface/MatchInterface";
import { IMemberResponse } from "../../interface/MemberInterface";
import { INotiRegType } from "../../interface/NotiInterfact";
import { IStadiumResponse } from "../../interface/StadiumInterface";

export const useGetMember =(memberNo:number)=>{
    const {data:member,isLoading:isMemberLoading,error:isMemberError} = useQuery<IApiResponse<IMemberResponse>>(
        'member',
        ()=> getMember(memberNo)
    );

    return {member,isMemberLoading,isMemberError};
}


export const useGetPlabMatch =(matchNo:string)=>{
    const useGetPlabMatch = useQuery(
        'plabMatchInfo',
        ()=> getPlabMatch(matchNo),
        {
            refetchOnWindowFocus:false,
            enabled:false,
            retry:0
        }
    );

    return useGetPlabMatch;
} 


export const useGetMatchRule =()=>{
    const {data:rule,isLoading:isRuleLoading,error:isRuleError} = useQuery<IApiResponse<IMatchRuleResponse>>(
        'rules',
        ()=> getMatchRule()
    );

    return {rule,isRuleLoading,isRuleError};
} 

export const useGetFreeSubTypes =()=>{
    const {data:types,isLoading:isTypesLoading,error:iTypesError} = useQuery<IApiResponse<IFreeSubNotiSubTypesResponse>>(
        'freeSubTypes',
        ()=> getFreeSubNotiTypes()
    );

    return {types,isTypesLoading,iTypesError};
} 
// export const useGetMatchRule =()=>{
//     const {data:rule,isLoading:isRuleLoading,error:isRuleError} = useQuery<IApiResponse<IMatchRuleResponse>,AxiosError,Level>(
//         'rules',
//         ()=> getMatchRule(),
//         {
//             select:data=>data.data.levelRule
//         }
//     );

//     return {rule,isRuleLoading,isRuleError};
// } 

export const useRegMatch =()=>{
    const mutate= useMutation((data:IMatchRegType)=>regMatch(data));

    return [mutate];
} 

export const useGetMatchesByStartDt = (startDt:string)=>{
    const {data,isLoading,error} = useQuery<IApiResponse<ISimpleMatcheResponse[]>>(
        `matches-${startDt}`,
        ()=> getMatchesByStartDt(startDt)
    );

    return {data,isLoading,error};
} 

export const useGetMatchesByStartDtAndStadiumNo = (startDt:string,stadiumNo:string)=>{
    const {data,isLoading,error} = useQuery<IApiResponse<ISimpleMatcheResponse[]>>(
        `matchesOfStadium-${startDt}/${stadiumNo}`,
        ()=> getMatchesByStartDtAndStadiumNo(startDt,stadiumNo)
    );

    return {data,isLoading,error};
} 

export const useGetMatch =(matchNo:string) => {
    const {data:match,isLoading:isMatchLoading,isError:isMatchError} = useQuery<IApiResponse<IMatchResponse>>(
        ['match',matchNo],
        ()=> getMatch(matchNo)
    );

    return {match,isMatchLoading,isMatchError};
}

export const useGetStadium = (stadiumNo:string)=>{
    const {data:stadium,isLoading:isStadiumLoading,isError:isStadiumError} = useQuery<IApiResponse<IStadiumResponse>>(
        ["stadium",stadiumNo],
        ()=>getStadium(stadiumNo),
    )
    return {stadium,isStadiumLoading,isStadiumError}
}

export const useLogin=(onSuccess:any)=>{
    const mutate= useMutation(
        (data:ILoignRegType)=>postLogin(data),
        {
            onSuccess:onSuccess,
            onError(error) {
                if(error instanceof AxiosError){
                    alert(error.response?.data.msg);
                }
            },
        }
    );
    return {mutate};
}

export const useJoin=()=>{
    const mutate= useMutation(
        (data:IJoinRealReqType)=>postJoin(data),
        {
            onSuccess(data) {
                alert("성공");
            },
            onError(error) {
                if(error instanceof AxiosError){
                    alert(error.response?.data.msg);
                }
            },
        }
    );
    return {mutate};
}

export const useFreeSubReg=()=>{
    const mutate= useMutation(
        (data:INotiRegType)=>postFreeSubNoti(data),
        {
            onError(error) {
                if(error instanceof AxiosError){
                    alert(error.response?.data.msg);
                }
            },
            onSuccess(data){
                alert("등록 완료하였습니다.");
            }
        }
    );
    
    return {mutate};
}

export const useGetFreeSubNoties=(memberNo:number)=>{
    const {data:freeSubNoties,isLoading:isFreeSubNotiesoading} = useQuery<IApiResponse<IFreeSubNotiesResponse[]>>(
        ["memberNo",memberNo],
        ()=>getFreeSubNoties({memberNo:memberNo}),
    )

    return {freeSubNoties,isFreeSubNotiesoading}
}