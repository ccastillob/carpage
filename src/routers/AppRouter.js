// Importamos todo lo necesario para usar las rutas
import React, { lazy, Suspense } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { LoadingPage } from '../components/pages/LoadingPage';
import { ScrollToTop } from '../helpers/scrollToTop';


const ModelPage = lazy(() => import('../components/pages/ModelPage'));
const HomePage = lazy(() => import('../components/pages/HomePage'));
const EventPage = lazy(() => import('../components/pages/EventPage'));
const MaintenancePage = lazy(() => import('../components/pages/MaintenancePage'));
const ModelDetails = lazy(() => import('../components/pages/ModelDetails'));
const MaintenanceDetails = lazy(() => import('../components/pages/MaintenanceDetails'));
const Shop = lazy(() => import('../components/pages/Shop'));
const DiscountPage = lazy(() => import('../components/pages/DiscountPage'));
const DiscountDetails = lazy(() => import('../components/pages/DiscountDetails'));

// Exportamos cada una de nuestras rutas con su respectivo componente
export const AppRouter = () => {
	return (
		<Router>
			<Suspense fallback={<LoadingPage />}>
				<ScrollToTop />
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
				<ToastContainer pauseOnFocusLoss={false} limit={3} />
			</Suspense>
		</Router>
	)
}
