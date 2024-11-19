import styled from 'styled-components';
import { IEnumResponse } from '../../interface/MatchInterface';

const Container = styled.div`
    margin: 40px 0px;
`;

const Label =styled.label`
    margin-left: 5px;
    margin-bottom: 10px;
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: #727f88;
`;

const Select =styled.select`
    border: 1px solid #d9e0e6;
    background-color: #f8fafb;
    width: 100%;
    height: 54px;
    border-radius: 16px;
    padding: 14px 15px;
    font-size: 16px;
    box-sizing: border-box;
    outline: none;
`;

export interface ICustomSelectProps{
    label: string,
    // register:UseFormRegister<FieldValues>,
    values ?: IEnumResponse[];
    defaultValue?: number|string,
    [key: string]: any; 
}




const CustomSelect = ({label,values,defaultValue,...rest}:ICustomSelectProps) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Select {...rest.register} defaultValue={defaultValue}>
                {/* {
                    name=="gender"
                    ?
                    values?.map((value,key)=>{
                        if(key!=2){
                            return <option value={value.name}>{value.desc.substring(0,2)}</option>
                        }
                    })
                    :
                    values?.map((value,key)=>{
                        return <option value={value.name}>{values.length==key+1 ? "제한없음" :  value.desc }</option>
                    })
                } */}
                {
                    values?.map((value,key)=>{
                        return <option value={value.name}>{value.desc}</option>
                    })
                }
               
            </Select>
        </Container>
    );
};

export default CustomSelect;