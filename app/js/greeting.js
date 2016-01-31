/*global module */

module.exports = function(name) {
    'use strict';

    let category = 'user';

    let url = `http://apiserver/${category}/${name}`;

    console.log('Hello ' + name + ' ' + url);
};
