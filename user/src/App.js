import axios from 'axios';
import React, { Component } from 'react';
import { Table,Grid, Segment, Button } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import UserDetails from './components/UserDetails';

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      users:[]
    };
  }
  componentDidMount(){
  this.retriveUsers();
  }

  retriveUsers(){
    axios.get("http://localhost:8001/user")
    .then(res =>{
      if(res.data.success){
        this.setState({
          users:res.data.existingUsers
        })
        console.log(this.state.users);
      }
    })
  }
  render() {

    return (
      <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/user/:id" exact component={UserDetails}></Route>
      <Route path="/add_user" exact component={CreateUser}></Route>
      </BrowserRouter>
      
        
    )
  }
}

