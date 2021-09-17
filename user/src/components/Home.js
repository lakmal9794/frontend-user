import React, { Component } from 'react';
import { Table,Grid, Segment, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {

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
        axios.get("/user")
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
            <div>
                
      <Segment>
        <Grid.Row columns={2}>
        <Grid.Column >
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>NIC Number</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.users.map((user, index)=>{
              return(
                <Table.Row key={index}>
                    
                        <Table.Cell>{index + 1}</Table.Cell>
                <a href={`/user/${user._id}`} style={{textDecoration:'none'}}>
                        <Table.Cell>{user.nic}</Table.Cell>
                </a>
                </Table.Row>
              )
              
            })}
          </Table.Body>
        </Table>
      </Grid.Column>
      <Grid.Column>

      </Grid.Column>
      </Grid.Row>
      <Segment>
           <Link to="/add_user">
                <Button fluid positive className="mt-5">Add New User</Button>
            </Link>
      </Segment>
      </Segment>
            </div>
        )
    }
}
