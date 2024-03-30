import React, {Component, useState} from "react";
import {Link} from 'react-router-dom';
import '../stylesheets/Header.css';

export default function Header() {
    return (
        <div className="head-container">
            <div className='head-logo-text'>
                <Link to={`/create`} className="header-link">
                    SPACE
                </Link>
            </div>
            <div className='head-tab-container'>
                <div className='head-tab-text'>
                    <Link to={`/`} className="header-link">
                        HOME
                    </Link>
                </div>
                <div className='head-tab-text'>
                    ABOUT
                </div>
                <div className='head-tab-text'>
                    CONTACT
                </div>
            </div>
        </div>
    )
}