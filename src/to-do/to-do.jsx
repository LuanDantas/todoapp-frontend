// Default imports
import React from 'react'

// Components imports
import PageHeader from '../template/page-header'
import TodoForm from './to-do-form'
import TodoList from './to-do-list'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)