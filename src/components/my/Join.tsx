import React from 'react';
import styled from 'styled-components';
import CustomInput from '../form/CustomInput';
import { useForm } from 'react-hook-form';
import CustomSelect from '../form/CustomSelect';
import { useGetMatchRule, useJoin } from '../../hooks/api/apiHooks';

const JoinContainer = styled.div`
    margin: 0 auto;
    width: 1024px;
`;

const FormCotainer = styled.div`
    margin-bottom: 40px;
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

const JoinButton = styled(Button)`
    color: #fff;
    background-color: #1570ff;
`;

interface IJoinReqType{
    email:string,
    pwd:string,
    pwdCheck:string,
    name:string,
    birthDt:string,
    gender:string,
    tel:string
}

export interface IJoinRealReqType{
    email:string,
    pwd:string,
    name:string,
    birthDt:string,
    gender:string,
    tel:string
}

const Join = () => {
    const {register,handleSubmit,getValues,formState:{errors}} = useForm<IJoinReqType>();
    const {rule} = useGetMatchRule();
    const {mutate} = useJoin();

    const onValid = (data:IJoinReqType)=>{
        const reqData:IJoinRealReqType ={
            email:data.email,
            pwd:data.pwd,
            tel:data.tel,
            gender:data.gender,
            name:data.name,
            birthDt:data.birthDt
        };
        mutate.mutate(reqData);
    }

    const onInValid=()=>{

    }

    return (
        <JoinContainer>
            <FormCotainer>
                <form onSubmit={handleSubmit(onValid,onInValid)}>
                    <CustomInput label='이메일' type='text' placeholder="이메일 주소를 입력하세요" register={register("email")} errors={errors} />
                    <CustomInput label='비밀번호' type='password' placeholder="비밀번호를 입력하세요" register={register("pwd")} errors={errors}/>
                    <CustomInput label='비밀번호 확인' type='password' placeholder="비밀번호를 한 번 더 입력하세요" register={register("pwdCheck",{
                        validate:{
                            checkPwd:fieldValue =>{
                                return (fieldValue==getValues("pwd")||'비밀번호가 일치하지 않습니다.')
                            }
                        }
                    })} errors={errors}/>
                    <CustomInput label='이름' type='text' placeholder="이름을 입력하세요" desc='2자 이상 10자 이하의 한글/영어로 설정해주세요' register={register("name")} errors={errors}/>
                    <CustomSelect label="성별" rules={rule?.data.genderRule} register={register('gender')} />
                    <CustomInput label='생년월일' type='text' placeholder="예) 19940101" register={register("birthDt")} errors={errors}/>
                    <CustomInput label='휴대폰 번호' type='text' placeholder="예) 01012345678" register={register("tel")} errors={errors}/>
                    <JoinButton>회원가입</JoinButton>
                </form>
            </FormCotainer>
        </JoinContainer>
    );
};

export default Join;