import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement} from './reducers/actions'

export default function News() { 

  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.logged);


  const dispach = useDispatch();
  return (
    <div>
      News 
      <button onClick={ ()=> dispach(increment(5))}>+</button>
      <button onClick={ ()=> dispach(decrement())}>-</button>

      
      <h3>Counter egale a : {counter} et logged egale a : {logged ? 'TRUE':'FALSE'} </h3>
      </div>
  )
}

 //const [varbttn,setVarbttn]=useState('contained')
  // useEffect(() => {
  //     if(document.location.pathname=="/news"){
  //           setVarbttn("outlined")
  //   }
  // },[])
  //{varbttn}