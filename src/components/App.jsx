
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import "../scss/styles.scss";
import { Provider } from 'react-redux';
import { AppRouter } from '../routers/AppRouter';
import { store } from './store/store';

const App = () => {

  return (
		<Provider store={ store }>
			<AppRouter />
		</Provider>
  )
}

export default App;
