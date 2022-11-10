import './App.css';
// import {useState, useEffect} from 'react'
// import axios from 'axios'
import DisplayAllProducts from './components/DisplayAllProducts';
import DisplayOne from './components/DisplayOne';
// import CreateProduct from './components/CreateProduct';
import { Route, Routes } from 'react-router-dom'


function App() {
	return (
		<>
		<h1 style={{textAlign: 'center'}}>Products</h1>
			<Routes>
			<Route path="/" element={<DisplayAllProducts/>} />
			<Route path="/product/:id" element={<DisplayOne/>}/>
			{/* <Route path="/" element={<CreateProduct/>} /> */}
			{/* <DisplayOne/> */}
			</Routes>
		</>
	);
}

export default App;

