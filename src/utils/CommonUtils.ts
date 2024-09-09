import { IMatchResponse } from "../interface/MatchInterface";
import { IStadiumResponse } from "../interface/StadiumInterface";

export const copyText = (text:string)=>{
  navigator.clipboard.writeText(text);
  alert("주소가 복사됐어요!")
}

export const convertWonCurreny = (price:number) => {
  return  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원";
}


export const getFullAddress = (stadium:IStadiumResponse)=>{
  return stadium.location.province+" " +stadium.location.city+" " +stadium.location.address;
}