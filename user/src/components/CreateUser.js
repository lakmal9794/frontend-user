import React, { Component } from 'react'
import { Card, Segment, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            nic:""
        }
    }
    handleInput =(e)=>{
        const {name, value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const {username, email, nic} = this.state;
        const data ={
            username:username,
            email:email,
            nic:nic
        }
        axios.post("/user/save",data).then((res)=>{
            if(res.data.success){
                this.setState({
                    username:"",
                    email:"",
                    nic:""
                })
            }
        })
    }
    render() {
        return (
            <div style={{alignContent:'center'}}>
                <Segment >
                <Form>
                    <Form.Field>
                    <label>User Name</label>
                    <input placeholder='User Name'
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInput}/>
                    </Form.Field>
                    <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' 
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>NIC</label>
                    <input placeholder='NIC' 
                    type="text"
                    name="nic"
                    limit={10}
                    value={this.state.nic}
                    onChange={this.handleInput} />
                    </Form.Field>
                    <Button primary type='submit' onClick={this.onSubmit}>Submit</Button>
                </Form>
                <Segment>
                        <Link to="/">
                        <Button fluid primary>Go Back</Button>
                        </Link>
                    </Segment>
                </Segment>
                
            </div>
        )
    }
}
