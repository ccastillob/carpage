
// Importamos el useEffect y useState
import { useEffect, useState } from "react";
// Importamos nuestro helper
import { getAllDiscounts } from '../helpers/getAllDiscounts';

// Creamos un hook para que nos retorne la data y un loading
export const useFetchAllDiscounts = () => {

	// Creamos un estado inicial para almacenar toda la data y el loading
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	// Hacemos uso del hook useEffect para traer nuestra información
	useEffect(() => {

		// Haciendo uso de nuestro helper traemos la data y actualizamos el estado colocando el loading en false
		getAllDiscounts()
			.then( infoData => {
				setState({
					data: infoData.allListDiscounts,
					loading: false
				})
			});

	}, []);

	// Finalmente retornamos todo el estado(data y loading) de nuestro hook
	return state;

}