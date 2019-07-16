import React, {Component } from 'react';
import Paste from '../components/Paste'
import FormLayout from '../components/Form'

import axios from 'axios';


export default  class PastiesList extends Component{

    state = {
        pasties:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    pasties: res.data
                });
                console.log(res.data);
            })
    }
    render(){
        return(
            <div>
            <Paste data={this.state.pasties}/>
            <hr/>
            <h2>Create new Pastei</h2>
            <FormLayout requestType="post" articleID={null} btnText="Create" />

            </div>

        );
    }
}
