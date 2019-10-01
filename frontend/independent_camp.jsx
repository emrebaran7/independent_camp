//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
// import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    // let store = configureStore();
    const root = document.getElementbyId('root');
    ReactDOM.render(<h1>Welcome to Independent Camp</h1>, root)
})