import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => root.render(
  <React.StrictMode>
    <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
    />
  </React.StrictMode>
);

store.subscribe(render);
render();
