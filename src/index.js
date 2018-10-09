import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './reduce/configureStore';
import {Provider} from 'react-redux';


const initialState = {
    users: ['Amine', 'Julie', 'Kevin'],
    costs: [
      { paidBy: 'Amine', title: 'Beer', amount: 15 },
      { paidBy: 'Julie', title: 'Buger', amount: 10 },
      { paidBy: 'Kevin', title: 'Tequila', amount: 25 },
      { paidBy: 'Kevin', title: 'Beer', amount: 20 },
      { paidBy: 'Julie', title: 'Beer', amount: 15 },
      { paidBy: 'Amine', title: 'Buger', amount: 30 }
    ]
}

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') 
  )


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
