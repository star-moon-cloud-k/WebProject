import React from 'react';
import '../styles/TodoTemplate.scss';

const TodoTemplate = ({children}) =>{
    return(
        <div className="TodoTemplate">
            <div className="app-tile">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;