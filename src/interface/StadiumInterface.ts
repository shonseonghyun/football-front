export interface IStadiumResponse{
    stadiumNo:number,
    stadiumName:string,
    location:ILocationResponse,
    imageList:IImageReponse[]
}

export interface ILocationResponse{
    province:string,
    city:string,
    address:string,
}

export interface IImageReponse{
    imageNo: number,
    newFileName:string,
    filePath:string,
}