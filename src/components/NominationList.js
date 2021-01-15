import React from 'react';
import { connect } from 'react-redux';
import closeButton from './../svg/close.svg';
import {
	removeNomination,
	clearNominations,
	saveNominations,
	retrieveNominations,
} from './../actions';
const NominationList = ({
	nominations,
	removeNomination,
	clearNominations,
	saveNominations,
	retrieveNominations,
}) => {
	React.useEffect(() => {
		retrieveNominations();
	}, [retrieveNominations]);
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
					<span onClick={saveNominations}>Save</span>

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
	saveNominations,
	retrieveNominations,
};

export default connect(mapStateToProps, mapDispatchToProps)(NominationList);
