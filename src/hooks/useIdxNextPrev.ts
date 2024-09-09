import { useCallback, useState } from "react";


type UseIdxNextPrevReturnType = [
    number, 
    () => void,
    () => void
];

const useIdxNextPrev = (min:number,max:number) : UseIdxNextPrevReturnType => {
    const [currentIdx,setCurrentIdx] = useState(min);

    const movePrev=useCallback(()=>{
        setCurrentIdx(prev=> prev-1 < min ? prev : prev-1);
    },[]);

    const moveNext=useCallback(()=>{
        setCurrentIdx(prev=> prev+1 > max ? prev : prev+1);
    },[]);

    return [
        currentIdx,
        movePrev,
        moveNext
    ];
};

export default useIdxNextPrev;