
import { useEffect, useState } from 'react';
import { getAllMaintenances } from '../helpers/getAllMaintenances';

export const useFetchAllMaintenances = () => {

	const [ state, setState ] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {

		getAllMaintenances()
			.then( infoData => {
				setState({
					data: infoData.allListMaintenances,
					loading: false,
				})
			});

	}, []);

	return state;

}