const fs = require('fs-extra');
const zl = require('zip-lib');
const path = require('path');
const {version} = require('../package.json');
const common = require('./common');

const extName = common.getCleanExtensionName();
const zipName = `${extName}-v${version}.zip`;

const DIST_FOLDER = './dist';
fs.ensureDirSync(DIST_FOLDER);

const zipPath = path.join(DIST_FOLDER, zipName);

fs.removeSync(zipPath);

zl.archiveFolder('./build', zipPath).then(function () {
    console.log('zip created');
}, function (err) {
    console.log(err);
});
