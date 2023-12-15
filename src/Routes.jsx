import { Routes as Router, Route } from 'react-router-dom'
import { GamePage, Home } from './components'

function Routes() {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route exact path='/details/:id' element={<GamePage />} />
    </Router>
  )
}

export default Routes