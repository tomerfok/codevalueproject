const { Router } = require('express');
const router = Router();
const { getLinks, getLink } = require('./links.controller');

router.get('/', async(req, res, next) => {
    try {
        const links = getLinks();
        res.send({ message: "Links: ", links });
    } catch (err) {
        next(err);
    }
});

router.get('/:path', async(req, res, next) => {
    try {
        const { path } = req.params;
        const links = getLink(path);
        res.send({ message: "Link:", links });
    } catch (err) {
        next(err);
    }
});

module.exports = router;