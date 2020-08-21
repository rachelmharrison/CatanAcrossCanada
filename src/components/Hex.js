import React from 'react';
import {Container} from 'semantic-ui-react'
import RoadSpot from './RoadSpot';
import SettlementSpot from './SettlementSpot';
import NumberSpot from './NumberSpot';


export default class Hex extends React.Component {


state = {   
 type: null,
 number: null,
 resource: this.props.type ? this.props.type : "desert",
};



// 1 - desert, 2 - sheep, 3-clay, 4-wood, 5-ore, 6-wheat


handleClick = () => {
  if(this.props.settingUp)
    if(this.state.resource == "desert")
      this.setState(state => ({
        resource: "sheep"
      }));
    else if(this.state.resource == "sheep")
      this.setState(state => ({
        resource: "clay"
      }));
    else if(this.state.resource == "clay")
      this.setState(state => ({
        resource: "wood"
      }));
    else if(this.state.resource == "wood")
      this.setState(state => ({
        resource: "ore"
      }));
    else if(this.state.resource == "ore")
      this.setState(state => ({
        resource: "wheat"
      }));
    else if(this.state.resource == "wheat")
      this.setState(state => ({
        resource: "desert"
      }));

}

render() {
  let classname = "hex" + " " + this.state.resource

  return (

    <div className={classname} onClick={this.handleClick}>
        {this.props.roads && this.props.roads.includes("left") && !this.props.settingUp &&
          <RoadSpot orientation={"left"}/>
        }
        {this.props.roads && this.props.roads.includes("top-left") && !this.props.settingUp &&
          <RoadSpot orientation={"top-left"}/>
        }
        {this.props.roads && this.props.roads.includes("top-right") && !this.props.settingUp &&
          <RoadSpot orientation={"top-right"}/>
        }
        {this.props.settlements && this.props.settlements.includes("very-top") && !this.props.settingUp &&
          <SettlementSpot orientation={"very-top"}/>
        }
        {this.props.settlements && this.props.settlements.includes("top-left") && !this.props.settingUp &&
          <SettlementSpot orientation={"top-left"}/>
        }
        {this.props.type != "water" && this.props.type != "blank" && this.state.resource != "desert" &&
          <NumberSpot settingUp={this.props.settingUp} />
        }
        <div className={"top"} />
        <div className={"middle"}/>
        <div className={"bottom"} />  
    </div>
    

  ) 
}

}

