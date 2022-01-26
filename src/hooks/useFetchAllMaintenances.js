
import { useEffect, useState } from 'react';
import { getAllMaintenances } from '../helpers/getAllMaintenances';

export const useFetchAllMaintenances = () => {

	const [ state, setState ] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {

		let isMounted = true;

		getAllMaintenances()
			.then( infoData => {
				if (isMounted)
				setState({
					data: infoData.allListMaintenances,
					loading: false,
				})
			}).catch( error => {
				setState({
					data: undefined,
					loading: true,
				})
			});

			return () => { isMounted = false };

	}, []);

	return state;

}