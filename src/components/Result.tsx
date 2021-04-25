import *as React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import'./CSS/resultCSS.css'
import {EnviarResultadosAccion, LeerResultadosAccion} from '../Redux/UsuarioDucks'
interface RootState{
    preguntas: {
        array:[{
            category: string,
            correct_answer: string,
            difficulty: string,
            incorrect_answers: string,
            question: string,
            type: string
        }]
        siguiente: number
        loading: boolean
        ready: boolean
    },
    usuario:{
        user:{
            uid: string,
            email: string,
        }
        usuarios:[
            {user: string,
            score: number}
        ]
        loading: boolean
    }
}

const Result = () => {
    const siguiente = useSelector((store :RootState) => store.preguntas.siguiente)
    let userName = useSelector((store: RootState) => store.usuario.user.uid)
    const email = useSelector((store: RootState) => store.usuario.user.email)
    const loading = useSelector((store: RootState) => store.usuario.loading)
    if(userName === null){
        userName=email
    }
    const dispatch = useDispatch()
    let letra = ''
    let color = ''
    let fondo = ''
    switch(siguiente){
        case 10:letra='F';color="secondary";fondo="gris";break;
        case 20:letra='E';color="danger";fondo="rojo";break;
        case 30:letra='E+';color="danger";fondo="rojo";break;
        case 40:letra='C';color="warning";fondo="amarillo";break;
        case 50:letra='C+';color="warning";fondo="amarillo";break;
        case 60:letra='B';color="primary";fondo="azul";break;
        case 70:letra='B+';color="primary";fondo="azul";break;
        case 80:letra='A';color="success";fondo="verde";break;
        case 90:letra='A+';color="success";fondo="verde";break;
        case 100:letra='A++';color="success";fondo="gris";break;
        default:letra='F-';color="secondary";fondo="gris";break;
    }
    React.useEffect( () => {
        const leer = async () => {
            await dispatch(EnviarResultadosAccion(userName,siguiente))
            await dispatch(LeerResultadosAccion())
        }
        leer()
    },[siguiente,userName])
    const resultadosAnteriores = useSelector((store: RootState) => store.usuario.usuarios)
    let i=1;
    return (!loading) ?(
        <div className="container d-flex justify-content-center mt-4">
            <div className="card p-3 mt-3">
                <h5 className="mt-3 mb-3">ScoreBoard</h5>
                <div className="border p-2 rounded d-flex flex-row align-items-center">
                    <div className={`p-1 px-4 d-flex flex-column align-items-center ${fondo} rounded`}> <span className={`d-block char text-${color}`}>{letra}</span> <span className={`text-${color}`}>{siguiente}%</span> </div>
                    <div className="ml-2 p-3">
                        <h6 className="heading1">{userName}</h6> <span>The average page score is {siguiente}</span>
                    </div>
                </div>
                <h6 className="mt-3 mb-3">Top</h6>
                {
                   resultadosAnteriores.map( (user) => 
                    <div className="border p-2 rounded d-flex flex-row align-items-center mt-2">
                        <div className="p-1 px-4 d-flex flex-column align-items-center speed rounded"> <span className="d-block char">{ i++ }</span></div>
                        <div className="ml-2 p-4">
                        <h6 className="text">{user.user}</h6> <span>The average score is {user.score}%</span>
                        </div>
                    </div>
                   ) 
                }
            </div>
        </div>
    ): <div> loading </div>
}

export default Result
