import React, { Component } from 'react';

class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name:'',
            phone:''
        };
        
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        this.setState({[event.target.phone] : event.target.value});
      }

      handleSubmit = (event) => {
        alert(this.state.name);
        alert(this.state.phone);
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" defaultValue='' value={ this.state.value } name="name" onChange={ this.handleChange } />
                    <input type="text" defaultValue='' value={ this.state.value } name="phone" onChange={ this.handleChange } />
                    <button type="submit">Click Me</button>
                </form>
            </div>
        );
    }
}

export default Contact;
