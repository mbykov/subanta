// returns object sups from file sup_cache.txt

var fs = require('fs');
var path = require('path');


var supCachePath = path.join(__dirname, './sup_cache.txt');
var supCaches = fs.readFileSync(supCachePath).toString().split('\n');

exports = module.exports = sup();

function sup() {
    if (!(this instanceof sup)) return new sup();
}

sup.prototype.get = function() {
    var sups = {};
    var term, size, gend, dict, svar, json;
    supCaches.forEach(function(cache) {
        if (cache == '') return;
        if (cache[0] == '#') return;
        [term, size, json] = cache.split('-');
        let morphs = JSON.parse(json);
        sups[term] = morphs;
    });
    return sups;
}
