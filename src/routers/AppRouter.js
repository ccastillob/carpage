import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { DiscountPage } from '../components/pages/DiscountPage';
import { EventPage } from '../components/pages/EventPage';
import { HomePage } from '../components/pages/HomePage';
import { MaintenancePage } from '../components/pages/MaintenancePage';
import { ModelPage } from '../components/pages/ModelPage';

export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/events"
					component={ EventPage }
				/>
				<Route
					exact
					path="/discounts"
					component={ DiscountPage }
				/>
				<Route
					exact
					path="/maintenances"
					component={ MaintenancePage }
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
