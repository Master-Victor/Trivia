import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import preguntasReducer from './Ducks/PreguntasDucks'
import usuarioReducer from './UsuarioDucks'
//para que funcione el __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
//-----------------------------------------------------------
const rootReducer = combineReducers({
    preguntas: preguntasReducer,
    usuario: usuarioReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}