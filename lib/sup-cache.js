// subanta.js
// это убрать, это создание объекта sups-cache на лету каждый раз

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

// sups ordes follows sup.js - nom, acc, ... loc, voc :

// var supkeys = ['सु', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा', 'sg.voc', 'भ्याम्', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्', 'du.voc', 'भ्यस्', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्', 'pl.voc'];
var supkeys = ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1', '1.2', '2.2', '3.2', '4.2', '5.2', '6.2', '7.2', '8.2', '1.3', '2.3', '3.3', '4.3', '5.3', '6.3', '7.3', '8.3'];


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
            var line, sup;
            var idx = 0;
            for (var suplat in oterm) {
                if (suplat == 'dict') continue;
                sup = supkeys[idx];
                // voc вынести
                idx += 1;
                // if (sup == 'sg.voc' || sup == 'du.voc' || sup == 'pl.voc') continue;
                if (sup == '8.1' || sup == '8.2' || sup == '8.3') continue;
                term2 = oterm[suplat].split('-');
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
