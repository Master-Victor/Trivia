import *as React from 'react'
import Title from '../components/Title'
import RegisterForm from '../components/RegisterForm'
import Container from '../components/Container'
import '../App.css'
export default class Register extends React.Component {
    public render() {
        return (
            <Container>
                <div className="box">
                    <div className="buttom" style={{transform: 'skew(0deg, -5deg)'}} >    
                        <Title top="25vh" ><h5>Create to your account</h5></Title>
                        <RegisterForm/>
                    </div>
                </div>
            </Container>
        )
    }
}