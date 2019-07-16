import React, {Component} from 'react';
import { Form, Input, Menu, Dropdown, Button, Icon, message } from 'antd';

import axios from 'axios';
//import { connect } from "react-redux";
import { withRouter } from "react-router";


const { TextArea } = Input;
const FormItem = Form.Item;

class FormLayout extends Component {
    handleFormSubmit =  (event, requestType, pasteId) =>{
        //event.preventDefault();
        const postObj  ={
            content : event.target.elements.content.value,
            syntax : event.target.elements.syntax.value,
            title : event.target.elements.title.value,
        }

        axios.defaults.headers = {
            "Content-Type": "application/json",
          };

        console.log(postObj);
        if (requestType === "post") {

            console.log(requestType);
             axios.post("http://127.0.0.1:8000/api/newpasty", postObj)
              .then(res => {
                if (res.status === 201) {
                console.log(this.props.history.push);
                this.props.history.push('/');

                }
              })
          } else if (requestType === "put") {
            console.log(requestType);
             axios.put(`http://127.0.0.1:8000/api/${pasteId}/update`, postObj)
              .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/');
                }
              })
          }

    }

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.pasteId
            )
          }
        >
          <FormItem label="New Pastie">
            <TextArea name="content" placeholder="Enter New Pastie"/>
          </FormItem>
          <FormItem label="Syntax Highlighting:">
            <Input name="syntax" placeholder="input placeholder" />
          </FormItem>
          <FormItem label="Paste Name / Title:">
            <Input name="title" placeholder="input placeholder" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
                {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

//The very fact that the component is nested one further is your issue
//. React router only injects the routing props to the component it routed to,
// but not to the components nested with in.
export default withRouter(FormLayout);
//export default connect(mapStateToProps)(FormLayout);

  