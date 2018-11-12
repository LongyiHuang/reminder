import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));


// //热加载
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <Provider store={ store }>
                <App/>
            </Provider>,
            document.getElementById('root')
        );
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
