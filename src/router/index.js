import {HashRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import DoneTodoListContainer from '../containers/DoneTodoListContainer'
import App from '../App'
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/donepage" component={DoneTodoListContainer}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;

