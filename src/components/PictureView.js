import React from 'react'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react'
import axios from 'axios'


class PictureView extends React.Component {

  state = {
    picture: {
      image: '',
      title: '',
      id: '',
      albumId: ''
    }
  }

  componentDidMount() {
    axios.get('/api/pictures/'+ this.props.match.params.id).then(resp => {
      this.setState({
        picture: {
          image: resp.data.image,
          title: resp.data.title,
          id: resp.data.id,
          albumId: resp.data.albumId
        }
      })
    })

  }

  
  render() {
    return (
      <div className="main">
        <section className="title">
          <p>{this.state.picture.title}</p>
        </section>
        <div className="photo">
          <Link className="link" to={"/" + this.state.picture.albumId}>
            <MaterialIcon icon="arrow_back" size='medium' color='#000'/>
          </Link>
          <section>
            <img src={this.state.picture.image} alt="albumpic"></img> 
          </section>
        </div>
      </div>  
    )
  }
}

export default PictureView


