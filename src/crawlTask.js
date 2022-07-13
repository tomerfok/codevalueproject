const crawlUrls = require('./crawler');
const { crawlEvent } = require('./utils/eventEmitter');

// let depth = +process.env.DEPTH || 2;
// depth = depth < 5 ? depth : 5;
// Getting depth from request so meaningless

async function crawl(paths, depth, http) {
    initialPath = paths[0];
    const links = await crawlUrls(paths, depth, http, initialPath);
    console.log('links:', links);
}

crawlEvent.on('crawl_event', (paths) => {
    console.log("Event of crawl: " + paths);
});

module.exports = { crawl };

// crawl(['htmls/1.html'], false, 'htmls/1.html')
//     .then((links) => console.log("worked"));