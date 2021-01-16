import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import NominationList from './components/NominationList';
import Toast from './components/Toast';
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
			<Toast text='Noflkmsdfdkl saved' />
		</>
	);
};

export default App;
