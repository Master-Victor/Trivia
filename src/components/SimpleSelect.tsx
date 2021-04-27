import * as React from "react"
import { useForm} from "react-hook-form"
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import history from './history'
// importamos la acción
import {obtenerPreguntasAction, IData} from '../Redux/Ducks/PreguntasDucks'
const style = {
      'width': '400px',
      'padding':'10px',
      'position':'absolute',
      'top': '50%', 
      'left': '50%',
      'transform': 'translate(-50%,-50%)',  
      'border': '1px solid rgb(211,211,211)',
      'borderRadius': '2%',
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
  ready:boolean
}


export default function SimpleSelect(){
  const dispatch = useDispatch()
  const loading = useSelector((store :RootState) => store.loading)
  const ready = useSelector((store :RootState) => store.ready)
  //const preguntas = useSelector(store => store.preguntas.array)
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data :IData) => {
      await dispatch(obtenerPreguntasAction(data))
      history.push('/Loading')

  };
  return(
    <div>
     <form onSubmit={handleSubmit(onSubmit)} style={{}}>
      <select {...register("category")} style={{width: '200px'}} >
        <option value=''>Category...</option>    
        <option value='9'>General Knowledge</option>  
        <option value='10'>Entertainment: Books</option>
        <option value='11'>Entertainment: Film</option>
        <option value='15'>Entertainment: Video Games</option>
      </select>
      <select {...register("dificultad")} style={{width: '200px'}} >
          <option value=''>Difficulty...</option>
          <option value='easy' >Easy</option>
          <option value='medium' >Medium</option>
          <option value='hard' >Hard</option>
      </select>
      <input type="submit" style={{width: '200px'}}/>
    </form>
    </div>
  )
}
