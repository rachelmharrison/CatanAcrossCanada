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
      else if(this.state.number == 6)
        this.setState(state => ({
          number: 8
        }));
      else
        this.setState(state => ({
          number: this.state.number + 1
        }));
    }

render() {
 
  return (
    <span className={this.classname} onClick={this.handleNumberClick}>
        { (this.state.number == 6 || this.state.number == 8) &&
          <p className='number red'>{this.state.number}</p>
        }
        { !(this.state.number == 6 || this.state.number == 8) &&
          <p className='number'>{this.state.number}</p>
        }
       { this.state.number == 2 && <p className='dots'>.</p> }
       { this.state.number == 3 && <p className='dots'>..</p> }
       { this.state.number == 4 && <p className='dots'>...</p> }
       { this.state.number == 5 && <p className='dots'>....</p> }
       { this.state.number == 6 && <p className='dots red'>.....</p> }
       { this.state.number == 8 && <p className='dots red'>.....</p> }
       { this.state.number == 9 && <p className='dots'>....</p> }
       { this.state.number == 10 && <p className='dots'>...</p> }
       { this.state.number == 11 && <p className='dots'>..</p> }
       { this.state.number == 12 && <p className='dots'>.</p> }
    </span>

  ) 
}

}

