import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default class EditProfile extends Component {

   constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeFullName = this.onChangeFullName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeDOB = this.onChangeDOB.bind(this);
      this.onChangeCompany = this.onChangeCompany.bind(this);
      this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      // this.deleteUser = this.deleteUser.bind(this)
  
      this.state = {
        id: '',
        username: '',
        email: '',
        fullName: '',
        company: '',
        dob: '',
        address: ''
      }
    }

    componentDidMount() {
      // TODO fix hard coded ID in URL
      axios.get('http://localhost:9998/users/' + window.location.href.slice(27,window.location.href.length))
        .then(response => {
          this.setState({
            id: response.data._id,
            username: response.data.username,
            email: response.data.email,
            fullName: response.data.fullName,
            dob: response.data.dob,
            company: response.data.company,
            address: response.data.address
          })   
        })
        .catch(function (error) {
          console.log(error);
        })
      }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }

    onChangeFullName(e) {
      this.setState({
        fullName: e.target.value
      })
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      })
    }
    onChangeCompany(e) {
      this.setState({
        company: e.target.value
      })
    }
    onChangeDOB(e) {
      this.setState({
        dob: e.target.value
      })
    }
    onChangeAddress(e) {
      this.setState({
        address: e.target.value
      })
    }

    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        email: this.state.email,
        fullName: this.state.fullName,
        company: this.state.company,
        dob: this.state.dob, 
        address: this.state.address
      }
  
      console.log(user);
  
      axios.post('http://localhost:9998/users/update/' + this.state.id, user)
        .then(res => console.log(res.data));
        
      this.setState({
        username: ''
      })

      window.location = '/';
    }

    render() {
      return (
         <Form style={{ width: '30rem', marginLeft:'auto', marginRight:'auto'}}>
         <h1>Edit Profile for ID:  {this.state.id} </h1> <br/>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
           <Form.Label>Current Username </Form.Label>
           <Form.Control type="textarea" placeholder= {this.state.username} onChange = {this.onChangeUsername} />
         </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Full Name</Form.Label>
           <Form.Control type="textarea" placeholder= {this.state.fullName} onChange = {this.onChangeFullName} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder= {this.state.email} onChange = {this.onChangeEmail} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
           <Form.Label>Date of Birth</Form.Label>
           <Form.Control type="date"  onChange = {this.onChangeDOB}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
           <Form.Label>Address</Form.Label>
           <Form.Control as="textarea" rows={2} placeholder= {this.state.address} onChange = {this.onChangeAddress} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Company</Form.Label>
           <Form.Control as="textarea" rows={1} placeholder= {this.state.company} onChange = {this.onChangeCompany} />
         </Form.Group>
         <Button variant="primary" type="submit" onClick = {this.onSubmit}>Submit</Button>
       </Form>
      
      )



   }
      

}