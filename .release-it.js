'use strict';
const common = require('./utils/common');
const extName = common.getCleanExtensionName();

module.exports = {
    'github': {
        'release': true,
        'releaseName': 'v${version}',
        'tokenRef': 'GITHUB_TOKEN',
        'assets': `dist/${extName}` + '-v${version}.zip',
    },
    'npm': {
        'publish': false,
    },
    'git': {
        'requireCleanWorkingDir': true,
        'commitMessage': 'Release ${version}',
        'pushRepo': 'origin',
        'tagName': 'v${version}',
        'requireCommits': true,
    },
    'plugins': {
        '@release-it/conventional-changelog': {
            'preset': 'angular',
            'infile': 'CHANGELOG.md',
            'ignoreRecommendedBump': true,
        },
    },
    'hooks': {
        'after:bump': ['npm run build && npm run create-zip'],
        'after:git:release': 'echo Stage: After git push, before github release;',
        'after:release': [
            'echo Successfully released ${name} v${version} to ${repo.repository}',
            'opener https://${repo.host}/${repo.repository}/releases/tag/v${version}',
        ],
    },
};
