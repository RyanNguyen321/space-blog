import React, {Component} from "react";
import axios from "axios";
import "../stylesheets/CreatePost.css"



export default class EditPost extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            content: "",
            description: "",
            date: new Date(),
            users: []
        }
    }

    //dont need this really
    //componentDidMount() {
    //    this.setState({
    //        users: ["test user"],
    //        username: 'test user'
    //    })
    //}

    // full version of the method
    componentDidMount() {
        axios.get('http://localhost:5000/posts/'+ this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    content: response.data.content,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
        })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
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

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            username: this.state.username,
            content: this.state.constructor,
            description: this.state.description,
            date: this.state.date
        }

        console.log(post);
        axios.post('http://localhost:5000/posts/update/' + this.props.match.params.id, post)
            .then(res => console.log(res.data));

        window.location='/';
    }

    render() {
        return (
            <>
                <div className='createpost-container'>
                    <h3>Edit Bark</h3>
                    <form onSubmit={this.onSubmit} >
                        <input  type="text"
                                required
                                className="content-input"
                                placeholder='What is on your mind'
                                value={this.state.content}
                                onChange={this.onChangeContent}
                        />
                        <input type="submit" value="Edit Bark" className="submit-button" />
                    </form>
                </div>
            </>
        )
    }
}