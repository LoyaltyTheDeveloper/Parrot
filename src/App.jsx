import react from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Body}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/homepage" component={HomePage}/>
      </Switch>
      </Router>
    </>
  )
}

export default App
