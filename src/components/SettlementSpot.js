import React from 'react';
import {Container} from 'semantic-ui-react'


export default class SettlementSpot extends React.Component {

state = {   
 colour: "blank",
};

classname = "settlement" + " " + this.props.orientation + " " + this.state.colour


render() {

  return (
    <span className={this.classname}>
       
    </span>

  ) 
}

}

