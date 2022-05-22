import React from 'react'
import Table from './Table'
 import Form from './Form';
 

class LinkContainer extends React.Component {
  
  constructor(props) {
    super(props)
    

   
   this.state ={  holder :  [],};

       
   
  }
  handleRemove = (index) => {
   
      
       if (index > -1) {
        this.state.holder.splice(index, 1);
        this.setState({
          holder: [...this.state.holder],
        });
      }
    };
 

  handleSubmit = (holder) => {
    
          holder.map((link) => this.setState({
            
              holder: [...this.state.holder, link],
            })   );  };

       

  render() {
    return (
      
      <div className="container">
        <h1>Account Vault🔒</h1>
        <p>Add email/username then password to store in vault.</p>
      
        <Table  linkData =  {this.state.holder} removeLink = {this.handleRemove}/>
        
       <br />

        <h3>Add New</h3>
       
     <Form handleSubmit ={ this.handleSubmit}/>
      
      </div>
    );
  }
}

export default LinkContainer
