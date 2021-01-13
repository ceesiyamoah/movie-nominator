import React from 'react';
import { connect } from 'react-redux';
import { addNomination } from '../actions';
const defaultImage =
	'https://m.media-amazon.com/images/M/MV5BMTgzNjYxOTQzMl5BMl5BanBnXkFtZTgwOTQyMDEwMDE@._V1_SX300.jpg';
const Movie = ({ Title, Poster, Year, addNomination, imdbID, nominated }) => {
	return (
		<div className='movie'>
			<div className='poster'>
				<span className='year'>{Year}</span>
				<button
					onClick={() => addNomination(imdbID)}
					disabled={nominated ? true : false}
				>
					Nominate
				</button>
				<img
					src={Poster === 'N/A' ? defaultImage : Poster}
					alt='movie'
					style={{ borderRadius: '5px' }}
				/>
			</div>
			<h3>{Title}</h3>
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	console.log(ownProps.imdbID);
	let nominated = null;
	state.movies.nominationList.length > 0 &&
		(nominated = state.movies.nominationList.find(
			(item) => item.imdbID === ownProps.imdbID
		));
	return {
		nominated,
	};
};

const mapDispatchToProps = {
	addNomination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
