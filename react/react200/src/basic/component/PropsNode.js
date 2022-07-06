import React, {Component} from "react";

class PropsNode extends Component {
    render() {
        return (
            <div style={{color : "#Df3962" ,padding: "10px"}}>
                {this.props.children}
            </div>
        )
    }
}

export default PropsNode;