import React, {Component} from "react";

class LifeCycleRender extends Component{
    render(){
        console.log('3. render Call');
        return (
            <h2>[THIS IS RENDER FUNCTION ]</h2>
        )
    }
}

export default LifeCycleRender;