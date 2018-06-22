const path = require('path')
const webpack = require('webpack')
const childProcess = require('child_process')
const config = require('./webpack-config')

const compiler = webpack(config);
let appProcess = null;

process.on('beforeExit', () => {
    if (appProcess !== null) {
        appProcess.kill('SIGKILL');
        appProcess = null;
    }
});

compiler.watch({ aggregateTimeout: 500 }, (error, stats) => {
    if (error) {
        throw error;
    }
    if (stats.hasErrors()) {
        throw stats.compilation.errors.join('\n');
    }
    // ... on next slide
    if (appProcess !== null) {
        appProcess.kill('SIGKILL');
        appProcess = null;
    }
    if (appProcess === null) {
        const outputDirectory = stats.compilation.compiler.outputPath;
        const outputFile = stats.toJson().assetsByChunkName.main;
        const out = Array.isArray(outputFile) ? outputFile[0] : outputFile;

        if (!outputFile) {
            throw new Error('Chunk has no assets');
        }

        const outputPath = path.join(outputDirectory, out);
        appProcess = childProcess.fork(outputPath, { execArgv: ['--inspect=9229'] });
    }
});
