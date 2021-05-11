import *as React from 'react'
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import {RegisterUsuarioActionEmail} from '../Redux/UsuarioDucks'
import {useDispatch, useSelector} from 'react-redux'
import history from './history'
interface IdataRegister{
    email: string
    password: string
    passwordA: string
}
interface RootStateUser{
    loading: boolean
    activo: boolean
}

const RegisterForm = () => {
        const dispatch = useDispatch()
        const { register, handleSubmit } = useForm();
        const activo = useSelector((store :RootStateUser) => store.activo)
        const onSubmit = async (data :IdataRegister ) =>{
            if((data.password === data.passwordA)){
                if(data.password.length >= 6){
                    await dispatch(RegisterUsuarioActionEmail(data))
                    history.push('/FormTrivia')
                }else{
                    alert('password must contain at least 6 characters ')
                }
            }else{
                alert('Passwords do not match')
            }
        }
        return(
            <Form style={{padding: '10px'}} onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><h5>Email address</h5></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register('email')}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label><h5>Password</h5></Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('password')}/>
                <Form.Label><h5>Again Password</h5></Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('passwordA')}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register!
            </Button>
            <div style={{display: 'inline', padding: '10px'}}>
            <Button variant="primary" type="submit">
                <Link to="/" style={{color:'white', textDecoration: 'none'}}>Go Login!</Link>
            </Button>
            </div>
            </Form>
        )
}
export default RegisterForm