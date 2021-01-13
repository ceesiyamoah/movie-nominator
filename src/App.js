import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
const App = () => {
	return (
		<>
			<SearchBar />
			{/* add margin 70px  */}
			<div className='content'>
				<div className='main'>
					<MovieList />
				</div>
				<div className='side'>Nominees</div>
			</div>
		</>
	);
};

export default App;
