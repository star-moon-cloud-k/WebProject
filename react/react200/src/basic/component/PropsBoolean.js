import React, {Component} from 'react';

class PropsBoolean extends Component {
    render() {
        let {
            BooleanTrueFalse
        } = this.props
        return (
            <div style={{padding: "0ox"}}>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
            {/* (bool value) ? true : false */}
            </div>
        )
    }

}

export default PropsBoolean