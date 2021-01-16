import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './../actions/index';
import Movie from './Movie';
import Spinner from './Spinner';
const MovieList = ({ getMovies, searchTerm, movies }) => {
	React.useEffect(() => {
		getMovies();
	}, [getMovies, searchTerm]);
	if (movies)
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
	else {
		return <Spinner />;
	}
};
const mapStateToProps = (state) => ({
	searchTerm: state.movies.searchTerm,
	movies: state.movies.movieList || false,
	nominations: state.movies.nominationList,
});

const mapDispatchToProps = {
	getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
