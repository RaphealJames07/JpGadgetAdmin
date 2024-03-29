// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store  from './store.tsx'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Toaster } from 'react-hot-toast'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
        <Toaster />
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
  </Provider>,
)