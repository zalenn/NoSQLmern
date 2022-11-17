import React, {Component} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom"
// import {Link} from "react-router-dom"

// https://www.youtube.com/watch?v=IhWFs0diAPE


const renderCard = props => {
   return (
    <>
      <Card style={{ width: '30rem', marginLeft:'auto', marginRight:'auto'}}>
      <Card.Body>
        <Card.Title>{props.username} says: </Card.Title>
        <Card.Text> {props.text}</Card.Text>
       <Link to = {"/edit/"+ props._id}>
        <Button style={{marginRight: '10px'}} variant="secondary">Edit {props.username}'s Profile</Button>
       </Link>
       <Link to = {"/delete-post/"+ props._id}>
        <Button style={{marginRight: '10px'}} variant="danger">Delete Post</Button>
       </Link>
      </Card.Body>
    </Card>
    <br/>
    </>
    )
}
export default class Feed extends Component {

  constructor(props) {
    super(props);


    this.state = {
      postedBy: '',
      username: '',
      text: '',
      _id: '',
      posts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:9998/posts/')
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }



   render() {
    return (
    <div>
      <h1 style = {{marginLeft:'auto', marginRight:'auto'}}>Home</h1>
      <hr/>
    <div>{this.state.posts.map(renderCard)} </div> 
    </div>
    )
   }
}
