import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../actions';

const { login } = UserAction;

function Login() {
    const dispatch = useDispatch();
    const { failure, logged, useinfo } = useSelector(({user}) => user);
    const [info, setInfo] = useState({ username : '', password: '' });
    const { username, password } = info;

    const onChangeValue = (ev) =>{
        const { target: { value, name } } = ev;
        setInfo({
            ...info,
            [name]: value
        });
    };

    const signIn = (ev) => {
        ev.preventDefault();
        dispatch(login(info));
    }

    useEffect(() => {
        if(logged){
            alert('success');
        }
    }, [logged]);

    useEffect(() => {
        if(failure >0 ){
            alert('failed');
        }
    }, [failure]);

    return (
        <form onSubmit={signIn}>
            <input type="text" value={username} name="username" onChange={onChangeValue} />
            <input type="password" value={password} name="password" onChange={onChangeValue} />
            <button>login</button>
        </form>
    )
}

export default Login;