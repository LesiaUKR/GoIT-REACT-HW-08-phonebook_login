import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'components/Globalstyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/GoIT-REACT-HW-08-phonebook_login">
          <GlobalStyle /> 
          <App />
          <ToastContainer autoClose={1500} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
