import React, {Component} from 'react';
import FrequencyControl from './FrequencyControl';
import MetroSound from './MetroSound';
import './AudioControl.css'

class AudioControl extends Component{
  constructor(props){
    super(props);

    this.state= {
      frequency: 100,
      IntervalId: null,
      playStatus: 'play',
      imgSrc: "./playButton.jpg",
      imgOnClick: "this.playAudio"
    }

    this.updateFrequency = this.updateFrequency.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.beep = this.beep.bind(this);
  }

  updateFrequency(freq){
    this.setState({frequency: parseInt(freq)});
  }

  beep() {
    // var audio = new Audio("./MetroBar1.wav");
    // audio.type = 'audio/wav';
    // audio.play();

    let intervId = (60.0 / this.state.frequency) * 1000;
    // debugger;
    MetroSound.play();
    setInterval(() => {
      // console.log("after 5 sec")
      this.beep();
    }, intervId);
    // this.setState({IntervalId: IntervId});

    // let audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    //
    // let oscillator = audioCtx.createOscillator();
    // let gainNode = audioCtx.createGain();
    //
    // oscillator.connect(gainNode);
    // gainNode.connect(audioCtx.destination);
    //
    // oscillator.start();

    // setTimeout(
    //    function() {
    //      oscillator.stop();
    //    },
    //    duration
    // );
}

  playAudio(){
    // debugger;
    this.setState({imgSrc: "./pauseButton.jpg"});
    // event.target.onClick = this.pauseAudio();
    this.setState({imgOnClick: "this.pauseAudio"});
    // debugger;
    this.beep();
    // var IntervId = window.setInterval(this.beep(), this.state.frequency);

  }

  pauseAudio(){
    this.setState({imgSrc: "./playButton.jpg"});
    // event.target.onClick = this.playAudio();
    this.setState({imgOnClick: "this.playAudio"});
    // MetroSound.stop();
  }

  // componentDidMount(){
  //   let IntervalId = setInterval(playAudio, frequency);
  // }

  render(){
    return (
      <div className="audio-control">
        <div className="audio">
          <label>{`${this.state.frequency} BPM`}</label>
          <img className="audio-button" src={this.state.imgSrc} alt="audio-button" onClick={this.playAudio} />
        </div>
          <FrequencyControl onFrequencyChange={this.updateFrequency}/>
      </div>
    )
  }
}

export default AudioControl;
