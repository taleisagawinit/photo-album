import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react'

class NavBar extends React.Component {
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

  componentWillReceiveProps(newProps) {
    axios.get('/api/albums').then(resp => {
      this.setState({
        albums: resp.data 
      })
    })
  }

  render() {
    return (
      <nav className="homeNavBar">
        <Link to ="/">
          <MaterialIcon icon="home" size='medium' color='#000'/>
        </Link>
        <ul>
            {this.state.albums.map(result => (
              <li key={result.id}>
                <Link to={"/" + result.id}> 
                  <div>
                    {result.title}
                  </div>
                </Link>
            </li>
            ))}
        </ul>
      </nav>





    )
  }
}

export default NavBar


