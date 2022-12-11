import { useState } from 'react';
import img from './../../assets/img/img.svg';
import Button from '../Components/Button'
import'./style.css';

function Initial() {


  return (
    <header className='container-1'>
        <div className='ct1-text-button'>
            <h1 className='ct1-txt-title'>okay. ipsum dolor sit amet </h1>
            <p className='ct1-txt'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis commodi temporibus atque fugiat,.</p>
            <Button width ="15.5rem" text="botão" fontWeight="400"/>
        </div>
        <img src={img} alt="imagem" />
    </header>
  )
}

export default Initial;