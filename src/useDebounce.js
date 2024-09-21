import {useEffect, useRef} from "react";

const useDebounce = (callback, timeOut) => {

  const timeOutRef = useRef();

  useEffect(()=> {
    return () => {
      if(timeOutRef.current){
        clearTimeout(timeOutRef.current);
      }
    }
  }, [])

  return (...args) => {
    if(timeOutRef.current){
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = setTimeout(()=> {
      callback(...args);
    }, timeOut);
  }
}

export default useDebounce;