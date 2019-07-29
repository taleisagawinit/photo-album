import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import MultiView from './multiview'
import axios from 'axios'
import PictureView from './PictureView';

class AlbumView extends React.Component {
  
  state = {
    pictures: []
  }
  componentDidMount() {
    axios.get("/api/pictures").then(resp => {
      this.setState({
        pictures: resp.data
      })
    })
  }

  render() {
    return (
        <Router>
          <div className="main">
          <section className="title">
            <h2>{this.state.pictures.albumId}</h2>
          </section>
        {this.state.pictures.map(result => (
            <section className="picture" key={result.id}>
              <Link to={`/${result.albumId}/${result.id}`}>
                <MultiView
                    image={result.image}
                    title={result.title}
                />
              </Link>
              
            </section>

          ))}
        </div>
        </Router>
        
      
       
      
    )
  }

}  
 
export default AlbumView