import React, {Component} from "react";

class ForceUpdate extends Component{
    constructor(props) {
        super(props);
    this.state={
        StateString : 'react',
    }
    }

    StateChange = (e) => {
        this.state.StateString = e
        this.forceUpdate();
    }
    StateChange2 = (e) => {
        this.state.StateString = e
        this.forceUpdate();
    }
    render(){
        return (
            <div style = {{padding: "0px"}}>
                <button onClick ={(e) => this.StateChange('state' , e)}>
                    state 직접 변경 </button>
                [state] 변경하기 StateString : {this.state.StateString}
                <button onClick ={(e) => this.StateChange2('direct' , e)}>
                    state 직접 다시 변경</button><br/>
                [state] 변경하기 StateString : {this.state.StateString}
            </div>
        )
    }
}

export default ForceUpdate;