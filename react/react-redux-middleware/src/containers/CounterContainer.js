import React from 'react';
import {connect} from 'react-redux'
import {increase , decrease } from '../modules/counter';
import Counter from '../component/Counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onDecrease={decrease} onIncrease={increase}/>
    );
};

export default connect(
    state => ({
            number: state.counter
        }
    ),
    {
        increase,
        decrease
    }
)(CounterContainer);