import React from "react";
import PropTypes from "prop-types";
const MyComponent = ({name , children, age}) =>{
   return (
       <div>
          안녕하세요, 제 이름은 {name} 나이는 {age} <br/>
          children 값은 {children}
          입니다.
       </div>
   );
};
MyComponent.defaultProps = {
   name : '기본 이름'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    children : PropTypes.string,
    age : PropTypes.number
}
export default MyComponent;