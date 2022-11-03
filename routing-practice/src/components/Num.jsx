import React from 'react';
import { useParams } from 'react-router-dom';

const Num = (props) => {


    //grab the url variable
    const {num,textColor,backgroundColor} = useParams();




    return isNaN(num) ? (
        //First this will be the true outcome
        <div style={{backgroundColor: backgroundColor}}>
            <h1 style={{color: textColor}}>The word is : {num}</h1>
        </div>

    ) : (
        <div style={{backgroundColor: backgroundColor}}>
        <h1 style={{color: textColor}}>The number is : {num}</h1>
    </div>   //otherwise this will be false

    )

}


export default Num;