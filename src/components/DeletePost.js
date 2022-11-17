import React, {Component} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom"
// import {Link} from "react-router-dom"

// https://www.youtube.com/watch?v=IhWFs0diAPE


export default class DeletePost extends Component {

  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this)

    this.state = {
      postedBy: '',
      username: '',
      text: '',
      _id: '',
      posts: []
    };
  }

  componentDidMount() {

    axios.get('http://localhost:9998/posts/' + window.location.href.slice(34,window.location.href.length))
      .then(response => {
        this.setState({ 
            _id: response.data._id,
            username: response.data.username,
            text: response.data.text,
            posts: response.data
         })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePost(id) {
    axios.delete('http://localhost:9998/posts/'+ this.state._id)
      .then(response => { console.log(response.data)});
       window.location = '/';

    this.setState({
      posts: this.state.posts.filter(element => element._id !== id)
    })
   
  }

   render() {
    return (
        <>
          <Card style={{ width: '30rem', marginLeft:'auto', marginRight:'auto'}}>
          <Card.Body>
            <Card.Title>{this.state.username} says: </Card.Title>
            <Card.Text> {this.state.text}</Card.Text>
            <Card.Text> <strong>Are you sure you want to delete this post?</strong></Card.Text>
            <Button variant="danger" onClick = {() => {this.deletePost(this.state._id)}}>Delete Post</Button>{' '}
          </Card.Body>
        </Card>
        <br/>
        </>
        )
   }
}
