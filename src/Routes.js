import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import JavaData from './components/JavaData';
import Login from './components/Login';
import Register from './components/Register';
import Sample from './components/Sample';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Footer from './components/Footer';
const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/sample"> <Sample /> </Route>
                            <Route path="/javadata"> <JavaData /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/*"> <PageNotFound /> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}
export default Routes;
