import React from 'react';
import { connect } from 'react-redux';
import { editTerm } from '../actions';
const SearchBar = ({ searchTerm, editTerm }) => {
	return (
		<div className='searchbar'>
			<div>THE SHOPPIES</div>
			<input
				type='text'
				className='searchinput'
				placeholder='Find a movie'
				value={searchTerm}
				onChange={(e) => editTerm(e.target.value)}
			/>
			<div>
				<img
					src='https://thumbs.dreamstime.com/b/avatar-icon-avatar-flat-symbol-isolated-white-avatar-icon-avatar-flat-symbol-isolated-white-background-avatar-simple-icon-124920496.jpg'
					alt='User profile'
					className='user'
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	searchTerm: state.movies.searchTerm,
});

const mapDispatchToProps = {
	editTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
