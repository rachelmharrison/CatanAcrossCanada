import React from 'react';
import {Container} from 'semantic-ui-react'


export default class RoadSpot extends React.Component {

state = {   
 colour: "blank",
 orientation: null
};

classname = "road" + " " + this.props.orientation + " " + this.state.colour

render() {
  return (
    <span className={this.classname}>
       
    </span>

  ) 
}

}

