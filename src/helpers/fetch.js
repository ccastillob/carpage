
// Guardamos en una constante el valor de la ruta de nuestra API en desarrollo
const baseUrl = process.env.REACT_APP_CARPAGE_API_URL;

// Creamos una función que nos servirá para hacer fetch a la data pasando el endpoint, la data y el metodo
export const fetchData = ( endpoint, data, method = 'GET' ) => {

	// Creamos una constante donde almacenaremos toda nuestra ruta
	const url = `${ baseUrl }/${ endpoint }`;

	// Creamos una condición donde retornaremos un fetch segun el metodo que le pasemos
	if( method === 'GET' ){
		return fetch( url )
	}else {
		return fetch( url, {
			method,
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify( data )
		})
	}

}


