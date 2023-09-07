import React, {Component, useState} from "react";
import {Link} from 'react-router-dom';
import '../stylesheets/Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className='sidebar-logo-text'>
                SPACE
            </div>
            <div className='sidebar-tab-container'>
                <div className='sidebar-tab-text'>
                    HOME
                </div>
                <div className='sidebar-tab-text'>
                    ABOUT
                </div>
                <div className='sidebar-tab-text'>
                    CONTACT
                </div>
            </div>
        </div>
    )
}