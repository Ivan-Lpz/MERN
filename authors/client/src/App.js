// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import Create from './components/Create';
import Edit from './components/Edit';
import ShowOne from './components/ShowOne';

function App() {
	return (
		<div className="App">
			<h1>Favorite Authors</h1>
			<Routes>
				<Route path ="/" element={<Main/>}/>
				<Route path ="/create" element={<Create/>}/>
				<Route path ="/edit/:id" element={<Edit/>}/>
				<Route path ="/show/:id" element={<ShowOne/>}/>
			</Routes>
		</div>
	);
}

export default App;
