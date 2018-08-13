// Default imports
import React, { Component } from 'react'
import PageHeader from '../template/page-header'

// Components imports
import TodoForm from './to-do-form'
import TodoList from './to-do-list'

export default class Todo extends Component {
    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}