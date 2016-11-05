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

 export default class Heart extends Component {
  render() {
     return (
       <Svg
              height="26.5"
              width="32"

          >
          <Path d="M12.5,25.1c0.9,0.9,2.2,1.4,3.4,1.4c1.2,0,2.5-0.4,3.4-1.4l10.1-10c3.5-3.5,3.5-9.1,0-12.5
		c-3.5-3.5-9.1-3.5-12.5,0L16,3.5l-0.9-0.9C11.6-0.9,6-0.9,2.6,2.6c-3.5,3.5-3.5,9.1,0,12.5L12.5,25.1z"/>
  </Svg>
     );
 }
}
