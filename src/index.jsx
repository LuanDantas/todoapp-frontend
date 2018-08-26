import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

/*
 * Constante para cirar a nossa store a trabalhar com o Redux
 * Recebe o resultado do método createStore passando como parâmetro os nossos reducers
 * Params = @reducers
*/ 
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('app'))