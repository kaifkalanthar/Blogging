const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const Post = require('./models/Post');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());


mongoose.connect('mongodb+srv://kaifkalanthar:kaifrestapi@cluster0.eezv8fi.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected");
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })
app.post('/api/post', upload.single('cover'), async (req, res) => {
    console.log(req.file);
    const createPost = await new Post({
        title: req.body.title,
        summary: req.body.summary,
        content: req.body.content,
        cover: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/png"
        },
    });
    createPost.save()
        .then((res) => console.log("done"))
        .catch((err) => {
            console.log(err);
        })
    res.json(createPost);
});

app.get("/api/post", async (req, res) => {
    res.json(await Post.find());
});

app.listen(4000, () => {
    console.log("Hey there!");
});