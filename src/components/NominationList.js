import React from 'react';
import { connect } from 'react-redux';
const NominationList = ({ nominations }) => {
	if (nominations.length > 0) {
		return (
			<div className='nominations'>
				<h3>Nominees</h3>
				{nominations.map((item) => (
					<div key={item.imdbID} className='list'>
						<span>{item.Title}</span>
						<button className='cancel'>x</button>
					</div>
				))}
			</div>
		);
	} else {
		return <div className='nominations'>No movies nominated</div>;
	}
};
const mapStateToProps = (state) => ({
	nominations: state.movies.nominationList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NominationList);
