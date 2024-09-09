import { useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";
import UploadIcon from "../icon/UploadIcon";
import ShowImgs from "../common/ImgSlider";

const InputFile = styled.input`
` ;

const ButtonWrapper = styled.div`
    position:relative;
    display: flex;
    /* gap:20px; */
    color: #727f88;
    transition: all 0.3s ease;
    color: #727f88;
    border: 1px solid #d9e0e6;
    background-color: #f8fafb;
    width: 100%;
    height: 54px;
    border-radius: 16px;
    padding: 14px 15px;
    font-size: 16px;
    box-sizing: border-box;
    &:hover{
        background-color: whitesmoke;
    }  
`;

const ImgContainer = styled.div`
    margin: 20px 0;
    border: 1px solid #d9e0e6;
`;

const Label =styled.label`
    margin-left: 5px;
    margin-bottom: 10px;
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: #727f88;
`;

interface ICustomInputFileProps{
    label:string,
    type:string,
    mutiple?:boolean
    hidden?:boolean,
    register: UseFormRegisterReturn
}

const CustomInputFile = ({label,type,mutiple,hidden,register}:ICustomInputFileProps) => {
    const {ref,onChange,...rest} = register;
    const fileRef = useRef<HTMLInputElement|null>(null);
    const [previewImages,setPreviewImages] = useState<string[]>([]);

    const handleOnClick = ()=>{
        fileRef?.current?.click();
    }
    
    const handleOnChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        onChange(e);
        const targetFiles = e.target.files as FileList;
        console.log("handleOnChange:", targetFiles);
        const targetFilesArray = Array.from(targetFiles);
        const selectedFiles: string[] = targetFilesArray.map((file) => {
            return URL.createObjectURL(file);
          });

          setPreviewImages(selectedFiles);
    }



    return (
        <div>
            <Label>{label}</Label>
            <InputFile 
                type={type} 
                {...rest}
                ref={(e)=>{
                    ref(e);
                    fileRef.current=e;
                }} 
                multiple={mutiple} 
                hidden={hidden} 
                onChange={handleOnChange}
            />

            <ButtonWrapper>
                <UploadIcon onClick={handleOnClick}/>
                
            </ButtonWrapper>

            {
                previewImages.length > 0
                ?
                <ImgContainer>
                    <ShowImgs images={previewImages}/>
                </ImgContainer>
                :null
            }
        </div>
    );
};

export default CustomInputFile;