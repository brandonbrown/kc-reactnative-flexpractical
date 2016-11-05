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

 export default class Back extends Component {
  render() {
     return (
       <Svg
              height="27"
              width="14"

          >
          <Path d="M3.1,13.5c-0.3,0.3-0.3,0.3,0,0.5c0.3,0.3,11.5,11.5,11.5,11.5c0.5,0.5,0.5,1.2,0,1.7c-0.5,0.5-1.2,0.5-1.7,0
  L0.4,14.7C0.2,14.5,0,14.2,0,13.8c0-0.4,0.2-0.7,0.4-0.9L13,0.4c0.5-0.5,1.2-0.5,1.7,0c0.5,0.5,0.5,1.2,0,1.7
  C10.8,5.9,3.4,13.3,3.1,13.5z"/>
  </Svg>
     );
 }
}
