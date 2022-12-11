import { useState } from 'react'


function Button({width,text,fontWeight}) {
  const myStyleButton ={
    width,
    fontWeight,
    paddingBlock: '1.3rem',
    backgroundColor: '#6C63FF',
    border: 'none',
    borderRadius:'.5rem',
    boxShadow: '0px 5px 5px rgba(23, 23, 23, 0.1)',
    color: '#FFFFFF',
    fontFamaly: 'Lato',


  }
    
  return (
    <button style={myStyleButton}>{text}</button>
  )
}

export default Button