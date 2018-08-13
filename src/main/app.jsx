// Dependências CSS
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

// Default imports
import React from 'react'

// Components & Pages imports
import Todo from '../to-do/to-do'
import About from '../about/about'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        <Todo />
        <About />
    </div>
)