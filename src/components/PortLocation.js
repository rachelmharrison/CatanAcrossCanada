import React from 'react';
import {Container} from 'semantic-ui-react'


export default class PortLocation extends React.Component {

state = {   
 selected: "not-selected",
 orientation: this.props.orientation
};


handleClick = e => {
  e.stopPropagation()
  if(this.state.selected == 'selected')
    this.setState(state => ({
      selected: "not-selected"
    }));
  else
    this.setState(state => ({
      selected: "selected"
    }));
}

render() {
 let classname = "port-location" + " " + this.state.orientation + " " + this.state.selected

  return (
    <span className={classname} onClick={this.handleClick}>
       
    </span>

  ) 
}

}

