import React, { useEffect, useState } from 'react'

export default function News() {
  const [varbttn,setVarbttn]=useState('contained')

  useEffect(() => {
      if(document.location.pathname=="/news"){
            setVarbttn("outlined")
    }
  },[])

  return (
    <div>News {varbttn}</div>
  )
}
