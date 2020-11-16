import React from 'react';
import {Container} from 'semantic-ui-react'


export default class RoadSpot extends React.Component {

state = {   
 colour: "blank",
 orientation: null,
 colourIndex: 0
};

colours = ['blank', 'red', 'orange', 'white', 'blue', 'green', 'brown']


handleClick = () => {
  let newIndex = (this.state.colourIndex + 1) % 7;
  console.log(newIndex)
  this.setState({ colour: this.colours[newIndex]});
  this.setState({ colourIndex: newIndex });
}

render() {
  let classname = "road" + " " + this.props.orientation + " " + this.state.colour

  console.log(classname)

  return (
    <span className={classname} onClick={this.handleClick}>
       
    </span>
  ) 
}

}

