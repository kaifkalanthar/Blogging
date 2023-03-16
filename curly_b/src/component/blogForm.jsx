import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style/blogform.css';

class BlogForm extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div id="form">
                    <form id="container">
                        <h1>Create Blog</h1>
                        <input type="title" placeholder={'Title'} id="getter" />
                        <input type="summary" placeholder={'Summary'} id="getter" />
                        <input type="file" id="getter" />
                        <ReactQuill id="quill" />
                        <button id="publish-button">Publish</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default BlogForm;