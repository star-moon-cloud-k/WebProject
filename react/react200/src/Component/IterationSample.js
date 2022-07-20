import React, {useState} from 'react'


const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);    //새로운 항목을 추가할 때 사용

    const onChange = e => setInputText(e.target.value);
    const onClick = () =>{
        const nextNames = names.concat({
            id: nextId , // nextId  값을 id 로 설정
            text: inputText
        });
        setNextId(nextId + 1);  //nextId 값에 1을 더해준다.
        setNames(nextNames);        //names  값을 업데이트 한다.
        setInputText('');       //inputText를 비운다.
    };
    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !== id);
        //name.id의 값과 입력된 id의 값과 다른 배열들만을 추출하여 새로운 배열을 만든다는 의미.
        setNames(nextNames);
    };

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={()=> onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return(
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;