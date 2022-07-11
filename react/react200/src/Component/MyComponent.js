import React from "react";

const MyComponent = props =>{
    const {name, children, age} = props;
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
export default MyComponent;