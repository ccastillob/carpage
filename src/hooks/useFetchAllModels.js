
import { useEffect, useState } from "react";
import { getAllModels } from "../helpers/getAllModels";

export const useFetchAllModels = () => {

	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {

		let isMounted = true;

		getAllModels()
			.then( infoData => {
				if (isMounted)
				setState({
					data: infoData.allListModels,
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
