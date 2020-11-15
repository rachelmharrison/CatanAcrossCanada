import React from 'react';
import Hex from './Hex'
import RoadSpot from './RoadSpot'
import WaterHex from './WaterHex'
import { Container, Button } from 'semantic-ui-react'


export default class Board extends React.Component {

state = {   
 settingUp: true,
};

handleClickSetup = () => {
    this.setState(state => ({
     settingUp: !this.state.settingUp,
    }));
  }

render() {
  return (
    <div>
        {this.props.version == "base" &&

        <Container>
            <div className={"hex-row-even"}>
                <Hex type={"blank"}/>
                <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-right"]}/>
                <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-right", "bottom-left"]}/>
                <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-right", "bottom-left"]}/>
                <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-left"]}/>
            </div>
            <div className={"hex-row-edge"}>
                <WaterHex settingUp={this.state.settingUp} portLocations={["right", "bottom-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left"]} portLocations={["left", "bottom-left"]}/>
            </div>
            <div className={"hex-row-even"}>
                <WaterHex settingUp={this.state.settingUp} portLocations={["right", "bottom-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left"]} portLocations={["left", "bottom-left"]}/>
            </div>
            <div className={"hex-row"}>
                <WaterHex settingUp={this.state.settingUp} portLocations={["right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left"]} portLocations={["left"]}/>
            </div>
            <div className={"hex-row-even"}>
                <WaterHex settingUp={this.state.settingUp} portLocations={["right", "top-right"]} settlements={["very-top", "top-left"]} roads={["top-right"]}/>               
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]}  roads={["left", "top-left"]} portLocations={["left", "top-left"]}/>
            </div>
            <div className={"hex-row-edge"}>
                <WaterHex settingUp={this.state.settingUp} portLocations={["right", "top-right"]} settlements={["very-top", "top-left"]} roads={["top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left", "top-left"]} portLocations={["left", "top-left"]}/>
            </div>
            <div className={"hex-row-even"}>
                <Hex settingUp={this.state.settingUp} type={"blank"}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["very-top"]} roads={["top-right"]} portLocations={["top-right"]}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["top-left", "top-right"]} portLocations={["top-left", "top-right"]}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["top-left", "top-right"]} portLocations={["top-left", "top-right"]}/>
                <WaterHex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["top-left"]} portLocations={["top-left"]}/>
            </div>
        </Container>

        }
        { this.props.version == 'expansion' && 
            <Container>
                <div className={"hex-row-even"}>
                    <Hex type={"blank"}/>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-right", "bottom-left"]}/>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-right", "bottom-left"]}/>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-right", "bottom-left"]}/>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["bottom-left"]}/>
                </div>
                <div className={"hex-row-edge"}>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["right", "bottom-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left"]} portLocations={["left", "bottom-left"]}/>
                </div>
                <div className={"hex-row-even"}>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["right", "bottom-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left"]} portLocations={["left", "bottom-left"]}/>
                </div>
                <div className={"hex-row"}>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left"]} portLocations={["left", "bottom-left"]}/>
                </div>
                <div className={"hex-row-even"}>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["right", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left"]} portLocations={["left"]}/>
                </div>
                <div className={"hex-row"}>
                    <Hex settingUp={this.state.settingUp} type={"blank"}/>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["right", "top-right"]} settlements={["very-top", "top-left"]} roads={["top-right"]}/>               
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]}  roads={["left", "top-left"]} portLocations={["left", "top-left"]}/>
                </div>
                <div className={"hex-row-even"}>
                    <Hex settingUp={this.state.settingUp} type={"blank"}/>
                    <WaterHex settingUp={this.state.settingUp} portLocations={["right", "top-right"]} settlements={["very-top", "top-left"]} roads={["top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <Hex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["left", "top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["top-left"]} roads={["left", "top-left"]} portLocations={["left", "top-left"]}/>
                </div>
                <div className={"hex-row"}>
                    <Hex settingUp={this.state.settingUp} type={"blank"}/>
                    <Hex settingUp={this.state.settingUp} type={"blank"}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["very-top"]} roads={["top-right"]} portLocations={["top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["top-left", "top-right"]} portLocations={["top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["top-left", "top-right"]} portLocations={["top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["top-left", "top-right"]} portLocations={["top-left", "top-right"]}/>
                    <WaterHex settingUp={this.state.settingUp} settlements={["very-top", "top-left"]} roads={["top-left"]} portLocations={["top-left"]}/>
                </div>
            </Container>
        }
        {this.state.settingUp &&
            <Button onClick={this.handleClickSetup}>Finished Set Up</Button>
        }
        {!this.state.settingUp &&
            <Button onClick={this.handleClickSetup}>Back to Set Up</Button>
        }
    </div>
    

  )   
}

}

