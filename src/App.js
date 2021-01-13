import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import NominationList from './components/NominationList';
const App = () => {
	return (
		<>
			<SearchBar />

			<div className='content'>
				<div className='main'>
					<MovieList />
				</div>
				<div className='side'>
					<NominationList />
				</div>
			</div>
		</>
	);
};

export default App;
