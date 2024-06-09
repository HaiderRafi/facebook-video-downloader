const express = require('express');
const getFbVideoInfo = require('fb-downloader-scrapper');
const cors = require('cors');


const app = express();
app.use(cors());
const port = 3000;

app.get('/video-info', (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).send('Please provide a video URL');
    }

    getFbVideoInfo(videoUrl)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).send(err.toString());
        });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

