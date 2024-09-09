import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ReadingGlassesIcon from '../icon/ReadingGlassesIcon';
import XIcon from '../icon/XIcon';

const Container = styled.div`
    /* position: sticky; */
    /* width: 100%; */
    /* background-color: green; */
`;

const SecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    background-color: #f2f5f7;
    height: 30px;
    padding: 2px 8px;
    border-radius: 8px;
    box-sizing  : border-box;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchResultContainer = styled.section`
        width: 100%;
        height: 100%;
        border: 1px solid #f7f7f7;
        border-top: none;
        /* padding-left: 20px; */
        /* background-color: yellow; */
        /* padding: 2px 8px; */
        overflow-y: hidden;
`;


const Input = styled.input`
    border-radius: 6px;
    color: #3e5463;
    font-size: 12px;
    background: none;
    border: none;
    height: 30px;
    /* width: calc(100%-60px); */
    width: 100%;
    /* border: inherit; */
    padding: 10px;
    /* line-height: 20px; */
    background-color: inherit;
    outline: none; //focus 시 border 표시 제거
`;

const KeyWordContainer = styled.div`
    display: flex;
    padding: 14px 20px;
    flex-direction: column;
`;

const ConditionItem = styled.div`
    padding-right: 16px;
    font-size: 16px;
    line-height: 26px;
    margin: 0px;
    position: relative;
`;

const KeyWord = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #282b33;  
`;

const KeywordList = styled.ul`
    margin-top: 10px;
`;

const Item = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
    
    margin-right: 4px;
    margin-bottom: 4px;
    float: left;
    border: 1px solid #c4cdd4;
    border-radius: 20px;
    padding: 0px 12px;
    color: #43525c;
    height: 32px;
    display: block;
    line-height: 32px;
`;

const Span = styled.span`
    color:#727f88;
`;

const arr = [1,2,3];

const SearchInput = ()=> {
    const [query,setQuery] = useState("");
    const [isActive,setIsActive] = useState(query==null ? true : false );

    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.currentTarget.value);
        setIsActive(e.currentTarget.value ? true : false);
    },[]);

    const resetQuery=useCallback(()=>{
        setQuery("");
    },[]);

    return (
        <Container>
            <SecondContainer>
                <SearchContainer>
                    <ReadingGlassesIcon width="18" height="22" />
                    <Input type="search" placeholder="지역, 구장 이름으로 찾기" onChange={onChange} value={query}/>
                    {isActive ? <XIcon resetQuery={resetQuery} /> : null}
                </SearchContainer>

                <SearchResultContainer>
                {
                    arr.map((it)=>(
                        <React.Fragment key={it}>
                    <KeyWordContainer>
                        <div style={{display:"flex"}}>
                            <ConditionItem>
                                <KeyWord>
                                    구장
                                </KeyWord>
                            </ConditionItem>
                            <ConditionItem>
                                <KeyWord>
                                    팀
                                </KeyWord>
                            </ConditionItem>

                        </div>
                    </KeyWordContainer>

                    <KeyWordContainer>
                        <KeyWord>
                            최근 검색어
                        </KeyWord>
                        <KeywordList>
                            <Item>
                                <Span>
                                    수원
                                </Span>
                                <Span>
                                    <button>
                                        x
                                    </button>
                                </Span>
                            </Item>
                            <Item>
                                <Span>
                                    부천
                                </Span>
                                <Span>
                                    <button>
                                        x
                                    </button>                            
                                </Span>
                            </Item>
                        </KeywordList>
                    </KeyWordContainer>

                    <KeyWordContainer>
                        <KeyWord>
                            인기 키워드
                        </KeyWord>
                        <KeywordList>
                            <Item>
                                <Span>
                                    수원
                                </Span>
                            </Item>
                            <Item>
                                <Span>
                                    부천
                                </Span>
                            </Item>
                            <Item>
                                <Span>
                                    부천
                                </Span>
                            </Item>
                            <Item>
                                <Span>
                                    부천
                                </Span>
                            </Item>
                        </KeywordList>
                    </KeyWordContainer>
                    </React.Fragment>

                    ))
                }
                </SearchResultContainer>
            </SecondContainer>
        </Container>
    );
};

export default SearchInput;