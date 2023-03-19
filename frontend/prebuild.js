const fs = require('fs');
const cp = require('child_process');
const package = require('./package.json');

const buildTimestamp = Date.now();
const shortHash = cp.execSync('git rev-parse --short HEAD').toString().slice(0, -1)
const fullHash = cp.execSync('git rev-parse HEAD').toString().slice(0, -1);
const commitLink = `https://github.com/Levsha1337/nightmare-helper/commit/${fullHash}`;
const version = package.version;

const data = {
    buildTimestamp: buildTimestamp,
    commitHash: shortHash,
    commitFullHash: fullHash,
    commitLink: commitLink,
    version: version
}

fs.writeFileSync('prebuild-values.json', JSON.stringify(data));
