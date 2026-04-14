import express from "express";
import { filterImageFromURL, deleteLocalFiles } from '../util/util.js';

export const router = express.Router();

router.get("/filteredimage", async (req, res) => {
    let { image_url } = req.query;

    if ( !image_url ) {
        return res.status(404).send(`Image URL is required. Try GET /filteredimage?image_url='Image Path'`);
    }

    filterImageFromURL(image_url)
    .then((imageURL) => {
        if (imageURL) {
            console.log('File send:', imageURL);
            res.sendFile(imageURL, (err) => {
                if (err) {
                    console.error('Error sending file:', err);
                    if (!res.headersSent) {
                        res.status(500).send('Error downloading file');
                    }
                } else {
                    console.log('File deleted:', imageURL);
                    deleteLocalFiles([imageURL]);
                }
            });
            //
        }
    })
    .catch((error) => {
        console.error('Image download failed', error);
        res.status(500).send('Image download failed');
    });
});