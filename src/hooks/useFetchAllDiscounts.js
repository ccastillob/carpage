
import { useEffect, useState } from "react";
import { getAllDiscounts } from '../helpers/getAllDiscounts';

export const useFetchAllDiscounts = () => {

	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {

		let isMounted = true;

		getAllDiscounts()
			.then( infoData => {
				if (isMounted)
				setState({
					data: infoData.allListDiscounts,
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