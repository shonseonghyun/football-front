import imageCompression from "browser-image-compression";
import { IStadiumRegType } from "../components/stadium/reg/StadiumReg";
import { IMatchRegType } from "../interface/MatchInterface";
import { API } from "./AxiosInstance";

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

export const getMatchRule = async () =>{
    return await API.get('/api/v1/match/rules')
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