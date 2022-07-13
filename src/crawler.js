const scrapeLinks = require('./utils/scraper');
const { crawlEvent } = require('./utils/eventEmitter');

let totalPaths = [];
let map = new Map();

module.exports = async function crawlUrls(paths, depth, http, initialPath) {

    paths = (await Promise.all(paths.map(path => scrapeLinks(path, false)))).flat();
    crawlEvent.emit('crawl_event', paths);
    totalPaths = [...totalPaths, ...paths];

    depth = depth - 1;
    if (depth === 0) {
        console.log(saveResults(initialPath));
        return totalPaths;
    }
    return crawlUrls(paths, depth, http, initialPath);
}

function saveResults(initialPath) {
    map.set(initialPath, totalPaths);
    return map;
}

module.exports = { map };