import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

/*
 * Action Creator para alterar a descrição
 * no campo de texto do formulário
*/
export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
}) 

/* 
 * Action Creator para fazer a busca no formulário
*/
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)

    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

/*
 * Action Creator para adicionar novas todos
*/
export const add = (description) => {
    return dispatch => {
        axios.post( URL, { description } )
             .then( resp => dispatch( { type: 'TODO_ADDED', payload: resp.data } ) )
             .then( resp => dispatch( search() ) )
    }
}