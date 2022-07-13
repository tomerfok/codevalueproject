const { Router } = require('express')
const router = Router();
const { preLogApi } = require('./middlewares');
const crawlRouter = require('./crawl/crawl.router');
const linksRouter = require('./links/links.router');

router.use(preLogApi);

router.use('/crawl', crawlRouter);
router.use('/links', linksRouter);

export default router;