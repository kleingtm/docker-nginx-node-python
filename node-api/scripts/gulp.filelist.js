/**
 * Created by tkleingers on 7/23/16.
 */

var path = require('path');
var params = require('./build-params');

module.exports = {
    js_clean: [
        path.resolve(params.bin, '**/*.{js,ts}'),
        path.resolve(params.bin, '**/*.map')
        // path.resolve(__dirname, '../bin/**/*.{js,ts}'),
        // path.resolve(__dirname, '../bin/**/*.map')
    ],
    js: [
        path.resolve(params.src, '**/*.{js,ts}')
        // path.resolve(__dirname, '../src/**/*.{js,ts}')
    ],
    json_clean: [
        path.resolve(params.bin, '**/*.json')
        //path.resolve(__dirname, '../bin/**/*.json')
    ],
    json: [
        path.resolve(params.src, '**/*.json')
        // path.resolve(__dirname, '../src/**/*.json')
    ]
};