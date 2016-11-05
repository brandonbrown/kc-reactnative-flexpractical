import React, { Component } from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

 export default class PinIcon extends Component {
  render() {
     return (
       <Svg
          height="18"
          width="8"
          >
          <Path fill="#fff" d="M5.6,16.1l-2.3,2.3v-8h2.3V16.1z M0,9.2h8.9C8.5,8,7.8,7,6.7,6.4V2.3c0.6,0,1.1-0.5,1.1-1.1S7.4,0,6.7,0H2.1
	C1.5,0,1,0.5,1,1.1s0.5,1.1,1.1,1.1v4.1C1.1,7,0.3,8,0,9.2z"/>
      </Svg>
     );
 }
}
