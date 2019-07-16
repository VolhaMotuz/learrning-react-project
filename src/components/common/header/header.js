import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './header.scss';

class Header extends React.PureComponent {
    // Set default props
    static defaultProps = {
        counter: 0,
    };

    render() {
        return (
            <div className="header">
                <div className="container grid--container">
                    <div className="header-content">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="title">Total: {this.props.counter}</div>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
