// Default imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Componentes imports
import Grid from '../template/grid'
import IconButton from '../template/icon-button'

// Action Creators imports
import { changeDescription, search, add } from './todoActions'

class TodoForm extends Component {
    // Construtor
    constructor (props) {
        super(props)

        // Binds
        this.keyHandler = this.keyHandler.bind(this)
    }

    /*
     * Método de ciclo de vida do componente
     * só pode ser usado por componentes de classe
    */
   componentWillMount () {
       this.props.search()
   }

    /*
     * Método para verificar qual foi ou quais foram as teclas pressionadas
     * e a partir de então, disparar os eventos correspondentes (HotKeys).
    */
    keyHandler (e) {
        // Extrai métodos e atributos, para facilitar a escrita
        // e não precisar ficar toda hora chamando 'this.nomedometodo'
        const { add, search, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        }
        else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render () {
        // Extrai métodos e atributos, para facilitar a escrita
        // e não precisar ficar toda hora chamando 'this.nomedometodo'
        const { add, search, description } = this.props

        return (
            <div role='form' className='todo-form'>
                <Grid cols='12 9 10'>
                    <input type="text" id='description' className='form-control' placeholder='Adicione uma tarefa'
                        value={ this.props.description }
                        onChange={ this.props.changeDescription }
                        onKeyUp={ this.keyHandler } />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={ () => add(description) }></IconButton>
                    <IconButton style='info' icon='search' onClick={ () => search() }></IconButton>
                    <IconButton style='default' icon='close' onClick={ this.props.handleClear }></IconButton>
                </Grid>
            </div>
        )
    }
}

/*
 * Método para mapear o estado do redux com as propriedades do objeto
*/
const mapStateToProps = state => ({ description: state.todo.description })

/*
 * Método para exportar o componente `to-do-list` porém agora decorado com todas as propriedades e atributos necessários
 * Faz o bind do nosso componente com as nossas actions creators
*/
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)