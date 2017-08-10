import React, { Component } from 'react';
import './App.css';

import Tilt from './components/Tilt'

import crimewave from './assets/crimewave.mp3';

class App extends Component {

  componentDidMount() {
    // this.audio = document.getElementById('crimewave');
    // this.audio.addEventListener('play', this.initVisualization.bind(this));

    this.initVisualization();
  }

  initVisualization() {
    const ctx = new AudioContext();
    const audio = document.getElementById('crimewave');
    const audioSrc = ctx.createMediaElementSource(audio);
    const analyser = ctx.createAnalyser();
    audioSrc.connect(analyser);
    audioSrc.connect(ctx.destination);

    let frequencyData = new Uint8Array(analyser.frequencyBinCount);

    let count = 0;

    const renderFrame = () => {
      requestAnimationFrame(renderFrame);
       analyser.getByteFrequencyData(frequencyData);

       let pump = frequencyData.reduce((s, i) => (s + i));

       if(pump > 50000) {
         if( count === 12 ) {
          //  console.log(pump);
           count = 0;
           document.drawLines();
         } else {
           count += 1;
         }
       }
    }

    audio.play();
    renderFrame();
  }

  render() {
    return (
      <div className="App">
        <audio id="crimewave" src={ crimewave } />

        <Tilt />
      </div>
    );
  }
}

export default App;
