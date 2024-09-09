import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import CustomInput from '../../form/CustomInput';
import CustomSelect from '../../form/CustomSelect';
import { useGetMatchRule, useRegMatch } from '../../../hooks/api/apiHooks';
import { useLocation } from 'react-router-dom';
import { IMatchRegType } from '../../../interface/MatchInterface';

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

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
    margin: 40px 0px;
`;

const MatchReg = () => {
    const location = useLocation();
    const stadiumNo = location.state?.stadiumNo;
    const {register,handleSubmit,formState:{errors}}= useForm<IMatchRegType>();

    const {rule} = useGetMatchRule();
    const [regMatch] = useRegMatch();

    const onValid = (data:IMatchRegType)=>{
        regMatch.mutate(data);
    }

    const onInValid=(e:any)=>{

    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onValid,onInValid)}>
                <CustomInput label="번호" type='text' register={register('stadiumNo')} errors={errors} hidden defaultValue={stadiumNo}/>
                <CustomInput label="금액" type='text' placeholder='10000' register={register('price')} errors={errors}/>
                <CustomInput label="날짜" type='text' placeholder='20240827' register={register('startDt')} errors={errors} />
                <CustomInput label="시간" type='text' placeholder='2000' register={register('startTm')} errors={errors}/>
                <CustomInput label="팀 별 인원 수" type='number' placeholder='5' register={register('headCount')} errors={errors}/>
                <CustomSelect label="성별 제한" rules={rule?.data.genderRule} register={register('genderRule')} />
                <CustomSelect label="레벨 제한" rules={rule?.data.levelRule} register={register('levelRule')} />
                <RegBtn>등록</RegBtn>
            </form>
        </Container>
    );
};

export default MatchReg;