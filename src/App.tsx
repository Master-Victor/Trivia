import * as React from 'react';
import './App.css';
import { Route } from 'react-router'
import Login from './container/Login'
import Register from './container/Register'
import FormTrivia from './container/FormTrivia'
import Questions_1 from './components/questions/Questions_1'
import Questions_2 from './components/questions/Questions_2'
import Questions_3 from './components/questions/Questions_3'
import Questions_4 from './components/questions/Questions_4'
import Questions_5 from './components/questions/Questions_5'
import Questions_6 from './components/questions/Questions_6'
import Questions_7 from './components/questions/Questions_7'
import Questions_8 from './components/questions/Questions_8'
import Questions_9 from './components/questions/Questions_9'
import Questions_10 from './components/questions/Questions_10'
import Loading from './components/Loading'
import Result from './components/Result'
import {useSelector, useDispatch} from 'react-redux'
import {Redirect,Switch,Router} from "react-router-dom"
import history from './components/history'
import BackgroundAnimete from './components/BackgroundAnimete'
//import { createBrowserHistory } from 'history'

//const history = createBrowserHistory()


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
      loading: boolean
      siguiente: number
      ready: boolean
  },
}


function App() {

  const {ready} = useSelector((store :RootState) => store.preguntas)
  const PrivateRoute = ({component, ready, path, ...rest}: any) => {
    if( ready === true ){
      return <Route component={component} path={path} {...rest} />
    }else{
      return <Redirect to ='/Questions' {...rest} />
    }
};
    return (
        <div className="App">
          <BackgroundAnimete/>
          <Router history={history}>
            <Switch>
              <Route exact={true} path="/" component={Login} />         {/*le digo que en la raiz use el login */}
              <Route exact={true} path="/Trivia" component={Login} />         {/*le digo que en la raiz use el login */}
              <Route exact={true} path="/Register" component={Register} />         {/*le digo que en la raiz use el login */}
              <Route exact={true} path="/FormTrivia"  component={FormTrivia}/>
              <Route exact={true} path="/Questions"  component={Questions_1}/>
              <Route exact={true} path="/Questions_2"  component={Questions_2}/>
              <Route exact={true} path="/Questions_3"  component={Questions_3}/>
              <Route exact={true} path="/Questions_4"  component={Questions_4}/>
              <Route exact={true} path="/Questions_5"  component={Questions_5}/>
              <Route exact={true} path="/Questions_6"  component={Questions_6}/>
              <Route exact={true} path="/Questions_7"  component={Questions_7}/>
              <Route exact={true} path="/Questions_8"  component={Questions_8}/>
              <Route exact={true} path="/Questions_9"  component={Questions_9}/>
              <Route exact={true} path="/Questions_10"  component={Questions_10}/>
              <Route exact={true} path="/Result"  component={Result}/>
              <Route exact={true} path="/Loading"  component={Loading}/>
            </Switch>
          </Router>
        </div>
    );
}
export default App;
