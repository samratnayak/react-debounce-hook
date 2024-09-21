import React, { useState, useRef, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import useDebounce from "./useDebounce";

export default function App() {
  const [val, setVal] = useState(`Search`);
  const timeRef = useRef();

  const debounce = useDebounce((text)=> {
    console.log("searching "+text);
  }, 1000);

  const search = (event) => {
    const val = event.target.value;
    setVal(val);
    debounce(val);

  //   if(timeRef.current){
  //     clearTimeout(timeRef.current);
  //     console.log('timeout cleared');
  //   }
    
  //  timeRef.current = setTimeout(() => {
  //       console.log('searching.. '+val);
  //     }, 1000);
    
  };

  useEffect(() => {
    console.log('rendering...')
    
    return ()=> {
      if(timeRef.current)
      clearTimeout(timeRef.current)
  }
  }, []);

  return (
    <div>
      <input onChange={search} value={val} onClick={() => setVal('')}></input>
    </div>
  );
}
