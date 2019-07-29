import React from 'react'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react'
import data from './default.json'


class PictureView extends React.Component {
  // state = {
  //     image: '',
  //     title:''
  // }

  // getContact = (id) => {
  //     const pic = data.pictures.find(result => id == result.id)
  //     this.setState({
  //         image: pic.image,
  //         title: pic.title
  //     })
  // }

  // componentDidMount() {
  //     this.getContact(this.props.match.params.id)
  // }

  render() {
    return (
      <div className="singlePic">
        <section className="title">
          <h2>picture 1</h2>
        </section>
        <Link to={`/`}>
          <MaterialIcon icon="arrow_back" size='medium' color='#000'/>
       </Link>
        <section> 
          <img src="http://placehold.it/600"/>
        </section>
        
      </div>
    )
  }
}

export default PictureView