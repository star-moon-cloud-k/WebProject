import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        //state 초깃값 설정
        this.state = {
            number: 0,
            fixedNumber : 0
        };
    }

    render() {
        const {fixedNumber , number} = this.state;        //state를 조회할 때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값{fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({number: number},
                            () =>{
                            console.log("방금 setState가 호출되었습니다.");
                            console.log(this.state);
                            });
                        this.setState(prevState =>{
                        return {
                            number: prevState.number + 1
                        };
                    });
                        //위 코드와 아래 코드는 완전히 똑같은 기능을 한다.
                        //아래 코드는 함수에서 바로 객체를 반환한다느 의미이다.
                        this.setState(prevState =>({
                            number: prevState.number
                        }));
                    }}
                >+1
                </button>
            </div>
        );
    }
}
export default Counter;