import React, {Component} from 'react';
import './App.css';
import MyComponent from "./Component/MyComponent";
import Counter from "./Component/Counter";
import Say from "./Component/Say";
import EventPractice from "./Component/EventPractice";
import EventPracticeComponent from "./Component/EventPracticeComponent";
import ValidationSample from "./validation/ValidationSample";
import RefSample from "./validation/RefSample";
import ScrollBox from "./ScrollBox";
class App extends Component{
    render() {
        const age = 5;
        return (<>
                <ScrollBox ref ={(ref) => this.scrollBox =ref}/>
                <button onClick={()=>this.scrollBox.scrollToBottom()}>아래로</button>
                <button onClick={()=>this.scrollBox.scrollToTop()}>위로</button>
                <Counter/>
                <EventPractice/>
            </>
        )
    }

}

export default App;
