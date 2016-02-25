'use strict';
const Path = require("path");
const Package = require('./package.json');
const Hoek = require('Hoek');

exports.register = function (plugin, options, next) {

    const assetDirPath = Path.join(__dirname,  Path.sep + 'assets');
    const templateDirPath = Path.join(__dirname,  Path.sep + 'templates');

    let theme = {
        'name': Package.name,
        'version': Package.version,
        'templatePath': templateDirPath,
        'partialsPath': templateDirPath + Path.sep + 'withPartials',
        'halpersPath': templateDirPath + Path.sep + 'helpers',
        'groupPages': false,
        'groupItemPages': null,
        'assetPath': assetDirPath,
        'cssLinks': [
            'plain/css/plain.css',
            '//yui.yahooapis.com/pure/0.6.0/pure-min.css',
            '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/styles/tomorrow.min.css'
        ],
        'jsLinks': [
            'plain/js/plain.js',
            '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min.js'
        ]
    }

    if(Hoek.reach(Package, 'repository.url')){
        theme.url = Hoek.reach(Package, 'repository.url');
    }
    if(Hoek.reach(Package, 'license')){
        theme.license = Hoek.reach(Package, 'license');
    }

    next( theme );
}
