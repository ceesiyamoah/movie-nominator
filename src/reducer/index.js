import { combineReducers } from 'redux';
import moviesListReducer from './moviesListReducer';

export default combineReducers({
	movies: moviesListReducer,
});
