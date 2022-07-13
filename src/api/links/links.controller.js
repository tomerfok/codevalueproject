const { map } = require('../../crawler');

const getLinks = () => {
    try {
        return map;
    } catch (err) {
        throw (err);
    }
};

const getLink = (path) => {
    try {
        return map.get(path);
    } catch (err) {
        throw (err);
    }
};

module.exports = { getLinks, getLink };