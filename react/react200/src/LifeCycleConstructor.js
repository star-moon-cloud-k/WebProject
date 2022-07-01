
import React, {Component} from "react";

class LifeCycleConstructor extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[This IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default LifeCycleConstructor;