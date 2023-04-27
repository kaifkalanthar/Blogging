import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import http from '../service/httpService';
import apiUrl from '../config.json';

const PublishForm = () => {
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

    const doSubmit = async (e) => {
        e.preventDefault();

        let data = new FormData();
        data.append('title', title);
        data.append('summary', summary);
        data.append('files', files[0]);
        data.append('content', content);
        const res = await http.post('http://localhost:4000/post', data);

    }


    const renderInput = (placeholder, name, type = "text") => {
        return (<>
            <input
                type={type}
                className="input"
                placeholder={placeholder}
                name={name}
                value={e => e.target.value}
            /><br />
        </>);
    }


    return (
        <form className="form-container" id="pb-form" onSubmit={doSubmit}>
            <h1 className="form-header">Post your creative blog here!</h1>
            <input
                type="text"
                className="input"
                placeholder="Title"
                name="title"
                onChange={e => { setTitle(e.target.value) }}
            /><br />
            <input
                type="text"
                className="input"
                placeholder="Summary"
                name="summary"
                onChange={e => { setSummary(e.target.value) }}
            /><br />
            <input
                type="file"
                className="input"
                placeholder="File"
                name="file"
                onChange={e => { setFiles(e.target.files) }}
            /><br />
            <ReactQuill className='Quill' modules={modules} name='content' onChange={newValue => (setContent(newValue))} />
            <button type="submit" className="btn" id="form-btn">Publish</button>
        </form>
    );
}

export default PublishForm;