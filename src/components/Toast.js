import React from 'react';
import { connect } from 'react-redux';
import { clearNotification } from './../actions/index';
const Toast = ({ text, clearNotification }) => {
	React.useEffect(() => {
		if (text) {
			setTimeout(() => {
				clearNotification();
			}, 3000);
		}
	}, [clearNotification, text]);

	return (
		<div className='toast' disabled={text === '' ? 'disabled' : ''}>
			{text}
		</div>
	);
};
const mapStateToProps = (state) => ({
	text: state.movies.notification,
});

const mapDispatchToProps = {
	clearNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
