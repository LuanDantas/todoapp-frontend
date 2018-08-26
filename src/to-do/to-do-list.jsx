import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/icon-button'

const TodoList = props => {

    // Função para renderizar as linhas da tabela
    const renderRows = () => {
        // Constante que irá armazenar a lista vinda pelas props
        // Caso a lista não seja passada pelas props (vazia), iremos setar esta constante como um array vazio
        // Para evitar erros
        const list = props.list || []

        return list.map( todo => (
            <tr key={ todo._id } >
                <td className={ todo.done ? 'marked-as-done' : '' }>{ todo.description }</td>
                <td>
                    <IconButton style='success' icon='check' hide={ todo.done } onClick={ () => props.handleMarkAsDone( todo ) }></IconButton>
                    <IconButton style='warning' icon='undo' hide={ !todo.done } onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton style='danger' icon='trash-o' onClick={ () => props.handleRemove( todo ) }></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='table-actions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}

/*
 * Método para mapear o estado do redux com as propriedades do objeto
*/
const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList)

/*
 * Método para exportar o componente `to-do-list` porém agora decorado com todas as propriedades e atributos necessários
*/