const divToggle = document.querySelector('.toggle');
const counter = document.quertSelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference = ({type: INCREASE, difference });
const decrease = () => ({type: DECREASE});

//액션 타입과 액션 생성 함수 정의

const initialState = {
	toggle : false,
	counter : 0
};

const increase = difference => ({ type: INCREASE, difference});
const decrease = difference => ({ type: DECREASE});

//state가 undefined일 때는 initialState를 기본값으로 사용

function reducer (state = initialState, action){
	//action.type에 따라 작업을 처리함
	switch(action.type){
		case TOGGLE_SWITCH:
			return{
				...state,	//불변성 유지를 해 주어야 함
				toggle: !state.toggle
			};
		case INCREASE:
			return {
				...state,
				counter: state.counter + action.difference
			};
		case DECREASE:
			return {
				...state,
				counter: state.counter -1
			};
		default:
			return state;
	}
}
