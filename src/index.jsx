import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

/*
 * Constante para integrar a utilização do plugin 'Redux Chrome Dev Tools'
 * no Google Chrome
*/
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/*
 * Constante para criar a nossa store a trabalhar com o Redux
 * Recebe o resultado do método createStore passando como parâmetro os nossos reducers
 * Params = @reducers
*/ 
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('app'))