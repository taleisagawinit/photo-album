import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import HomeView from './HomeView'
import AlbumView from './AlbumView'
import NavBar from './NavBar'
import PictureView from './PictureView'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div id="container">
          <Route exact path="/" component={HomeView} />
          <Route exact path="/:id" component={AlbumView} />
          <Route path="/:id/:id" component={PictureView} /> 
          <NavBar />
        </div>
      </Router>

    )
  }
}

export default App