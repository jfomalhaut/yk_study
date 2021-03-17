import React from 'react';
import ReactDOM from 'react-dom';
import App from './App' //.js 생략 가능
import Counter from './routers/Counter';
import Counter2 from './routers/Counter2';
import Input from './routers/Input';
import Addr from './routers/Addr';

ReactDOM.render(<Counter2 />, document.getElementById('root'));