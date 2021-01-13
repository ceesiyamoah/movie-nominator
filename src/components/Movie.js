import React from 'react';
const defaultImage =
	'https://m.media-amazon.com/images/M/MV5BMTgzNjYxOTQzMl5BMl5BanBnXkFtZTgwOTQyMDEwMDE@._V1_SX300.jpg';
const Movie = ({ Title, Poster, Year }) => {
	return (
		<div className='movie'>
			<div className='poster'>
				<img
					src={Poster || defaultImage}
					alt='movie'
					style={{ borderRadius: '5px' }}
				/>
				<span className='year'>{Year}</span>
				<button>Nominate</button>
			</div>
			<h3>{Title}</h3>
		</div>
	);
};

export default Movie;
