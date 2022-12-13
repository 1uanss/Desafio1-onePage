import React from "react";
import "./style.css"

function Imput(props){
    const {typeImput, placeholder} = props

    return(
       <input className="imput-types" type={typeImput} placeholder={placeholder} /> 
    )
}
export default Imput