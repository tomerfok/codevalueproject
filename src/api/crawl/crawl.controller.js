const { crawl } = require('../../crawlTask');

const crawlCall = async({ paths, depth, http }) => {
    try {
        return crawl(paths, depth, http);
    } catch (err) {
        throw (err);
    }
};

module.exports = { crawlCall };