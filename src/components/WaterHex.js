import React from 'react';
import {Container} from 'semantic-ui-react'
import RoadSpot from './RoadSpot';
import SettlementSpot from './SettlementSpot';
import NumberSpot from './NumberSpot';
import PortLocation from './PortLocation';


export default class WaterHex extends React.Component {


state = {   
 port: this.props.port ? this.props.port : "none",
};





handleClick = () => {
  if(this.props.settingUp)
    if(this.state.port == "none")
      this.setState(state => ({
        port: "3-1 All"
      }));
    else if(this.state.port == "3-1 All")
      this.setState(state => ({
        port: "2-1 Wood"
      }));
    else if(this.state.port == "2-1 Wood")
      this.setState(state => ({
        port: "2-1 Ore"
      }));
    else if(this.state.port == "2-1 Ore")
      this.setState(state => ({
        port: "2-1 Sheep"
      }));
    else if(this.state.port == "2-1 Sheep")
      this.setState(state => ({
        port: "2-1 Wheat"
      }));
    else if(this.state.port == "2-1 Wheat")
      this.setState(state => ({
        port: "2-1 Clay"
      }));
    else if(this.state.port == "2-1 Clay")
      this.setState(state => ({
        port: "none"
      }));
    


  
}

render() {
  let classname = "hex" + " " + "water"

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
        {this.props.portLocations && this.props.portLocations.includes("right") && this.props.settingUp &&
          <PortLocation orientation={"right"}/>
        }
        {this.props.portLocations && this.props.portLocations.includes("left") && this.props.settingUp &&
          <PortLocation orientation={"left"}/>
        }
        {this.props.portLocations && this.props.portLocations.includes("bottom-right") && this.props.settingUp &&
          <PortLocation orientation={"bottom-right"}/>
        }
        {this.props.portLocations && this.props.portLocations.includes("bottom-left") && this.props.settingUp &&
          <PortLocation orientation={"bottom-left"}/>
        }
        {this.props.portLocations && this.props.portLocations.includes("top-right") && this.props.settingUp &&
          <PortLocation orientation={"top-right"}/>
        }
        {this.props.portLocations && this.props.portLocations.includes("top-left") && this.props.settingUp &&
          <PortLocation orientation={"top-left"}/>
        }
        <div className={"top"} />
        <div className={"middle"}>
            {this.state.port != "none" &&
                <p className="port-id">{this.state.port}</p>
            }
        </div>
        <div className={"bottom"} />  
    </div>
    

  ) 
}

}

