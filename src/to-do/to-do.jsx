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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)        

        // Chamada do método refresh
        this.refresh()
    }

    // Método para pegar a lista mais atualizada
    refresh (description = '') {
        const search = description ? `&description__regex=/${ description }/` : ''
        Axios.get(`${ URL }?sort=-createdAt${ search }`)
             .then( resp => this.setState({ ...this.state, description, list: resp.data }) )
    }
    
    // Método que será chamado pelo evento 'onChange' do nosso input do componente 'to-do-form'
    // Iremos basicamente setar um novo estado para a descrição, resgatando o valor digitado no input
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    // Método para adicionar uma nova tarefa no banco de dados
    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description })
             .then(resp => this.refresh())
    }

    // Método para remover/excluir o item(to-do) selecionado
    handleRemove (todo) {
        Axios.delete( `${ URL }/${ todo._id }` )
             .then( resp => this.refresh(this.state.description) )
    }

    // Método para marcar o item como finalizado
    handleMarkAsDone (todo) {
        Axios.put( `${ URL }/${ todo._id }`, { ...todo, done: true } )
             .then( resp => this.refresh(this.state.description) )
    }

    // Método para marcar o item como pendente
    handleMarkAsPending (todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
             .then(resp => this.refresh(this.state.description))
    }

    // Método para buscar os itens cadastrados
    handleSearch () {
        this.refresh( this.state.description )
    }

    // Método para limpar o filtro de busca
    handleClear () {
        this.refresh()
    }

    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={ this.state.description }
                    handleChange={ this.handleChange }
                    handleAdd={ this.handleAdd }
                    handleSearch={ this.handleSearch }
                    handleClear={ this.handleClear } />
                <TodoList 
                    list={ this.state.list } 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={ this.handleRemove } />
            </div>
        )
    }
}