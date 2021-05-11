import *as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {siguientePregunta, reorganizarPreguntasAccion} from '../../Redux/Ducks/PreguntasDucks'
import Letter from '../Letter'

import history from '../history'
import '../CSS/cardStyle.css'

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

const style ={
    position:'absolute',
    top: '50%', 
    left: '50%',
    transform: 'translate(-50%,-50%)',  
    border: '0px',
} as React.CSSProperties


const Questions_1 = () => {
    const preguntas = useSelector((store :RootState) => store.preguntas.array)
    const dispatch = useDispatch()
    const question  = preguntas.map( item => item.question )
    const correct_answer =  preguntas.map( item => item.correct_answer)
    const incorrect_answers = preguntas.map( item => item.incorrect_answers)
    let Lugar = Math.floor(Math.random() * (3 - 0)) + 0
    const preguntaRespuesta = (result: boolean) =>{
        if(result){
            dispatch(siguientePregunta(10))
            console.log('correcto')
        }else{
            dispatch(siguientePregunta(-10))
            console.log('Incorrecta')
        }
        history.push('/Questions_2')
    }
    console.log(Lugar)
    Lugar = 2
    switch(Lugar) {
        case 0:  
            return <div style={style}>
                <div className="titleStyle">
                    <div style={{transform: 'skew(0deg, -5deg)',flex: 1}} >
                        <h3 className="card-title text-uppercase ">{question[0]}</h3>
                        <button className="btn btn-dark" style={{flex: 1}} type="submit" value="true" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(true)} } >{correct_answer[0]}</button>
                        <button className="btn btn-dark" style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][1]}</button>
                        <button className="btn btn-dark" style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][2]}</button>
                        <button className="btn btn-dark" style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][2]}</button>
                    </div>
                </div>     
            </div>
        case 1:
            return <div style={style}>
            <div className="titleStyle">
                <div style={{transform: 'skew(0deg, -5deg)', flex: 1}} >
                    <h3 className="card-title text-uppercase ">{question[0]}</h3>
                    <button className="btn btn-dark " style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][1]}</button>
                    <button className="btn btn-dark " style={{flex: 1}} type="submit" value="true" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(true)} } >{correct_answer[0]}</button>
                    <button className="btn btn-dark " style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][2]}</button>
                    <button className="btn btn-dark " style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][0]}</button>
                </div>
            </div>     
        </div>
        case 2:
            return  <div style={style}>
            <div className="titleStyle">
                <div style={{transform: 'skew(0deg, -5deg)'}} className="grid-container" >
                    <Letter>{question[0]}</Letter>
                    <button className=" btn-dark mt-4 ml-4 pregunta-1 boton" type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][1]}</button>
                    <button className=" boton btn-dark mt-4 ml-4 pregunta-2" type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][2]}</button>
                    <button className=" boton btn-dark mt-4 ml-4 pregunta-3" type="submit" value="true" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(true)} } >{correct_answer[0]}</button>
                    <button className=" boton btn-dark mt-4 ml-4 pregunta-4" type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][2]}</button>
                </div>
            </div>     
        </div>
        case 3:    
            return  <div style={style}>
            <div className="titleStyle">
                <div style={{transform: 'skew(0deg, -5deg)', flex: 1}} >
                    <h3 className="card-title text-uppercase ">{question[0]}</h3>
                    <button className="btn btn-dark" style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][1]}</button>
                    <button className="btn btn-dark" style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][2]}</button>
                    <button className="btn btn-dark" style={{flex: 1}} type="submit" value="false" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[0][2]}</button>
                    <button className="btn btn-dark" style={{flex: 1}} type="submit" value="true" name={correct_answer[0]} onClick={ () => {preguntaRespuesta(true)} } >{correct_answer[0]}</button>
                </div>
            </div>     
        </div>
        default:
            return <div>error 404</div>           
    }
}

export default Questions_1
