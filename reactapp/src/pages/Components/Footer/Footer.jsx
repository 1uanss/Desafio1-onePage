import { useState } from 'react';
import Imput from '../Imput/Imput';
import Button from '../Button';
import'./style.css';

function Footer(){
    const dontSendForm = event=> event.prenventDefault()
    return(
        <footer className='container-3'  onSubmit={dontSendForm}>
           <h1 className='ct3-title'>Entre em contato</h1> 
        <form action='' className='form'>
           <Imput type="text" placeholder="Nome:"/>
           <Imput type="email" placeholder="E-mail:"/>
           <Imput type="tel" placeholder="Telefone" onChange={(event)=>setTelValue(event.target.value)} />
           <textarea name="text-area" id="" className='text-area' cols="1" rows="5" placeholder='Mensagem..'></textarea>
           <Button type="submit" width="47.1rem" text="Enviar mnsagem" fontWeight="700"/>
        </form>
        </footer>
    )
}
export default Footer