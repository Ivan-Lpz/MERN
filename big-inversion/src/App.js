import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';


function App() {
	return (
		<div className="App">
			<PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
			<PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
			<PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
			<PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />

			{/* Note: we can pass down a string with or without curly braces. */}
		</div>
	);
}

export default App;
