import React, {Component} from "react";
import '../stylesheets/PostList.css';
import axios from "axios";
import f1 from "../assets/f1.png"
import {Link} from "react-router-dom";


const Post = props => (
    <Link to={`/post/${props.post._id}`} className="small-post-link">
        <div className='small-post'>
            <h1 className='small-post-title'>
                {props.post.title}
            </h1>
            <div className='small-post-username'>
                {props.post.username}
            </div>
            <div className='small-post-content'>
                {props.post.content}
            </div>

        </div>
    </Link>
)

const LargePost = props => (
    <div className='large-post' style={{background: props.post.color}}>
        <img  src={f1} className="large-post-img"/>
        Latest Dev Blog
        <div className='large-post-content'>
            {props.post.content}
        </div>
        <div className='large-post-username'>
            "{props.post.username}"
        </div>
    </div>
)


export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.deletePost = this.deletePost.bind(this);
        this.state = {posts: []};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/posts/')
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch((error) => {
                console.log(error);
        })
    }

    deletePost(id) {
        axios.delete('http://localhost:5000/posts/' + id)
            .then(res => console.log(res.data));

        this.setState({
            posts: this.state.posts.filter(el => el._id !== id)
        })
    }

    postList() {
        return this.state.posts.slice(1).map(currentPost => {
            return <Post post={currentPost} deletePost={this.deletePost} key={currentPost._id}></Post>
        })
    }

    mainPost() {
        return this.state.posts.slice(0,1).map(currentPost => {
            return <LargePost post={currentPost} deletePost={this.deletePost} key={currentPost._id}></LargePost>
        })
    }

    render() {
        return (
            <>
                {this.mainPost()}
                <div className='post-list-container'>
                    {this.postList()}
                </div>
            </>

        )
    }
}

