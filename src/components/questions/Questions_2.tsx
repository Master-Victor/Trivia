import *as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {siguientePregunta, reorganizarPreguntasAccion} from '../../Redux/Ducks/PreguntasDucks'
import history from '../history'


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
    border: '1px solid rgb(211,211,211)',
    borderRadius: '2%'
} as React.CSSProperties

const Questions_2 = () => {
    const preguntas = useSelector((store :RootState) => store.preguntas.array)
    const dispatch = useDispatch()
    const question  = preguntas.map( item => item.question )
    const correct_answer =  preguntas.map( item => item.correct_answer)
    const incorrect_answers = preguntas.map( item => item.incorrect_answers)
    const Lugar = Math.floor(Math.random() * (3 - 0)) + 0
    const preguntaRespuesta = (result: boolean) =>{
        if(result){
            dispatch(siguientePregunta(10))
            console.log('correcto')
        }else{
            dispatch(siguientePregunta(-10))
            console.log('Incorrecta')
        }
        history.push('/Questions_3')
    }
    console.log(Lugar)
    switch(Lugar) {
        case 0:  
            return <div style={style}>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-uppercase mb-5">{question[1]}</h3>
                        <button className="btn btn-dark ml-4 mt-5" type="submit" value="true" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(true)} } >{correct_answer[1]}</button>
                        <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][0]}</button>
                        <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][1]}</button>
                        <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][2]}</button>
                    </div>
                </div>     
            </div>
        case 1:
            return <div style={style}>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-uppercase mb-5">{question[1]}</h3>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][0]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="true" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(true)} } >{correct_answer[1]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][1]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][2]}</button>
                </div>
            </div>     
        </div>
        case 2:
            return  <div style={style}>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-uppercase mb-5">{question[1]}</h3>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][0]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][1]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="true" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(true)} } >{correct_answer[1]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][2]}</button>
                </div>
            </div>     
        </div>
        case 3:    
            return  <div style={style}>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-uppercase mb-5">{question[1]}</h3>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][0]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][1]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="false" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(false)} }>{incorrect_answers[1][2]}</button>
                    <button className="btn btn-dark ml-4 mt-5" type="submit" value="true" name={correct_answer[1]} onClick={ () => {preguntaRespuesta(true)} } >{correct_answer[1]}</button>
                </div>
            </div>     
        </div>
        default:
            return <div>error 404</div>           
    }
}

export default Questions_2
