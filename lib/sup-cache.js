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
var rawsup = require('./sup');

// var salita = require('salita-component');
// var sha1 = require('sha1');


exports = module.exports = sups();

function sups() {
    var res = [];
    for (var gend in rawsup) {
        var affs = rawsup[gend];
        // log(num, affix);
        for (var aff in affs) {
            var oterm = affs[aff];
            var dict = oterm['dict'];
            var term, term2;
            var line;
            for (var sup in oterm) {
                if (sup == 'dict') continue;
                term2 = oterm[sup].split('-');
                term2.forEach(function(term) {
                    line = {gend: gend, sup: sup, term: term, size: term.length, dict: dict, var: aff};
                    res.push(line);
                });
            }
            // log(gend, aff, dict);
        }
    }
    // p(res);
    return res;
}



// =========================================== QUERY

// переименовать в find, и в run.js тоже
// sups.prototype.query = function(query, sups) {
//     p('SUP', sups.slice(0,9));
//     return [];
// }
