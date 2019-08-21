import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class HomeView extends React.Component {
  state = {
    albumName: '',
    pictures: [],
    albums:[]
  }

  componentDidMount() {
    axios.get('/api/albums/'+ this.props.match.params.id + '?_embed=pictures').then(resp => {
      this.setState({
        albumName: resp.data.title,
        pictures: resp.data.pictures
      })
    })

    axios.get('/api/albums').then(resp => {
      this.setState({
        albums: resp.data
      })
    })

    
  }

  componentWillReceiveProps(newProps) {
    axios.get("/api/albums/" + newProps.match.params.id + '?_embed=pictures').then(resp2 => {
      this.setState({
        albumName: resp2.data.title,
        pictures: resp2.data.pictures
      })
    }) 
  }  
  render() {
    return (
      <div className="albumView">
        <div className="navbar">
          <ul>
            <li><Link to="/">home</Link></li>
            {this.state.albums.map(result => <li key={result.title}><Link to={"/"+result.id}>{result.title}</Link></li>)}
          </ul>
        </div>
        <div className="main">
          <section className="title">
            <p>{this.state.albumName}</p>
          </section>
            {this.state.pictures.map(result => (
              <div className="single" key={result.id}>
                <Link to={"/photo/"+ result.id}>
                  <img src={result.image} alt="albumpic"></img>
                  <p>{result.title}</p>
                </Link>
              </div>
            ))} 
        </div>  
      </div>
      
    )
  }
  
}

export default HomeView