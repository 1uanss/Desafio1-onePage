import { useState } from 'react'
import './style.css';

function Card(props){
    const {backgroundColor, color} = props
    // console.log(props)
    const myStyleCard = {
        backgroundColor,
        color,
    };
    return (
        <div className="card">
            <div style={myStyleCard} className="car-color" >.</div>
            <h2 className='card-title'> title</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est ea quisquam qui doloribus, </p>
        </div>
    )
}
export default Card;