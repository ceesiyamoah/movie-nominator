import React from 'react';
const SearchBar = () => {
	return (
		<div className='searchbar'>
			<div>THE SHOPPIES</div>
			<input type='text' className='searchinput' placeholder='Find a movie' />
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

export default SearchBar;
