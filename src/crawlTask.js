const crawlUrls = require('./crawler');
const { crawlEvent } = require('./utils/eventEmitter');

let depth = +process.env.DEPTH || 2;
if (depth > 5)
    depth = 5;

async function crawl(paths, http, initialPath) {
    const links = await crawlUrls(paths, depth, http, initialPath);
    console.log('links:', links);
}

crawlEvent.on('crawl_event', (paths) => {
    console.log("Event of crawl: " + paths);
});

crawl(['htmls/1.html'], false, 'htmls/1.html')
    .then((links) => console.log("worked"));