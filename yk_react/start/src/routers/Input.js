import React, { useEffect, useState, useRef } from 'react';

const field = {
    name: '',
    position: '',
    phone: '',
}

function Input(){
    /*const [data, setData] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');

    const onChangeValue = (ev) => {
        const { target: { value } } = ev ;
        setData(value);
    };

    const onChangeValue2 = (ev) =>{
        const { target: { value2 } } = ev;
        setData2(value2);
    }

    const onChangeValue3 = (ev) => {
        const { target: { value3 } } = ev;
        setData3(value3); 
    }*/

    const nameRef = useRef();
    const [data, setData] = useState(field);
    const [list, setList] = useState([]);
    const { name, position, phone } = data;

    const onChangeValue = (ev) => {
        const { target: { value, name } } = ev ;
        setData({
            ...data,
            [name]: value
        });
    }
    
    const register = (ev) => {
        ev.preventDefault();
        //setList(list.concat( { name, position, phone } ));
        setList([
            ...list,
            data
        ]);
        setData(field); //칸 비우기
    };

    useEffect(() => {
        nameRef.current.focus();
    }, [list]);

    return (
        <div>
            <form onSubmit={register}>
                이름:
                <input value={name} name="name" onChange={onChangeValue} ref={nameRef} required /><br/>
                직책:
                <input value={position} name="position" onChange={onChangeValue} /><br/>
                연락처
                <input value={phone} name="phone" onChange={onChangeValue} required /><br/>
                <button>등록</button>
            </form>
            <ul>
                {list.map((item, idx) => (
                    <li key={`PHONEBOOK${idx}`}>
                        <div>이름: {item.name}</div>
                        <div>직책: {item.position}</div>
                        <div>전화번호: {item.phone}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Input;