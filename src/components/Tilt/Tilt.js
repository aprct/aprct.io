import React from 'react';
import './Tilt.css'

import Bogo from '../Bogo';

import tiltjs from 'vanilla-tilt';

class Tilt extends React.Component {

  componentDidMount() {
    tiltjs.init(document.querySelector('.Tilt'), {
      reverse: true,
      scale: 1.1,
  		max: 15,
  		speed: 400
  	});
  }

  render() {
    return (
      <div id="Tilt" className="Tilt">
        <Bogo />
      </div>
    )
  }
}

export default Tilt;
