import React, {Component} from 'react';
import './FrequencyControl.css';

class FrequencyControl extends Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    // debugger;
    this.props.onFrequencyChange(event.target.value);
  }


  render(){
    return (
      <div className="frequency-control">
        <input className="slider" type="range" id="frequency" name="frequency" min="40" max="218" onChange={this.handleChange}/>
      </div>
    )
  }
}

export default FrequencyControl;
