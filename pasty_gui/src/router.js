import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import PastiesList from './containers/PastiesList'
import PastyDetail from './containers/PastyDetail'
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () =>(
    <div>
        <Route exact path="/login/" component={Login} />
        <Route exact path="/signup/" component={Signup} />
        <Route exact path='/' component={PastiesList}/>
        <Route exact path='/pasties/:pasteId/' component={PastyDetail}/>

    </div>
);

export default withRouter(BaseRouter);
