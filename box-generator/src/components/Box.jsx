import React, { useState } from 'react';
import styles from "./Component.module.css"


const Box = props => {

    const [color, setColor] = useState();
    const {colors, setColors} = props;

    const addToColors = () => {
        const newColors = [...colors];
        newColors.push(color);
        setColors(newColors);
        setColor("");
    }




    return (
        <div className={ styles.mainDiv }>
            Color <input
            value={color}
                onChange={e => setColor(e.target.value)}
                type="text" />
            <button
                onClick={addToColors}
            >Add
            </button>
        </div>
    )
}



export default Box;