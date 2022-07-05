import React, {Component} from "react";
import datatype from 'prop-types';

class PropsDatatype extends Component{
    render(){
        let{
            String, Number, Boolean, Array, ObjectJson ,Function
        } = this.props
        return(
            <div style = {{padding: "0px"}}>
            <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps : {Array.toString()}</p>
                <p>Object Json : {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps : {Function}</p>
            </div>
        )
    }
}

PropsDatatype.propTypes = {
    String : datatype.number,
    number : datatype.number,
    Boolean : datatype.bool,
    Array : datatype.array,
    ObjectJson : datatype.object,
    Function : datatype.func
}

export default PropsDatatype