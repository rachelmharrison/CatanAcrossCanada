import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'


export default class SettlementSpot extends React.Component {

state = {   
 colour: "blank",
 type: 'house',
 colourIndex: 0
};

colours = ['blank', 'red', 'orange', 'white', 'blue', 'green', 'brown']


handleClick = () => {
  
  if(this.state.type == 'house' && this.state.colour != 'blank') {
    this.setState({ type: 'city'})
  }
  else {
    this.setState({ type: 'house' })
    let newIndex = (this.state.colourIndex + 1) % 7;
    console.log(newIndex)
    this.setState({ colour: this.colours[newIndex]});
    this.setState({ colourIndex: newIndex });
  }

}

render() {

  let classname = "settlement" + " " + this.state.type + " " + this.state.colour + " " + this.props.orientation


  return (
    <span className={classname} onClick={this.handleClick}>
       { this.state.type == 'city' &&     <FontAwesomeIcon icon={faCity} />}
    </span>

  ) 
}

}

