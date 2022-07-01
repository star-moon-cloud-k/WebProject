import React, {Component} from "react";

class LifeCycleDerivedState extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. DerivedStateFromProps Call : '+props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render(){
        console.log('3. constructor Call');
        return(
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default LifeCycleDerivedState;