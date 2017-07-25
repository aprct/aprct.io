import React from 'react';
import Bogo from '../Bogo';

import './Tilt.css'

import tiltjs from 'vanilla-tilt';

class Tilt extends React.Component {

  componentDidMount() {
    tiltjs.init(document.querySelector('.Tilt'), {
      reverse: true,
  		max: 25,
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
