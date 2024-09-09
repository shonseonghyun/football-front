import { useCallback, useEffect, useRef, useState } from 'react';
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useInterval from '../../../hooks/useInterval';
import { StyleTransFormProps } from '../../../interface/StyleTransFormProps';

const Container = styled.div`
    background-color: #f2f5f7;
`;

const List = styled.ul`
    max-width: 1024px;
    padding: 0 40px;
    margin: 0 auto; //width가 존재하지 않아 해당 속성 적용되지 않았었다.
`;

const ItemContainer = styled.div`
    /* width: 100%; */
    overflow-x: hidden;
`;

const TransFormContainer = styled.div<StyleTransFormProps>`
    /* width: 2832px; */
    width: ${props=>props.$count*944}px;
    transform: translateX(${props=>(props.$currentIdx-1)*(-944)}px);
    transition: all 0.5s ease-in-out;

    /* transform: translateX(-944px); */
    /* transform: translateX(-1888px); */
`;

const Item = styled.li`
    float: left;
    width: 944px;
    padding: 20px 0;
`;

const Img = styled.img`
    width: 100%;
    border-radius:10px;
`;

interface AddvertiseProps{
    order: number,
    title: string,
    link : string,
    isOpen: boolean,
    image: string,
}

const fakeAddvertiseDatas:AddvertiseProps[] = [
    {
        order:1,
        title:"존중,격려,즐김",
        link:`/magazine/1`,
        isOpen:true,
        image:"https://d31wz4d3hgve8q.cloudfront.net/media/banner-manner_pc.png"
    },
    {
        order:2,
        title:"아마추어2 이하 작은 전쟁",
        link:`/magazine/2`,
        isOpen:true,
        image:"https://d31wz4d3hgve8q.cloudfront.net/media/ptl-special-amateur_pc.png"
    },
    {
        order:3,
        title:"6명 이상 모이면 2만원 할인쿠폰",
        link:`/magazine/3`,
        isOpen:true,
        image:"https://d31wz4d3hgve8q.cloudfront.net/media/banner-6member_pc.png"
    },
    {
        order:4,
        title:"이게 뭐시여",
        link:`/magazine/4`,
        isOpen:true,
        image:"https://d31wz4d3hgve8q.cloudfront.net/media/banner-join-the-team_pc.png"
    }
];

function getData() {
    return fakeAddvertiseDatas;
};

const Carousel = () => {
    const datas = getData();
    const idx = datas.length > 0 ? 1 : 0;
    const [currentIdx,setCurrentIdx] = useState(idx);

    const moveCurrentIdx = useCallback(()=>{
        setCurrentIdx((prev)=>{
            const nextIdx = prev+1;
            if(nextIdx>datas.length){
                return 1;
            }
            return nextIdx;
        })
    },[]);

    useInterval(()=>moveCurrentIdx(),1000);

    return (
        <Container>
            <List>
                <ItemContainer>
                    <TransFormContainer $currentIdx={currentIdx} $count={datas.length}>
                        {
                            datas.map(add=>(
                                <Item key={add.order}>
                                    <Link to={add.link}>
                                        <Img src={add.image} />
                                    </Link>
                                </Item>
                            ))
                        }
                    </TransFormContainer>
                </ItemContainer>
            </List>
        </Container>
    );
};

export default Carousel;


