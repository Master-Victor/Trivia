import *as React from 'react'
import './CSS/loading.css'
import {Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import history from './history'
const style = {
        position:'absolute',
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%,-50%)',
} as React.CSSProperties


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
    },
    loading: boolean
    siguiente: number
    ready: boolean
  }


const Loading = () => {
    //const { ready } = useSelector((store :RootState) => store)

    return (
        <div style={style}>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        <Redirect to='/Questions'/>
        </div>
    )
}

export default Loading
