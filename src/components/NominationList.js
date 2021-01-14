import React from 'react';
import { connect } from 'react-redux';
import closeButton from './../svg/close.svg';
import { removeNomination, clearNominations } from './../actions';
const NominationList = ({
	nominations,
	removeNomination,
	clearNominations,
}) => {
	if (nominations.length > 0) {
		return (
			<div className='nominations'>
				<h3 style={{ textAlign: 'center' }}>Nominations</h3>
				{nominations.map((item) => (
					<div key={item.imdbID} className='list'>
						<span className='nominationtitle'>{item.Title}</span>
						<div
							className='removebutton'
							onClick={() => removeNomination(item.imdbID)}
						>
							<img src={closeButton} alt='remove' />
						</div>
					</div>
				))}
				<div className='buttonholder'>
					<span>Save</span>
					<span>Create Link</span>
					<span onClick={clearNominations}>Remove All</span>
				</div>
			</div>
		);
	} else {
		return null;
	}
};
const mapStateToProps = (state) => ({
	nominations: state.movies.nominationList,
});

const mapDispatchToProps = {
	removeNomination,
	clearNominations,
};

export default connect(mapStateToProps, mapDispatchToProps)(NominationList);
