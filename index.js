// subanta.js

var fs = require('fs');
var util = require('util');
var _ = require('underscore');
// var slp = require('../sandhi/slp');
var path = require('path');
var s = require('sandhi');
var c = s.const;
var u = s.u;
var sandhi = s.sandhi;
var inc = u.include;
var log = u.log;
var p = u.p;
var salita = require('salita-component');
// var sha1 = require('sha1');


exports = module.exports = stemmer();

function stemmer() {
    if (!(this instanceof stemmer)) return new stemmer();
}



// =========================================== QUERY

// переименовать в find, и в run.js тоже
stemmer.prototype.query = function(query, sups) {
    log('INDEX', query, ' - ', salita.sa2slp(query));
    var fin;
    sups.forEach(function(sup, idx) {
        fin = (sup.size == 0) ? '' : query.slice(-sup.size);
        if (fin != sup.term) return;
        log(fin, JSON.stringify(sup));
    });
    return [];
}
