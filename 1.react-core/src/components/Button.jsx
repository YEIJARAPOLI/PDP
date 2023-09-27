/* eslint-disable react/prop-types */
const Button = ( { title, value, funcion } ) => {
    return <button onClick={ () => funcion( value + 1 ) }>{ title } { value }</button>
}

export default Button;