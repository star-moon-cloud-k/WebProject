import React, {useCallback} from 'react';
import TodoListItem from "./TodoListItem";
import {List} from 'react-virtualized'
import '../styles/TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) =>{
    const rowRederer = useCallback(
        ({index, key, style}) =>{
            const todo = todos[index];
            return (
                <TodoListItem
                    todo = {todo}
                    key = {key}
                    onRemove={onRemove}
                    style = {style}
                    onToggle={onToggle}
                    />
            );
        },
        [onRemove, onToggle, todos]
    )
    return (
        <List className="TodoList"
        width = {512}   // 전체 크기
            height ={513}   //전체 높이
             rowCount={todos.length}    //항목 개수
             rowHeight={56}     //항목 높이
             rowRenderer={rowRederer}   //항목을 렌더링할 때 쓰는 함수
            list = {todos}  //배열
            style ={{outline : 'none'}} //List에 기본 적용되느 outline 스타일 제거
        />
    );
};

export default React.memo(TodoList);
