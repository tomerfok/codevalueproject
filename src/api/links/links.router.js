const { Router } = require('express');
const router = Router();
const { getAllLinks, getLinks } = require('./links.controller');

router.get('/', async(req, res, next) => {
    try {
        const links = getAllLinks();
        res.status(200).send({ message: "Links: ", links });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/:path', async(req, res, next) => {
    try {
        const { path } = req.params;
        const links = getLinks(path);
        if (!links)
            throw new Error("Specified 'path' doesn't exist in the repository");
        res.status(200).send({ message: "Link:", links });
    } catch (err) {
        res.status(404).send(err);
    }
});

module.exports = router;