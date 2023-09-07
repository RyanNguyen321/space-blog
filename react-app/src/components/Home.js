import React, {Component, useState} from "react";
import "../stylesheets/Home.css"

export default function Home() {
    return (
        <div className='home-container'>
            <div className='text-container'>
                <div className='large-text'>
                    The space blog
                </div>
                <div className='small-text'>
                    The "Space Blog" is an immersive online platform for those who are venturing into the world of software development. this blog serves as a guiding light for those navigating the cosmos of web development.
                </div>
            </div>
            <div className='tab-container'>
                <div className='tab'>
                    ui
                </div>
                <div className='tab'>
                    ux
                </div>
                <div className='tab'>
                    design
                </div>
                <div className='tab'>
                    layoutttt
                </div>
            </div>
        </div>
    )
}