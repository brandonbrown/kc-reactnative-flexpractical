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
	      <Path d="M29,0.6L2,13l9.3,4.4v8.8l8.1-5l7.4,3.5L29,0.6z M25.7,4L12.4,16l-6.3-3L25.7,4z M13,23v-4.9l4.5,2.1L13,23z
	 M14.1,16.8L26.8,5.4L25.3,22L14.1,16.8z"/>
      </Svg>
     );
 }
}
