import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class HomeView extends React.Component {
  state = {
    albums: []
  }

  componentDidMount() {
    axios.get('/api/albums').then(resp => {
      this.setState({
        albums: resp.data 
      })
    })
  }
  render() {
    return (
      <div className="main">
        <section className="title">
          <p>my music</p>
        </section>
          {this.state.albums.map(result => (
            <div className="album" key={result.id}>
              <Link to={"/"+ result.id}>
                <img src={result.image} alt="albumpic"></img>
                <p>{result.title}</p>
              </Link>
            </div>
          ))} 
      </div>
    )
  }
  
}

export default HomeView