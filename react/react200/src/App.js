import React, {Component} from 'react';
import './App.css';
import MyComponent from "./Component/MyComponent";
import Counter from "./Component/Counter";
import Say from "./Component/Say";
import EventPractice from "./Component/EventPractice";
import EventPracticeComponent from "./Component/EventPracticeComponent";
import ValidationSample from "./validation/ValidationSample";
class App extends Component{
    render() {
        return (<>
                <ValidationSample/>
                <Counter/>
                <Say/>
                <EventPractice/>
                <EventPracticeComponent/>
            </>
        )
    }

}

export default App;
