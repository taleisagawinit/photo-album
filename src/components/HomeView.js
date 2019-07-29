import React from 'react'
import data from './default.json'
import MultiView from './multiview.js'
import { Link } from 'react-router-dom'

class HomeView extends React.Component {
  render() {
    return (
      <div className="main">
        <section className="title">
          <h2>my music</h2>
        </section>
          {data.albums.map(result => (
           
              <section className="album" key={result.id}>
                  <MultiView 
                      image={result.image}
                      title={result.title}
                  />
              </section>
            
            ))}
            
      </div>
    )
  }
  
}

export default HomeView