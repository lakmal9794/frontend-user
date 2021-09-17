import React, { Component } from 'react'
import axios from 'axios';
import { Segment, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class UserDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            user:{}
        };
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/user/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    user:res.data.user
                });
                console.log(this.state.user)
            }
        })
    }
    render() {
        const {username, email, nic} = this.state.user;
        return (
            <div>
                <Segment>
                    <Table color={'green'} positive inverted>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>User Name</Table.Cell>
                            <Table.Cell>{username}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Email</Table.Cell>
                            <Table.Cell>{email}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>NIC</Table.Cell>
                            <Table.Cell>{nic}</Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
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
