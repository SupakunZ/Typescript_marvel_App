import { Route, Switch } from 'wouter'
import './App.css'

//Componnts
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Heroes } from './pages/Heroes'
import HeroesDetail from './pages/HeroDetail'


function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/heroes/:heroesName" component={HeroesDetail} />
      </Switch>
    </>
  )
}

export default App
