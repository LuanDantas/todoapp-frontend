// Default imports
import React, { Component } from 'react'
import PageHeader from '../template/page-header'

// Components imports
import TodoForm from './to-do-form'
import TodoList from './to-do-list'

export default class Todo extends Component {
    // Construtor para gerenciar o estado dos componentes
    constructor ( props ) {
        super(props)

        // Esta linha basicamente força o bind para o this não vir vazio
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        console.log('Add')
    }

    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={ this.handleAdd } />
                <TodoList />
            </div>
        )
    }
}