import { useState} from 'react'
import './style.css';
import Card from '../Components/cards/card';

function MainInHtml() {
    const [colors] = useState([
        {backgroundColor: "#FF6363", color: "#FF6363"},
        {backgroundColor: "#63ECFF", color: "#63ECFF"},
        {backgroundColor: "#F363FF", color: "#F363FF"},
        {backgroundColor: "#63FF73", color: "#63FF73"},
        {backgroundColor: "#FFDD63", color: "#FFDD63"},
        {backgroundColor: "#6663FF", color: "#6663FF"},
    ]);
    
    return (
        <main className="container-2">
            {
                colors.map((style, idx) => <Card key={idx} backgroundColor={style.backgroundColor} color={style.color}/>)
            }
        </main>
    )
}

export default MainInHtml;