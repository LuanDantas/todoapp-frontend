// Componente para rotas
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// Components && Pages imports
import Todo from '../to-do/to-do'
import About from '../about/about'

export default props => (
    <Router history={ hashHistory }>
        <Route path='/todos' component={ Todo } />
        <Route path='/about' component={ About } />
        <Redirect from='*' to='/todos' />
    </Router>
)