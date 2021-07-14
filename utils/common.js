const filenamify = require('filenamify');
const {name} = require('../src/manifest.json');

const getCleanExtensionName = () => {
    return filenamify(name, {replacement: '_'});
};

module.exports = {getCleanExtensionName};
