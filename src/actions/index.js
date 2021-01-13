import axios from 'axios';
import { EDIT_TERM, GET_MOVIES } from './types';

export const getMovies = () => async (dispatch, getState) => {
	const { data } = await axios.get(
		`http://www.omdbapi.com/?apikey=dbcd798c&s=${
			getState().movies.searchTerm
		}&type=movie`
	);
	console.log(data.Search);
	dispatch({ type: GET_MOVIES, payload: data.Search });
};

export const editTerm = (newTerm) => (dispatch, getState) => {
	console.log();
	dispatch({ type: EDIT_TERM, payload: newTerm });
};
