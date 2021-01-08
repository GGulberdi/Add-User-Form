import React, { Component } from 'react';
import Table from "./Table";
import Form from "./Form";

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     users : [
          {
            name: 'Charlie',
            job: 'Janitor',
          },
          {
            name: 'Mac',
            job: 'Bouncer',
          },
          {
            name: 'Dee',
            job: 'Aspring actress',
          }
        ]
  }
  this.updateNames=this.updateNames.bind(this)
}
  updateNames(value){
    this.setState({
      users: [...this.state.users,value]
    })
}



    render() {
        return (
            <div className="container">
                <h1>React List</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Form update={this.updateNames} />
                <Table users={this.state.users} />
            </div>
        )
      }
}

export default App;