import { useMutation, useQuery } from "react-query";
import { getMatch, getMatchesByStartDt, getMatchesByStartDtAndStadiumNo, getMatchRule, getStadium, postJoin, postLogin, regMatch } from "../../axios/api";
import { IApiResponse } from "../../interface/ApiReponse";
import { IMatchRegType, IMatchResponse, IMatchRuleResponse, ISimpleMatcheResponse } from "../../interface/MatchInterface";
import { IStadiumResponse } from "../../interface/StadiumInterface";
import { ILoignRegType } from "../../components/my/Login";
import { IJoinRealReqType } from "../../components/my/Join";
import { AxiosError } from "axios";

export const useGetMatchRule =()=>{
    const {data:rule,isLoading:isRuleLoading,error:isRuleError} = useQuery<IApiResponse<IMatchRuleResponse>>(
        'rules',
        ()=> getMatchRule()
    );

    return {rule,isRuleLoading,isRuleError};
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
            onSuccess(data, variables, context) {
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