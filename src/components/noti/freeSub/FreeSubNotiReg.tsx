import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useFreeSubReg, useGetFreeSubTypes, useGetMember, useGetPlabMatch } from "../../../hooks/api/apiHooks";
import { AuthUserInfo } from "../../../recoil/AuthUserInfo";
import CustomInput from "../../form/CustomInput";
import CustomSelect from "../../form/CustomSelect";
import { INotiRegType } from "../../../interface/NotiInterfact";

const FreeSubNotiRegContainer = styled.div`
    margin: 0 auto;
    width: 1024px;
`;

const Button = styled.button`
    padding:10px;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
`;

const FreeSubNotiRegForm = styled.form`
  margin-bottom  : 20px ;
`;

const RegButton = styled(Button)`
    color: #fff;
    background-color: #1570ff;
`;

const CusotmInputContainer = styled.div`
    position: relative;
`;

const ValidBtnCotaniner = styled.div`
    position : absolute ;
    right: 1%;
    top: 40%;
`;

const ValidBtn = styled.button`
    border-radius: 10px;
    background-color: #1570ff;
    color: #fff;
    padding: 10px;

    &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const FreeSubNotiReg = () => {
    const navigate = useNavigate();
    const userInfo = useRecoilValue(AuthUserInfo);
    const {register,handleSubmit,getValues,watch,formState:{errors},resetField}=useForm<INotiRegType>();
    const {types,isTypesLoading} = useGetFreeSubTypes();
    const {member,isMemberLoading} = useGetMember(userInfo.memberNo);
    const [isMatchNoValidFlg,setIsMatchNoValidFlg] = useState(false);
    const getPlabMatch = useGetPlabMatch(watch("matchNo"));
    const {mutate} = useFreeSubReg();

    const checkMatchNoIsValid = async ()=>{
        try{
            const response = await getPlabMatch.refetch();
            
            //매치 미존재(404 에러) 
            if((response.error as AxiosError)?.response?.status === 404){
                alert("존재하지 않는 매치번호 입니다.");
                return ;
            }
    
            //매치 존재
            alert("매치 인증 완료");
            setIsMatchNoValidFlg(true);

        }catch(e){
            //확인되지 않은 에러 발생 시
            alert("확인되지 않은 에러가 발생하였습니다.");
        }
    }

    const onValid = (data:INotiRegType)=>{
        if(!isMatchNoValidFlg){
            alert("매치 유효성 인증 후 재시도 부탁드립니다.");
            return ;
        }

        mutate.mutate(data);
    }

    const onInValid=(e:any)=>{
        alert(e);
    }

    useEffect(()=>{
        setIsMatchNoValidFlg(false);
    },[watch("matchNo")]);

    useEffect(()=>{
        console.log("유효성 검증 확인",isMatchNoValidFlg ? "완료" : "필요");
    },[isMatchNoValidFlg]);

    return (
        <FreeSubNotiRegContainer>
            <FreeSubNotiRegForm onSubmit={handleSubmit(onValid,onInValid)}>
                {
                    isMemberLoading 
                    ?  null 
                    : <CustomInput label="이메일" type="text" hidden errors={errors} register={register("email")} defaultValue={member?.data.email}/>
                }

                <CusotmInputContainer>
                    <CustomInput label="매치번호" type="text" placeholder={"44123"} errors={errors} register={register("matchNo")} />
                    <ValidBtnCotaniner>
                        <ValidBtn type="button" onClick={checkMatchNoIsValid} disabled={isMatchNoValidFlg}>
                            인증
                        </ValidBtn>
                    </ValidBtnCotaniner>
                </CusotmInputContainer>

                {
                    isTypesLoading
                    ? null
                    : <CustomSelect label="프리서브 종류" values={types?.data.freeSubType} register={register('subType')} defaultValue={types?.data.freeSubType[0].name}/>
                }
                
                <RegButton>등록</RegButton>
            </FreeSubNotiRegForm>
        </FreeSubNotiRegContainer>
    );
};

export default FreeSubNotiReg;