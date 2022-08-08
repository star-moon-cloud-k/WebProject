import React from 'react';
import {connect} from 'react-redux'
import {increase, decrease, increaseAsync, decreaseAsync} from '../modules/counter';
import Counter from '../component/Counter';

const CounterContainer = ({number, increaseAsync, decreaseAsync}) => {
    return (
        <Counter number={number} onDecrease={decreaseAsync} onIncrease={increaseAsync}/>
    );
};

export default connect(
    state => ({
            number: state.counter
        }
    ),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);