/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var path = require('path');

// Filters out non .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function(name) {
    return (/(\.(js)$)/i).test(path.extname(name));
};
