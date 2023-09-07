import React, {Component} from "react";
import '../stylesheets/PostList.css';
import axios from "axios";


const Post = props => (
    <div className='post' style={{background: props.post.color}}>
        <div className='content'>
            {props.post.content}
        </div>
        <div className='username'>
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
        return this.state.posts.map(currentPost => {
            return <Post post={currentPost} deletePost={this.deletePost} key={currentPost._id}></Post>
        })
    }

    render() {
        return (
            <>
                <div className='post-list-container'>
                    {this.postList()}
                </div>
            </>

        )
    }
}

