import React from 'react'; //react를 선언하면 컴포넌트라는 뜻
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List from './routers/List';
import Home from './routers/Home';
import Navigation from './components/Navigation';

export function Test(){
    return (
        <h1>Test Component</h1>
    );
}

function App(){
    const title = "Start!";
    const desc = "My home";
    return (
        <BrowserRouter>
            <Navigation title={title} desc={desc}/>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/list/:name" component={List} />
                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
