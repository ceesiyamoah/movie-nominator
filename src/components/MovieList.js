import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './../actions/index';
import Movie from './Movie';
const MovieList = ({ getMovies, searchTerm, movies }) => {
	React.useEffect(() => {
		getMovies();
	}, [getMovies, searchTerm]);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
				flexWrap: 'wrap',
			}}
		>
			{movies &&
				movies.map((item) => (
					<React.Fragment key={item.imdbID}>
						<Movie {...item} />
					</React.Fragment>
				))}
		</div>
	);
};
const mapStateToProps = (state) => ({
	searchTerm: state.movies.searchTerm,
	movies: state.movies.movieList,
});

const mapDispatchToProps = {
	getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
