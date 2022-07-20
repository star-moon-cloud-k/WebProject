import React, {Component} from 'react';
import './App.css';
import LifeCycleSample from './Component/LifeCycleSample'
import ErrorBoundary from "./Component/ErrorBoundary";

//랜덤 색상을 생성
function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
    //16777215 == 헥사로 ffffff 값이 된다
}

class App extends Component{
    state = {
            color: '#000000',
        }

        handleClick = () =>{
            this.setState({
                color:getRandomColor()
            });
        }
    render() {
        return (
            <>
              <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
              <LifeCycleSample color = {this.state.color}/>
                </ErrorBoundary>
            </>
        )
    }

}

export default App;
