
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import "../scss/styles.scss";
import { AppRouter } from '../routers/AppRouter';
import { configureStore } from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
		<Provider store={ configureStore() }>
			<AppRouter />
		</Provider>
  )
}

export default App;
