// Importamos todo lo necesario para usar las rutas
import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

// Importamos nuestros componentes que se visualizarán para cada ruta
import { DiscountDetails } from '../components/pages/DiscountDetails';
import { DiscountPage } from '../components/pages/DiscountPage';
import { EventPage } from '../components/pages/EventPage';
import { HomePage } from '../components/pages/HomePage';
import { MaintenanceDetails } from '../components/pages/MaintenanceDetails';
import { MaintenancePage } from '../components/pages/MaintenancePage';
import { ModelDetails } from '../components/pages/ModelDetails';
import { ModelPage } from '../components/pages/ModelPage';
import { Shop } from '../components/pages/Shop';

// Exportamos cada una de nuestras rutas con su respectivo componente
export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/shop"
					component={ Shop }
				/>
				<Route
					exact
					path="/events"
					component={ EventPage }
				/>
				<Route
					exact
					path="/discounts/:nameDiscount"
					component={ DiscountDetails }
				/>
				<Route
					exact
					path="/discounts"
					component={ DiscountPage }
				/>
				<Route
					exact
					path="/maintenances/:nameType"
					component={ MaintenanceDetails }
				/>
				<Route
					exact
					path="/maintenances"
					component={ MaintenancePage }
				/>
				<Route
					exact
					path="/models/:nameModel"
					component={ ModelDetails }
				/>
				<Route
					exact
					path="/models"
					component={ ModelPage }
				/>
				<Route
					exact
					path="/"
					component={ HomePage }
				/>
				<Redirect to="/" />
			</Switch>
		</Router>
	)
}
