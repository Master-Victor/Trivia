import *as React from 'react'
import Title from '../components/Title'
import RegisterForm from '../components/RegisterForm'
import Container from '../components/Container'
export default class Register extends React.Component {
    public render() {
        return (
            <div>
                <Container>
 
                    <Title top="25vh" ><b>Create to your account</b></Title>
                    <RegisterForm/>
          
                </Container>
            </div>
        )
    }
}