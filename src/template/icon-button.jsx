import React from 'react'

// O componente será um componente funcional
// Porém, esse componente ele terá uma renderização condicional (Hide ou Visible) de acordo com a necessidade
export default props => {
    if ( props.hide ) {
        return null
    }
    else {
        return (
            <button className={ 'btn btn-' + props.style } onClick={ props.onClick }>
                <i className={'fa fa-' + props.icon }></i>
            </button>
        )
    }
}