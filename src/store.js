// Aqui vamos en encapsular el store de redux
import {createStore }  from 'redux'

// Si la funcion reducer se vuelve muy larga podemos  crear funciones de ayuda.


// definimos la funcion reductor que recibe dos parametros
// El estado actual y la accion que se quiere ejecutar
const reducer = (state, action) =>{
    if (action.type === "ADD_TO_CART"){
        return{
            ...state,
            cart: state.cart.concat(action.product)
        };
    }else if (action.type === "REMOVE_FROM_CART"){
        return{
            ...state,
            // ELIMUNAMOS EL PRODUCTO
            cart: state.cart.filter(product => product.id !== action.product.id)
        };
    }
    return state;
}
export default (createStore(reducer, {cart: []}))
