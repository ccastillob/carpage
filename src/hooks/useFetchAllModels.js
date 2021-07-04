// Importamos el useEffect y useState
import { useEffect, useState } from "react";
// Importamos nuestro helper
import { getAllModels } from "../helpers/getAllModels";

// Creamos un hook para que nos retorne la data y un loading
export const useFetchAllModels = () => {

	// Creamos un estado inicial para almacenar toda la data y el loading
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	// Hacemos uso del hook useEffect para traer nuestra información
	useEffect(() => {

		// Haciendo uso de nuestro helper traemos la data y actualizamos el estado colocando el loading en false
		getAllModels()
			.then( infoData => {
				setState({
					data: infoData.allListModels,
					loading: false
				})
			});

	}, []);

	// Finalmente retornamos todo el estado(data y loading) de nuestro hook
	return state;

}
