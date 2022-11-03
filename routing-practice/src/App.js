import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Num from './components/Num';

function App() {
    return (
        <div className="App">
            <h1>Routing</h1>
            <Link to={"/home"}>React Home</Link> <br/>
            <Link to={"/:num"}>Num</Link>

            <hr />


            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/:num/:textColor/:backgroundColor' element={<Num/>}/>
                {/* <Route path='/:word' element={<Word/>}/> */}
            </Routes>
        </div>
    );
}

export default App;
