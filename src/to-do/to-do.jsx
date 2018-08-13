// Default imports
import React, { Component } from 'react'
import Axios from 'axios'

// Components imports
import PageHeader from '../template/page-header'
import TodoForm from './to-do-form'
import TodoList from './to-do-list'

// URL da API
const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    // Construtor para gerenciar o estado dos componentes
    constructor ( props ) {
        super(props)

        // Estado inicial do objeto
        this.state = { description: '', list: [] }

        // Esta linha basicamente força o bind para o this não vir vazio
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    
    // Evento que será chamado pelo evento 'onChange' do nosso input do componente 'to-do-form'
    // Iremos basicamente setar um novo estado para a descrição, resgatando o valor digitado no input
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description }).then(resp => console.log('Funcionou!'))
    }

    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={ this.state.description }
                    handleChange={ this.handleChange }
                    handleAdd={ this.handleAdd } />
                <TodoList />
            </div>
        )
    }
}