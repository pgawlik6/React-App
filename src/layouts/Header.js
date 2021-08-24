import React from 'react';
import "../styles/Header.css"
import { Route, Switch } from 'react-router';
import img1 from '../images/kontakt.jpg';
import img2 from '../images/start.jpg';
import img3 from '../images/uslugi.jpg';
import img4 from '../images/panel.jpg';
import img5 from '../images/error.png';


const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img2} alt="start" />
                )} />
                <Route path="/service" render={() => (
                    <img src={img3} alt="service" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img1} alt="contact" />
                )} />
                <Route path="/admin_panel" render={() => (
                    <img src={img4} alt="admin_panel" />
                )} />
                <Route path="/login" render={() => (
                    <img src={img4} alt="login" />
                )} />
                <Route render={() => (
                    <img src={img5} alt="error" />
                )} />
            </Switch>

        </>
    );
}

export default Header;