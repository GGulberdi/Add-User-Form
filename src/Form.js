import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            job: ''
        };
        this.setName=this.setName.bind(this)
        this.setJob=this.setJob.bind(this)

    }
 
setName(e){
    console.log(e)
    this.setState({
       name:e.target.value
    })
}

setJob(e){
    this.setState({
       job:e.target.value
    })
}


sendNames=()=>{
 this.props.update(this.state);
}
    render() {
        // const { name, job } = this.state; 
        return (
            <form>
                <h2>{this.state.name} {this.state.job}</h2>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={this.setName}
                     />
                <label htmlFor="job">Job</label>
                <input onChange={this.setJob}
                    type="text" 
                    name="job" 
                    id="job"
                     />
                <button type="submit" onClick={this.sendNames}>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
