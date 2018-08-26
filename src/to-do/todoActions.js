import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

/*
 * Action Creator para alterar a descrição
 * no campo de texto do formulário
 * Params: @event
*/
export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
}) 

/* 
 * Action Creator para fazer a busca no formulário
*/
export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
              .then( resp => dispatch( { type: 'TODO_SEARCHED', payload: resp.data } ) )
    }
}

/*
 * Action Creator para adicionar novas todos
 * Params: @description
*/
export const add = (description) => {
    return dispatch => {
        axios.post( URL, { description } )
             .then( resp => dispatch( clear() ) )
             .then( resp => dispatch( search() ) )
    }
}

/*
 * Action Creator para marcar como concluído
 * Params: @todo 
*/
export const markAsDone = (todo) => {
    return dispatch => {
        axios.put( `${URL}/${todo._id}`, { ...todo, done: true } )
             .then( resp => dispatch( search() ) )
    }
}

/*
 * Action Creator para marcar como pendente
 * Params: @todo 
*/
export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then( resp => dispatch( search() ) )
    }
}

/*
 * Action Creator para remover uma to-do
 * Params: @todo 
*/
export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then( resp => dispatch( search() ) )
    }
}

/*
 * Action Creator para limpar o formulário
 * Params: @todo 
*/
export const clear = (todo) => {
    return [{ type: 'TODO_CLEAR' }, search()]
}