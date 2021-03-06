import axios from 'axios';

export const FETCH_LOCATION = 'FETCH_LOCATION';

const ROOT_URL = 'http://localhost:2222/api/explore/countries';

export function fetchExploreLocations() {
	const request = axios.get(ROOT_URL)

	return {
		type: FETCH_LOCATION,
		payload: request
	}
};

