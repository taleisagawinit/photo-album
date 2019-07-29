import React from 'react'
import Nav from './nav'
import data from './default.json'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react'

class NavBar extends React.Component {

  render() {
    return (
      <nav className="homeNavBar">
        <Link to ="/">
          <MaterialIcon icon="arrow_back" size='large' color='#000'/>
        </Link>
        <ul>
            {data.albums.map(result => (
              <li key={result.id}>
                <Link to={"/" + result.id}> 
                <Nav 
                    albumTitle={result.title}
                />
                </Link>
            </li>
            ))}
        </ul>
      </nav>





    )
  }
}

export default NavBar


