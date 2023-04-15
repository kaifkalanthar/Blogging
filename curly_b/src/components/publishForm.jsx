import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PublishForm = () => {
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
    return (
        <div className="form-container" id="pb-form">

            <h1 className="form-header">Post your creative blog here!</h1>
            <input type="text" className="input" placeholder='Title' /><br />
            <input type="text" className="input" placeholder='Description' /><br />
            <input type="file" id="f-input" />
            <ReactQuill className='Quill' modules={modules} />
            <button className="btn" id="form-btn">Publish</button>
        </div>
    );
}

export default PublishForm;