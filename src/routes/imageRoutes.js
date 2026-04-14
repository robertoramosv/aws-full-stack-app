import express from "express";
import { filterImageFromURL, deleteLocalFiles } from '../util/util.js';

export const router = express.Router();

router.get("/filteredimage", async (req, res) => {
    let { image_url } = req.query;

    if ( !image_url ) {
        return res.status(404).send(`Image URL is required.`);
    }

    filterImageFromURL(image_url)
    .then((imageURL) => {
        if (imageURL) {
            console.log('File sent: ', imageURL);
            res.sendFile(imageURL, (err) => {
                if (err) {
                    console.error('Error sending file: ', err);
                    if (!res.headersSent) {
                        res.status(500).send('Error downloading the file.');
                    }
                } else {
                    console.log('File deleted: ', imageURL);
                    deleteLocalFiles([imageURL]);
                }
            });
            //
        }
    })
    .catch((error) => {
        console.error('Image filtered API failed', error);
        res.status(500).send('Image filtered API failed.');
    });
});