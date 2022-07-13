const { Router } = require('express');
const router = Router();
const { crawlCall } = require('./crawl.controller');

router.post('/', async(req, res, next) => {
    try {
        if (depth > 5)
            throw new Error("Maximum depth exceeded");
        crawlCall(req.body);
        res.status(202).send({ message: "Crawler and logged succefully" });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;