import React from 'react';
import { connect } from 'react-redux';
import closeButton from './../svg/close.svg';
import { removeNomination } from './../actions';
const NominationList = ({ nominations, removeNomination }) => {
	if (nominations.length > 0) {
		return (
			<div className='nominations'>
				<h3 style={{ textAlign: 'center' }}>Nominees</h3>
				{nominations.map((item) => (
					<div key={item.imdbID} className='list'>
						<span className='nominationtitle'>{item.Title}</span>
						<div
							className='removebutton'
							onClick={(e) => removeNomination(item.imdbID)}
						>
							<img src={closeButton} alt='remove' />
						</div>
					</div>
				))}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(NominationList);
