

const handlebars = require('handlebars');
module.exports = function (options) {
    return new handlebars.SafeString(options.fn(this).trim());
}