import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ServicePage from '../pages/ServicePage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';


const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/service" component={ServicePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/admin_panel" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;