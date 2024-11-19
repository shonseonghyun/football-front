import imageCompression from "browser-image-compression";
import { IJoinRealReqType } from "../components/my/Join";
import { ILoignRegType } from "../components/my/Login";
import { IStadiumRegType } from "../components/stadium/reg/StadiumReg";
import { IMatchRegType } from "../interface/MatchInterface";
import { API } from "./AxiosInstance";
import axios from "axios";
import { INotiRegType } from "../interface/NotiInterfact";

export const regStadium = async (data:IStadiumRegType)=>{
    const formData = new FormData();
    const options={
        maxSizeMB:1, //허용하는 최대 사이즈 지정
        maxWidthOrHeight:1920,

    };

    const dtoData = {
        stadiumName: data.stadiumName,
        stadiumLocation:{
            province: data.province,
            city:data.city,
            address:data.address
        },
    };

    formData.append('regStadiumReqDto', new Blob([JSON.stringify(dtoData)], {type:'application/json'})); // 텍스트 데이터들 추가
    for(let i=0;i<data.stadiumImgs.length; i++){
        let targetImage= data.stadiumImgs[i];
        let compressedTargetImage = await imageCompression(targetImage,options);

        formData.append('files', compressedTargetImage); // 텍스트 데이터들 추가
    }

    const response = API.post(
        '/api/v1/stadium',
        formData, //body
        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );

    return response;
}

export const getPlabMatch = (matchNo:string)=>{
    // return API.get(`/api/v1/noti/freeSub/${matchNo}`);
    return axios.get(`https://www.plabfootball.com/api/v2/matches/${matchNo}/`)
}

export const getMatchRule = async () =>{
    return await API.get('/api/v1/match/rules')
    .then(response=>response.data);
}

export const getMember = async (memberNo:number) =>{
    return await API.get(`/api/v1/member/${memberNo}`)
    .then(response=>response.data);
}

export const getFreeSubNotiTypes = async () =>{
    return await API.get('/api/v1/noti/freeSub/types')
    .then(response=>response.data);
}

export const regMatch = async (data:IMatchRegType)=>{
    return await API.post(
        '/api/v1/match',
        data
    )
}

export const getMatchesByStartDt = async (startDt:string)=>{
    const url = `/api/v1/matches?startDt=${startDt}`;
    return await API.get(url)
                    .then(response=>response.data);
    ;
}

export const getMatchesByStartDtAndStadiumNo = async (startDt:string,stadiumNo:string)=>{
    const url = `/api/v1/matches?startDt=${startDt}&stadiumNo=${stadiumNo}`;
    return await API.get(url)
                    .then(response=>response.data);
    ;
}

export const getMatch = async (matchNo:string)=>{
    return await API.get(`api/v1/match/${matchNo}`)
            .then(response=>response.data);
}

export const getStadium = async (stadiumNo:string)=>{
    return await API.get(`/api/v1/stadium/${stadiumNo}`)
            .then(response=>response.data);
}

export const postLogin = async(data:ILoignRegType)=>{
    const url = '/api/v1/auth/login';
    return await API.post(url,
        data
    ).then(response=>response.data);
}

export const postJoin = async(data:IJoinRealReqType)=>{
    const url = '/api/v1/member';
    return await API.post(url,
        data
    ).then(response=>response.data);
}

export const postFreeSubNoti = async (data:INotiRegType)=>{
    const url = '/api/v1/noti/freeSub';
    return await API.post(url,
        data
    ).then(response=>response.data);
}
