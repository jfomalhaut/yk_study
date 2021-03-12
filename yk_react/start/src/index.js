import React from 'react';
import ReactDOM from 'react-dom';
import App from './App' //.js 생략 가능
import Counter from './routers/Counter';
import Input from './routers/Input';
import Addr from './routers/Addr';

ReactDOM.render(<Addr />, document.getElementById('root'));