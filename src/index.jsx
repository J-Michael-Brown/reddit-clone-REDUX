import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import postListReducer from './reducers/post-list-reducer';
import { Provider } from 'react-redux';



const memeCentre = createStore(postListReducer);
let unsubscribe = memeCentre.subscribe(() =>
    console.log(memeCentre.getState())

);

const render = (Component) => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={memeCentre}>
                <Component />
            </Provider>
        </HashRouter>,
        document.getElementById('react-app-root')
    );
};

render(App);

/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    })
}/*eslint-enable */
