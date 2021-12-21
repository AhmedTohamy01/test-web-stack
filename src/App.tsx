import MainPage from './Pages/MainPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/limit=*'>
          <MainPage />
        </Route>
        <Route path='/'>
          <Redirect to={{ pathname: '/limit=6' }} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
