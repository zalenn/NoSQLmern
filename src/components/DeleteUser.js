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

    this.deleteUser = this.deleteUser.bind(this)

    this.state = {
        _id: '',
        username: '',
        email: '',
        fullName: '',
        company: '',
        dob: '',
        address: '',
        users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:9998/users/' + window.location.href.slice(34,window.location.href.length))
      .then(response => {
        this.setState({ 
            _id: response.data._id,
            username: response.data.username,
            email: response.data.email,
            fullName: response.data.fullName,
            dob: response.data.dob,
            company: response.data.company,
            address: response.data.address,
            users: response.data
         })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:9998/users/'+ this.state._id)
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
            <Card.Title>{this.state.username}</Card.Title>
            <Card.Text> {this.state.fullName}</Card.Text>
            <Card.Text> {this.state.email}</Card.Text>
            <Card.Text> {this.state.dob}</Card.Text>
            <Card.Text> {this.state.address}</Card.Text>
            <Card.Text> {this.state.company}</Card.Text>
            <Card.Text> <strong>Are you sure you want to delete this account?</strong></Card.Text>
            <Button variant="danger" onClick = {() => {this.deleteUser(this.state._id)}}>Delete User</Button>{' '}
          </Card.Body>
        </Card>
        <br/>
        </>
        )
   }
}
