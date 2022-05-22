import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

   
       this.state = {name: ''  , URL: '', list: [], };
    

  }

  handleChange = (event) => {
    
       
            this.setState({ ...this.state, [event.name]: event.value });
          };

  onFormSubmit = (event) => {
  
      event.preventDefault();

    
    let name = this.state.name;
    let url = this.state.URL;
    let array = this.state.list;
    array.push({ name: name, URL: url });
    this.setState({ ...this.state, list: array });
    this.setState({ name: "" });
    this.setState({ URL: "" });
    this.props.handleSubmit(this.state.list);
        };  

  render() {
    return ( 
      <form onSubmit={this.onFormSubmit}>
    
       
    
        <label>UserName/Email:</label>
         <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e.target)}
        />
        <br />
        <label>Password:  </label>
        <input
          type="text"
          name="URL"
          value={this.state.URL}
          onChange={(e) => this.handleChange(e.target)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form
