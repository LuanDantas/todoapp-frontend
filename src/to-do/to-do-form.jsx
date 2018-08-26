// Default imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Componentes imports
import Grid from '../template/grid'
import IconButton from '../template/icon-button'

// Action Creators imports
import { changeDescription } from './todoActions'

const TodoForm = props => {
    // Método para verificar qual foi ou quais foram as teclas pressionadas
    // E a partir de então, disparar os eventos correspondentes
    const keyHandler = (e) => {
        if ( e.key === 'Enter' ) {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        else if ( e.key === 'Escape' ) {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todo-form'>
            <Grid cols='12 9 10'>
                <input type="text" id='description' className='form-control' placeholder='Adicione uma tarefa' 
                       value={ props.description } 
                       onChange={ props.changeDescription }
                       onKeyUp={ keyHandler } />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}

/*
 * Método para mapear o estado do redux com as propriedades do objeto
*/
const mapStateToProps = state => ({ description: state.todo.description })

/*
 * Método para exportar o componente `to-do-list` porém agora decorado com todas as propriedades e atributos necessários
 * Faz o bind do nosso componente com as nossas actions creators
*/
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)