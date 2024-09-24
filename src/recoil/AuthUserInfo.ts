import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist({
    key:"peristsAtom",
    storage:localStorage
})

export interface IAuthUserInfo{
    accessToken:string,
    refreshToken:string,
    memberId:string,
    memberNo:number,
}

export const AuthUserInfo = atom<IAuthUserInfo>({
    key:"authUserInfo",
    default:{
        accessToken:"",
        refreshToken:"",
        memberId:"",
        memberNo:0
    },
    effects_UNSTABLE:[persistAtom]
});

export const isLoginSelector = selector({
    key:"isLogin",
    get:({get})=>{
        const authUserInfo = get(AuthUserInfo);
        return !!(authUserInfo.accessToken);
    }
})