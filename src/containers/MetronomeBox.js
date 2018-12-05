import React, {Component} from 'react';
import Header from '../components/Header';
import AudioControl from '../components/AudioControl';
import './MetronomeBox.css';

class MetronomeBox extends Component {
  constructor(props){
    super(props);
  }

  render(){
      return (
        <div className="metronome-box">
          <Header />
          <AudioControl />
        </div>
      )
  }

}

export default MetronomeBox;
