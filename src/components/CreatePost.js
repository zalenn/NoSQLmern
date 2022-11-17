import React, {Component} from "react"
// import {Link} from "react-router-dom"
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreatePost extends Component {

   constructor(props) {
      super(props);

      this.onUsernameChange = this.onUsernameChange.bind(this);
      this.onTextChange = this.onTextChange.bind(this); 
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
         text: "",
         username: "",
         users: []
      }
   }

   componentDidMount() {
      axios.get('http://localhost:9998/users/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map(user => user.username),
              username: response.data[0].username
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }

   onUsernameChange(e) {
      this.setState({
         username: (e.target.value)
      })
   }

   onTextChange(e) {
      this.setState({
         text: e.target.value
      })
   }

   onSubmit(e) {
      e.preventDefault();

      const post = {
         username: this.state.username,
         text: this.state.text
      }

      console.log(post);
    
    
      axios.post('http://localhost:9998/posts/add', post)
      .then(res => console.log(res.data));


    this.setState({
      username: '',
      text: ''
    })

    window.location = '/';
   }

   render() {
      return (
       <Form style={{ width: '30rem', marginLeft:'auto', marginRight:'auto'}}>
          <h1>Create A New Post</h1> <br/>
          <Form.Label>Username</Form.Label>
         <Form.Select aria-label="User Select" onSelect = {this.onUsernameChange}> 
         {this.state.users.map(function(user) {
            return <option key = {user} value = {user}>
               {user}
            </option>
         }) }
         </Form.Select> <br/>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Insert Your Message</Form.Label>
           <Form.Control as="textarea" rows={3} onChange = {this.onTextChange} />
         </Form.Group>
         <Button variant="primary" type="submit" onClick = {this.onSubmit}>Submit</Button>
       </Form>
       );
   }
}



