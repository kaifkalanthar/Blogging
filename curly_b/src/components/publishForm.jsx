import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import http from '../service/httpService';
import apiUrl from '../config.json';

const PublishForm = () => {
    const [post, setPost] = useState({
        title: "",
        description: "",
        file: [],
    });
    const [content, setContent] = useState("");
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
        data.append('title', post.title);
        data.append('summary', post.description);
        data.append('cover', post.data);
        data.append('content', content);
        await http.post('http://localhost:4000/api/post', data)
            .then(res => {
                console.log(res.data + 'this is data after api call');
            })
            .catch(err => console.log(err));
    }

    const handleFile = ({ target: input }) => {
        setPost({
            ...post,
            file: input.files[0],
        });
        console.log(post);
    }

    const handleChange = ({ currentTarget: input }) => {
        const data = { ...post };
        data[input.name] = input.value;
        setPost(data);
    }

    const renderInput = (placeholder, name, type = "text") => {
        return (<>
            <input
                type={type}
                className="input"
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
            /><br />
        </>);
    }


    return (
        <form className="form-container" id="pb-form" onSubmit={doSubmit}>
            <h1 className="form-header">Post your creative blog here!</h1>
            {renderInput("Title", "title")}
            {renderInput("Description", "description")}
            <input
                type="file"
                className="input"
                placeholder="File"
                name="file"
                onChange={e => handleFile(e)}
            /><br />
            <ReactQuill className='Quill' modules={modules} name='content' onChange={newValue => (setContent(newValue))} />
            <button type="submit" className="btn" id="form-btn">Publish</button>
        </form>
    );
}

export default PublishForm;