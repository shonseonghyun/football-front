import styled from 'styled-components';
import { StyleTransFormProps } from '../../interface/StyleTransFormProps';
import useInterval from '../../hooks/useInterval';
import { useCallback, useState } from 'react';

const HeaderContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    overflow: hidden;
`;

const TransFormContainer = styled.div<StyleTransFormProps>`
    width: ${props=>props.$count*1024}px;
    transform: translateX(${props=>(props.$currentIdx-1)*(-1024)}px);
    transition: all 0.5s ease-in-out;
`;

const ImgList = styled.ul`
    display: flex;
`;

const Item = styled.li`
`;

const Img = styled.img`
    width: 1024px;
    height: 448px;
    object-fit: cover;
`;

interface IShowImgsProps{
    images: string[]
}

const ImgSlider = ({images}:IShowImgsProps) => {
    if(images.length==0){
        console.log("없다");
    }
    const [currentIdx,setCurrentIdx] = useState(1);

    const moveCurrentIdx = useCallback(()=>{
        setCurrentIdx((prev)=>{
            const nextIdx = prev+1;
            if(nextIdx>images.length){
                return 1;
            }
            return nextIdx;
        })
    },[images]);

    useInterval(()=>moveCurrentIdx(),2000);


    return (
        <HeaderContainer>
                <TransFormContainer $currentIdx={currentIdx} $count={images.length} >
                    <ImgList>
                       { 
                            images.map((imageUrl) => (
                                    <Item key={imageUrl}>
                                        <Img src={imageUrl} />  
                                    </Item>
                                ))
                        }
                    </ImgList>
                </TransFormContainer>
            </HeaderContainer>
    );
};

export default ImgSlider;