import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import '../stylesheets/PostPage.css';

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/posts/' + id)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            })
    }, []);
    if (!postInfo) return '';
    
    return (
        <div className="post-page-container">
            <div></div>
            <div className="post-body">
                <div className="post-header">
                    <h3 className="post-title">
                        {postInfo.title}
                    </h3>
                    {postInfo.date}
                </div>
                {postInfo.content}
            </div>

            <div></div>
        </div>)
}