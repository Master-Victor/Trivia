import {auth, firebase,db} from '../firebase'
import {AnyAction, Dispatch} from 'redux'


//Initial Data

const dataInitial = {
    loading: false,
    activo: false
}
interface dataEmailLogin {
    email: string
    password: string
} 
//type
const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'
const USUARIO_EXITO = 'USUARIO_EXITO'
const CERRAR_SESION = 'CERRAR_SESION'   //podriamos usar el type de usuario error pero para que me aparezca en la extension del navegador usamos esto
const LEER_RESULTADOS_EXITO = 'LEER_RESULTADOS_EXITO'
const CARGAR_RESULTADOS_EXITO = 'CARGAR_RESULTADOS_EXITO'
//reducer

export default function usuarioReducer(state = dataInitial, action: AnyAction){
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
        case USUARIO_ERROR:
            return {...dataInitial}
        case USUARIO_EXITO:
            return {...state, loading: false, activo: true, user: action.payload.user}
        case CERRAR_SESION:
                return {...dataInitial}    
        case LEER_RESULTADOS_EXITO:
            return {...state,loading: false,usuarios: action.payload.usuarios}
        default:
            return {...state}
    }
}

//action

export const RegisterUsuarioActionEmail = (data :dataEmailLogin) => async( dispatch: Dispatch ) =>{
    dispatch({
        type:LOADING
    })
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password);
        const user = res.user ? res.user.displayName :undefined
        const email = res.user ? res.user.email :undefined
        dispatch({
            type: USUARIO_EXITO,
            payload: {
                user: {
                    uid: user,
                    email: email
                }
            }
        })
        localStorage.setItem('usuario', JSON.stringify({
            uid: user,
            email: email
        }))
    }catch(error){
        console.log(error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}
export const ingresoUsuarioActionEmail = (data :dataEmailLogin) => async( dispatch: Dispatch ) =>{
    dispatch({
        type:LOADING
    })
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(data.email,data.password);
        //const res = await auth.signInWithPopup(provider)
        console.log(res)
        const user = res.user ? res.user.displayName :undefined
        const email = res.user ? res.user.email :undefined
        dispatch({
            type: USUARIO_EXITO,
            payload: {
                user: {
                    uid: user,
                    email: email
                }
            }
        })
        localStorage.setItem('usuario', JSON.stringify({
            uid: user,
            email: email
        }))
    }catch(error){
        console.log(error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}


export const ingresoUsuarioActionGoogle = () => async( dispatch: Dispatch ) =>{
    dispatch({
        type:LOADING
    })
    try{
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)
        console.log(res)
        const user = res.user ? res.user.displayName :undefined
        const email = res.user ? res.user.email :undefined
        dispatch({
            type: USUARIO_EXITO,
            payload: {
                user: {
                    uid: user,
                    email: email
                }
            }
        })
        localStorage.setItem('usuario', JSON.stringify({
            uid: user,
            email: email
        }))
    }catch(error){
        console.log(error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}

export const ingresoUsuarioActionFacebook = () => async( dispatch: Dispatch ) =>{
    dispatch({
        type:LOADING
    })
    try{
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        const res = await auth.signInWithPopup(facebookProvider)
        console.log(res)
        const user = res.user ? res.user.displayName :undefined
        const email = res.user ? res.user.email :undefined
        dispatch({
            type: USUARIO_EXITO,
            payload: {
                user: {
                    uid: user,
                    email: email
                }
            }
        })
        localStorage.setItem('usuario', JSON.stringify({
            uid: user,
            email: email
        }))
    }catch(error){
        console.log('tuve un error:',error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}

export const  leerUsuarioActivoAccion = () => (dispatch: Dispatch) =>{
    if(localStorage.getItem('usuario')){
        dispatch({
            type:USUARIO_EXITO,
            payload: ''//JSON.parse(localStorage.getItem('usuario'))
        })
    }
}

export const cerrarSesionAccion = () => (dispatch:Dispatch) => {
    auth.signOut()
    localStorage.removeItem('usuario')
    dispatch({
        type: CERRAR_SESION
    })
}

export const EnviarResultadosAccion = (user: string,score: number) => async (dispatch:Dispatch) => {
    const res = await db.collection('Results').doc().set({user,score});
    try{
        console.log('actualizada base de datos')
    }catch(error){
        console.log('tuve un error:',error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}
interface USUARIOFIREBASE{
    user: string
    score: number
}
export const LeerResultadosAccion = () => async ( dispatch:Dispatch ) => {
        await db.collection("Results")
        .onSnapshot((querySnapshot) => {
            const docs:any = [];
            querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(),id:doc.id});
            });
            docs.sort( function (a: any, b:any) {  return (-a.score + b.score) })
            dispatch({
                type: LEER_RESULTADOS_EXITO,
                payload: {
                    usuarios: docs
                }
            })
        });
}