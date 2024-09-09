import { useForm } from "react-hook-form";
import styled from "styled-components";
import { regStadium } from "../../../axios/api";
import CustomInput from "../../form/CustomInput";
import CustomInputFile from "../../form/CustomInputFile";

const Container = styled.div`
    max-width: 1024px;
    margin: 0px auto;
`; 

const ButtonWrapper = styled.div`
    margin: 40px 0px;
`
const RegBtn = styled.button`
    border: 1px solid #d9e0e6;
    background-color: #1570ff;
    border-radius: 12px;
    padding: 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    color: white;
`;

export type IStadiumRegType={ 
    province : string,
    city:string,
    address:string,
    stadiumName:string,
    stadiumImgs:File[]
}

const rule = {required:"필수 입력 내용입니다"};

const StadiumReg = () => {
    const {register,handleSubmit,formState:{errors}}= useForm<IStadiumRegType>();

    const onValid = (data:IStadiumRegType)=>{
        regStadium(data);
    }

    const onInValid=(e:any)=>{
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onValid,onInValid)}>

                <CustomInput label="도" type="text" placeholder="ex) 경기도" register={register("province",rule)} errors={errors}/>

                <CustomInput label="시" type="text" placeholder="ex) 수원시"  register={register("city",rule)} errors={errors} />

                <CustomInput label="상세주소" type="text" placeholder="ex) 수성로 244번지 25" register={register("address",rule)} errors={errors} />
            
                <CustomInput label="스타디움 명칭" type="text" placeholder="ex) 위브하늘채스타디움" register={register("stadiumName",rule)} errors={errors} />

                <CustomInputFile label="스타디움 이미지" type="file" register={register("stadiumImgs")} mutiple hidden />
            <ButtonWrapper>
                <RegBtn>등록</RegBtn>
            </ButtonWrapper>
            </form>
        </Container>
    );
};

export default StadiumReg;