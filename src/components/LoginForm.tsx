import *as React from 'react'
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import {ingresoUsuarioActionEmail} from '../Redux/UsuarioDucks'
import {useDispatch} from 'react-redux'
import history from './history'

interface IdataRegister{
    email: string
    password: string
    passwordA: string
}

const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch()

    const onSubmit = async (data: IdataRegister) =>{
        await dispatch(ingresoUsuarioActionEmail(data))
        history.push('/FormTrivia')
    }
        return (
            <Form style={{padding: '10px'}} onSubmit={handleSubmit(onSubmit)} >
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
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <div style={{display: 'inline', padding: '10px'}}>
            <Button variant="primary" type="submit">
                <Link to="/Register" style={{color:'white', textDecoration: 'none'}}>Register</Link>
            </Button>
            </div>
            </Form>
        )
}

export default LoginForm
