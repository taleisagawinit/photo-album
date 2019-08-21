import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import HomeView from './HomeView'
import Albums from './Albums'
import PictureView from './PictureView';

const App = (props) => (
  <Router>
    <div id="container">
      <Route exact path="/" component={HomeView} />
      <Route exact path="/:id" component={Albums} />
      <Route exact path="/photo/:id" component={PictureView} />
    </div>
  </Router>
  
)

export default App