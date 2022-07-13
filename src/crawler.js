const scrapeLinks = require('./utils/scraper');
// const linkEvent;

const events = require('events');

let totalPaths = [];

module.exports = async function crawlUrls(paths, depth, http, initialPath) {

    paths = (await Promise.all(paths.map(path => scrapeLinks(path, false)))).flat();
    events.EventEmitter.emit('crawl_event', paths);
    totalPaths = [...totalPaths, ...paths];

    depth = depth - 1;
    if (depth === 0) {
        console.log(saveResults(initialPath));
        return totalPaths;
    }
    return crawlUrls(paths, depth, http, initialPath);
}

function saveResults(initialPath) {
    let map = new Map();
    map.set(initialPath, totalPaths);
    return map;
}