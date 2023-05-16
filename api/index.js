require('dotenv').config();
const Joi = require('joi');
const bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
const _ = require('lodash');
const { User, user_validate } = require('./models/User');
const auth = require('./middleware/auth');
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const Post = require('./models/Post');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const uploadMiddleware = multer({ dest: 'uploads/' });
const port = process.env.PORT;
const db = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: false }));


mongoose.connect(db).then(() => {
    console.log("Connected");
})

app.post('/api/auth', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    const token = user.generateAuthToken();
    res.send(token);
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(req);
}

app.get("/api/auth", auth, async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
});

app.post("/api/register", async (req, res) => {
    // const { error } = user_validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(user, ["_id", "name", "email"]));
});


app.post('/post', uploadMiddleware.single('files'), async (req, res) => {
    console.log(req.file);
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    console.log(newPath);
    fs.renameSync(path, newPath);

    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
    });

    res.json(postDoc);
});

app.get('/post', async (req, res) => {
    res.json(await Post.find());
})

app.get('/post/:id', async (req, res)=>{
    const {id} = req.params;
    const postDoc = await Post.findById(id);
    res.json(postDoc);
})

app.listen(port, () => {
    console.log("Hey there!");
});
