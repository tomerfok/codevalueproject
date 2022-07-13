const { map } = require('../../crawler');

const getAllLinks = () => {
    try {
        return map;
    } catch (err) {
        throw (err);
    }
};

const getLinks = (path) => {
    try {
        return map.get(path);
    } catch (err) {
        throw (err);
    }
};

module.exports = { getAllLinks, getLinks };