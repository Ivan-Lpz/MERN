// import './App.css';
import Box from './components/Box';
import { useState } from 'react';




function App() {


    const [colors, setColors] = useState([]);

    return (
        <>
            <div style={{
                "display": "flex",
                "flex-direction": "column",
                "alignItems": "center"
            }}>
                <Box colors={colors} setColors={setColors} />
                <div style={{ "display": "flex" }}>
                    {colors.map((oneColor, idx) =>
                        <p style={{
                            "backgroundColor": oneColor,
                            "color": "white",
                            "height": "100px",
                            "width": "100px",
                            "margin": "10px",
                        }}
                            key={idx}>{oneColor} </p>
                    )}
                </div>
            </div>
        </>
    );
}




export default App;
