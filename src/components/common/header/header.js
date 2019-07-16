import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import logo from './logo.svg';
import './header.scss';
import MainPage from "../../../containers/mainPage/mainPage";
import AboutUs from "../../../containers/aboutUs/aboutUs";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="header">
                <div className="container grid--container">
                    <div className="header-content">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="title">Total: {this.props.counter}</div>
                        <Router>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Contacts</Link>
                                </li>
                            </ul>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
