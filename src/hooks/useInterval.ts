import { useState, useEffect, useRef } from 'react';

// https://mingule.tistory.com/65

interface IUseInterval {
    (callback: () => void, interval: number): void;
  }

  const useInterval: IUseInterval = (callback, interval) => {
    const savedCallback = useRef<(() => void) | null>(null);
    
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }
  
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }, [interval]);
  };

  export default useInterval;