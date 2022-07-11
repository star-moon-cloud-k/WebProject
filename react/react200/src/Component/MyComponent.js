import React from "react";

const MyComponent = () =>{
    const black  = new BlackDog();
    const white = new WhiteDog();
    black.bark();
    white.bark();
    return        <div>이것은 컴포넌트</div>;
}

function BlackDog(){
    this.name = '흰둥이';
    return {
        name : "검둥이",
        bark : function(){
            console.log(this.name + " : 멍멍");
        }
    }
}

function WhiteDog(){
    this.name = '흰둥이';
    return {
        name : '검둥이',
        bark: ()=>{
            console.log(this.name + '멍멍');
        }
    }
}
export default MyComponent;