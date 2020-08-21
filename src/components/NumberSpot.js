import React from 'react';
import {Container} from 'semantic-ui-react'


export default class NumberSpot extends React.Component {

state = {   
 number: null,
 dots: 0
};

classname = "number-spot"

handleNumberClick = e => {
    e.stopPropagation()
    if(this.props.settingUp)
      if(this.state.number == null)
        this.setState(state => ({
          number: 2
        }));
      else if(this.state.number == 12)
        this.setState(state => ({
          number: 2
        }));
      else
        this.setState(state => ({
          number: this.state.number + 1
        }));
    }

render() {
  return (
    <span className={this.classname} onClick={this.handleNumberClick}>
       <p>{this.state.number}</p>
    </span>

  ) 
}

}

