import *as React from 'react'
import Title from '../components/Title'
import LoginForm from '../components/LoginForm'
import Container from '../components/Container'
import {ingresoUsuarioActionGoogle, ingresoUsuarioActionFacebook} from '../Redux/UsuarioDucks'
import { useDispatch, useSelector } from 'react-redux'
import GoogleLoginButton from '../components/GoogleLoginButton'
import '../components/CSS/facebook.css'
import {Redirect,Switch,Router} from "react-router-dom"

interface RootState {
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
        },
        activo: boolean,
        loading: boolean
    }
  }



const Login =()=> {
        localStorage.setItem('ACTIVO',JSON.stringify('false'))
        const dispatch = useDispatch()
        const activo = useSelector((store: RootState) =>store.usuario.activo)
        return !activo ?(
            <div>
                <Container>
                    <fieldset>
                    <legend style={{padding: '30px'}} ><b>Login to your account</b></legend>
                    <LoginForm/>
                    </fieldset>
                    {/* <Title top="20vh">Welcome!</Title> */}
                    <h6>or</h6>
                    <button style={{border:'0px'}} onClick={ () => dispatch(ingresoUsuarioActionGoogle()) } ><GoogleLoginButton/></button>
                    <button onClick={ ()=> dispatch(ingresoUsuarioActionFacebook()) } className="loginBtn loginBtn--facebook">Sign in with Facebook</button>
                </Container>
            </div>
        ): <Redirect to='/FormTrivia'/>
}
export default Login
