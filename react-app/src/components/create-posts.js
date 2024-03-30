import React, {Component} from "react";
import axios from "axios";
import "../stylesheets/CreatePost.css"


export default class CreatePosts extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            content: "",
            date: new Date(),
            title: "",
            users: [],
            tags: []
        }
    }



    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
               if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        tags: response.data.map(post => post.tags)
                 })
            }
       })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onChangeTitle(e)
    {
        this.setState({
            title: e.target.value
        });
    }
    onChangeTags(e) {
        this.setState({
            tags: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const post = {
            username: this.state.username,
            content: this.state.content,
            date: this.state.date,
            title: this.state.title,
            tags: this.state.tags
        }

        console.log(post);
        axios.post('http://localhost:5000/posts/add', post)
            .then(res => console.log(res.data));

        window.location='/';
    }

    render() {
        return (
                <>
                    <div className='createpost-container'>
                        <form onSubmit={this.onSubmit} onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}>
                            <div className='input-container'>
                                <div>
                                    Name
                                </div>
                                <input  type="text"
                                        required
                                        className="content-input"
                                        placeholder='Name'
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                />
                            </div>
                            <div className='input-container'>
                                <div>
                                    Content
                                </div>
                                <input  type="text"
                                        required
                                        className="content-input"
                                        placeholder='Whats on your mind'
                                        value={this.state.content}
                                        onChange={this.onChangeContent}
                                />
                            </div>
                            <div className='input-container'>
                                <div>
                                    Title
                                </div>
                                <input  type="text"
                                        required
                                        className="content-input"
                                        placeholder='Title'
                                        value={this.state.title}
                                        onChange={this.onChangeTitle}
                                />
                            </div>
                            <input type="submit" value="Bark" className="submit-button" />
                        </form>
                    </div>
                </>
        )
    }
}