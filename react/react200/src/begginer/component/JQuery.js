import React, {Component} from "react";
import $ from 'jquery';
import ForceUpdate from "../../basic/component/ForceUpdate";
class JQuery extends Component{
    input_alert = () =>{
        var input_val = $('#inputId').val()
        alert(input_val)
    }

    render() {
        return (
            <div>
                <h2>[THIS IS JQuery]</h2>
                <input id="inputId" name ="inputName"/>
                <button id ="buttonId" onClick={e => this.input_alert(e)}>
                    Jquery Button
                </button>
            </div>
        )
    }
}
export default JQuery