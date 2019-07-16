import React, {Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

import {Card, Button, Form} from 'antd';

import FormLayout from '../components/Form'

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

class PastyDetail extends Component{

    state = {
        pasty:{}
    }

    componentDidMount(){
        const id = this.props.match.params.pasteId;
        console.log(id);
        axios.get(`http://127.0.0.1:8000/api/${id}`)
            .then(res => {
                this.setState({
                    pasty: res.data
                });
                console.log(res.data);
                console.log(this.state.pasty.title);
                console.log(this.props.token);
            })
            .catch(() => {
                console.log("Can’t access ")
                
            })

    }


    handleDelete = (event) => {
        const id = this.props.match.params.pasteId;
        event.preventDefault();
         axios.delete(`http://127.0.0.1:8000/api/${id}/delete`)
         this.props.history.push('/')

      }
    render(){
        return(

            <div>

            <Form onSubmit={this.handleDelete}>
                <Button type='danger' htmlType='submit'>Delete</Button>
            </Form>
            <Card title={this.state.pasty.title}>
                <div>
                    {this.state.pasty.content}
                </div>

            </Card>
            <br/>
            <Card title='Edit your Pastie'> 
            <FormLayout 
                requestType="put" 
                pasteId={this.props.match.params.pasteId} 
                btnText="Edit" />
            </Card>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
  }
  
export default withRouter(connect(null, mapDispatchToProps)(PastyDetail));
  