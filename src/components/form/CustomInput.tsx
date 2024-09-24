import styled from 'styled-components';

const Container = styled.div`
    margin: 40px 0px;
`;

const Label =styled.label<{hidden?:boolean}>`
    margin-left: 5px;
    margin-bottom: 10px;
    display: ${props=> props.hidden ==null || props.hidden==undefined ? "block": "none"};
    font-size: 12px;
    font-weight: 600;
    color: #727f88;
`;

const Input =styled.input`
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

const ErrMsg = styled.p`
    margin-top: 10px;
    font-size : 12px;
    color:red;
    font-weight: 700;
`;

const Desc= styled.p`
  font-size  :10px ;
  color:rgb(114,127,136);
  padding:10px 10px 0 0 ;
`;

export interface ICustomInputProps{
    label: string,
    defaultValue?: number|string,
    // register:UseFormRegister<FieldValues>,
    type:string,
    desc?:string,
    hidden?:boolean,
    placeholder?:string,
    [key: string]: any; 
}

const CustomInput = ({label,type,hidden,desc,placeholder,defaultValue,...rest}:ICustomInputProps) => {
    const name = rest.register.name;
    const hasError = !!rest.errors[name];
    
    return (
        <Container>
            <Label hidden={hidden}>{label}</Label>
            <Input type={type} {...rest.register} placeholder={placeholder} hidden={hidden} defaultValue={defaultValue}/>
            {
                desc && <Desc>
                    {desc}
                </Desc>
            }
            {
             hasError
             ?
             <ErrMsg>
                {rest.errors[name].message}
             </ErrMsg>
             :
             null   
            }
        </Container>
    );
};

export default CustomInput;