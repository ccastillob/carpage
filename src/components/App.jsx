
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import "../scss/styles.scss";
import { Provider } from 'react-redux';
import { AppRouter } from '../routers/AppRouter';
import { configureStore } from './store/store';

const App = () => {

  return (
		<Provider store={ configureStore() }>
			<AppRouter />
		</Provider>
  )
}

export default App;
