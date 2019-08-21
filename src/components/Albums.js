import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class HomeView extends React.Component {
  state = {
    albumName: '',
    pictures: []
  }

  componentDidMount() {
    axios.get('/api/albums/'+ this.props.match.params.id + '?_embed=pictures').then(resp => {
      this.setState({
        albumName: resp.data.title,
        pictures: resp.data.pictures
      })
    })
  }
  render() {
    return (
      <div className="main">
        <section className="title">
          <h2>{this.state.albumName}</h2>
        </section>
          {this.state.pictures.map(result => (
            <div className="picture" key={result.id}>
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