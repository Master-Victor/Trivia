import {auth, firebase,db} from '../firebase'
import {AnyAction, Dispatch} from 'redux'


//Initial Data

const dataInitial = {
    score: 0,
    user: ''
}
interface IResult{
    score: number
    user: string
}
//type
const CARGA_ERROR = 'USUARIO_ERROR'
const CARGA_EXITO = 'USUARIO_EXITO'
//reducer

export default function usuarioReducer(state= dataInitial, action: AnyAction){
    switch (action.type) {
        case CARGA_EXITO:
            return {...state, loading: true}
        case CARGA_ERROR:
            return {...dataInitial}  
        default:
            return {...state}
    }
}

//action
export const cargarRespuestaAccion = (user: string,score: number) => async (dispatch: Dispatch, getState: any) => {
    //console.log(result)
    try {
        const res = await db.collection('Results').doc().set({user,score});
        dispatch({
            type: CARGA_EXITO,
        })
    } catch (error) {
        console.log(error)
    }
}