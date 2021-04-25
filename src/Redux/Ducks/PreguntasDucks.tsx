import axios from 'axios'
import {AnyAction, Dispatch} from 'redux'

const dataInicial = {
    array: [],
    loading: false,
    ready: false,
    siguiente: 0,
    question : [],
    correct_answer: [],
    incorrect_answers: []
}

// types
const GET_PREGUNTA_SUCCESS = 'GET_PREGUNTA_SUCCESS'
const LOADING = 'LOADING'
const SIGUIENTE = 'SIGUIENTE'


export interface IData {
    [key: string]:{
        category: string
        dificultad:string
    }
}

export interface Data {
    array: [],
    loading: boolean,
    siguiente: number
}
// reducer
export default function preguntasReducer(state = dataInicial, action: AnyAction){
    switch(action.type){
        case LOADING:
            return {...state, loading: true}        
        case SIGUIENTE:
            return {...state, siguiente: action.payload.siguiente }
        case GET_PREGUNTA_SUCCESS:
            return {...state, array: action.payload, loading: false,ready: true}
        default:
            return state
    }
}

// actions
export const obtenerPreguntasAction = (data: IData) => async (dispatch: Dispatch) => {
    dispatch({
        type:LOADING
    })

    try {
        const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.dificultad}&type=multiple`)
        dispatch({
            type: GET_PREGUNTA_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const siguientePregunta = (result: Number) => (dispatch: Dispatch, getState: any) => {
    const {siguiente} = getState().preguntas
    const next = siguiente + result
    console.log(next)
    dispatch({
        type: SIGUIENTE,
        payload: {
            siguiente: next
        } 
    })
}
export const reorganizarPreguntasAccion = () => ( dispatch: Dispatch, getState: any ) => {
    const array  = getState().preguntas.array
    console.log('lo que tiene el category 1:',array)
    localStorage.setItem('ACTIVO',JSON.stringify('false'))
}