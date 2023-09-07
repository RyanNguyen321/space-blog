import React, {Component} from "react";
import axios from "axios";
import "../stylesheets/CreatePost.css"


export default class CreatePosts extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            content: "",
            date: new Date(),
            color: "red",
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

    onChangeColor(e) {
        this.setState({
            color: e.target.value
        });
    }

    changePreviewColor(e)
    {
        let el = document.getElementById("post-preview");
        el.style.background = e.target.value;
        // let red = parseInt(e.target.value.substring(1,3), 16);
        // let blue = parseInt(e.target.value.substring(3,5), 16);
        // let green = parseInt(e.target.value.substring(5,7), 16);
        // let rgba  = ("rgba(" + red + "," + blue + "," + green + ",1)");
        //
        // let newRed = red;
        // let newBlue = blue;
        // let newGreen = green;
        //
        // if (red < 30) {
        //     newRed = 0;
        // }
        // else {
        //     newRed = red - 30;
        // }
        //
        // if (blue < 30) {
        //     newBlue = 0;
        // }
        // else {
        //     newBlue = blue - 30;
        // }
        //
        // if (green < 30) {
        //     newGreen = 0;
        // }
        // else {
        //     newGreen = green - 30;
        // }
        //
        // let newRgba  = "rgba(" + newRed + "," + newBlue + "," + newGreen + ",1)"


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
            color: this.state.color,
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
                                    Quote
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
                                Select a Color
                                <fieldset onChange={this.onChangeColor} >
                                    <input onClick={this.changePreviewColor} type="radio" name="color" value="#FFD966" style={{background: "#FFD966"}} required/>
                                    <input onClick={this.changePreviewColor} type="radio" name="color" value="#7286D3" style={{background: "#7286D3"}}/>
                                    <input onClick={this.changePreviewColor} type="radio" name="color" value="#FD8A8A" style={{background: "#FD8A8A"}}/>
                                    <input onClick={this.changePreviewColor} type="radio" name="color" value="#829460" style={{background: "#829460"}}/>
                                    <input onClick={this.changePreviewColor} type="radio" name="color" value="#116A7B" style={{background: "#116A7B"}}/>
                                </fieldset>
                            </div>


                            {/*Post preview*/}
                            <div className='post-preview' id="post-preview">
                                <div className='content'>
                                    {this.state.content}
                                </div>
                                <div className='username'>
                                    "{this.state.username}"
                                </div>
                            </div>
                            <input type="submit" value="Bark" className="submit-button" />
                        </form>
                    </div>
                </>
        )
    }
}