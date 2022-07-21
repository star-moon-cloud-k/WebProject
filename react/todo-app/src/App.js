import logo from './logo.svg';
import './App.css';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";

import {MdCached} from "react-icons/md";

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert/>
        </TodoTemplate>)

        ;
}

export default App;
