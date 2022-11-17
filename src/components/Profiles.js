import React, {Component} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom"



const renderCard = props => {
   return (
    <>
      <Card style={{ width: '30rem', marginLeft:'auto', marginRight:'auto'}}>
      <Card.Body>
        <Card.Title>{props.username}</Card.Title>
        <Card.Text> {props.fullName}</Card.Text>
        <Card.Text> {props.email}</Card.Text>
        <Card.Text> {props.dob}</Card.Text>
        <Card.Text> {props.address}</Card.Text>
        <Card.Text> {props.company}</Card.Text>
        <Link to = {"/edit/"+ props._id}>
           <Button variant="info">Edit User </Button> 
        </Link>
        <Link to = {"/delete-user/"+ props._id}>
           <Button variant="danger">Delete User </Button> 
        </Link>
      </Card.Body>
    </Card>
    <br/>
    </>
    )
}


export default class Profiles extends Component {
   constructor(props) {
      super(props);
      
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
      axios.get('http://localhost:9998/users/')
        .then(response => {
          this.setState({ users: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
    render() {
      return (
      <div>
        <h1 style = {{marginLeft:'auto', marginRight:'auto'}}>List of Profiles</h1>
        <hr/>
      <div>{this.state.users.map(renderCard)}</div>
      </div>
      )
     }
}