import React from 'react';
import {connect} from 'react-redux';
import Counter from '../component/Counter';

const CounterContainer = ({number, increase , decrease}) =>{
    return(
        <Counter number ={number} onIncrease={increase} onDecrease={decrease} />
    );
};

const mapStateProps = state => ({
    number: state.counter.number,
});
const mapDispatchToProps = dispatch =>({
    //임시 함수
    increase : () =>{
        console.log('increase');
    },
    decrease : () =>{
        console.log('decrease');
    },
});


export default connect(
    mapStateProps,
    mapDispatchToProps,
)(CounterContainer);
