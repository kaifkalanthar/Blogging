import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style/blogform.css';

function BlogForm() {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
    };
    async function doSumbit(e) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('file', files[0]);
        data.set('content', content);

        e.preventDefault();
        await fetch("http://localhost:4000/post", {
            method: 'POST',
            body: data,
        })

        window.location = "/";
    }
        return (
            <React.Fragment>
                <div id="form">
                    <form id="container" onSubmit={doSumbit}>
                        <h1>Create Blog</h1>
                        <input
                            type="title"
                            placeholder={'Title'}
                            id="getter"
                            onChange={e => { setTitle(e.target.value) }} />
                        <input type="summary"
                            placeholder={'Summary'}
                            id="getter"
                            onChange={e => { setSummary(e.target.value) }}
                        />
                        <input type="file"
                            id="getter"
                            onChange={e => { setFiles(e.target.files) }} />
                        <ReactQuill id="quill"
                            onChange={newValue => setContent(newValue)}
                            modules={modules} />
                        <button
                            type="submit"
                            id="publish-button">
                            Publish
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
}

export default BlogForm;