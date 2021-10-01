import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import JavaData from './components/JavaData';
import Login from './components/Login';
import Register from './components/Register';
import Sample from './components/Sample';

const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header></Header>
                    <div>
                        <Switch>
                            <Route path="/sample"> <Sample /> </Route>
                            <Route path="/javadata"> <JavaData /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
                        </Switch>
                    </div>
                </div>

            </Router>
        </div>
    );
}
export default Routes;
