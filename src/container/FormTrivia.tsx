import *as React from 'react'
import Container from '../components/Container'
import SimpleSelect from '../components/SimpleSelect'
import {useSelector} from 'react-redux'
import history from '../components/history'

interface RootStateUser{
    usuario:
    {
    loading: boolean
    activo: boolean
    }
}

 const FormTrivia = () =>{
    const activo = useSelector((store :RootStateUser)=> store.usuario.activo)
    React.useEffect(() => {
        if(!activo){
            history.push('/')
        }
    },[activo])
        return (
            <Container>
                <SimpleSelect/>
            </Container>
        )
}

export default FormTrivia