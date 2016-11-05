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

 export default class Share extends Component {
  render() {
     return (
       <Svg height="26.5" width="32">
       <Path d="M16,8.6c-2.6,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S18.5,8.6,16,8.6z M16,16.4
 c-1.8,0-3.2-1.4-3.2-3.2S14.2,10,16,10s3.2,1.4,3.2,3.2S17.8,16.4,16,16.4z"/>
<Path d="M27.3,8.6c-2.6,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S29.9,8.6,27.3,8.6z M27.3,16.4
 c-1.8,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2S29.1,16.4,27.3,16.4z"/>
<Path d="M4.6,8.6C2.1,8.6,0,10.7,0,13.2s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S7.2,8.6,4.6,8.6z M4.6,16.4
 c-1.8,0-3.2-1.4-3.2-3.2S2.9,10,4.6,10s3.2,1.4,3.2,3.2S6.4,16.4,4.6,16.4z"/>
      </Svg>
     );
 }
}
