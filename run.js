/*
  node run.js eva
*/

var lat = process.argv.slice(2)[0] || false;
var find = process.argv.slice(3)[0] || false;

var _ = require('underscore');
var util = require('util');
var salita = require('salita-component');

var path = require('path');
var fs = require('fs');

var osup = require('./lib/sup');
var subanta = require('./index');
var s = require('sandhi');
// var c = s.const;
var u = s.u;
// var sandhi = s.sandhi;
var log = u.log;
var p = u.p;

if (!lat) return log('?');

var form;
if (/[a-zA-Z0-1]/.test(lat[0])) {
    form = salita.slp2sa(lat);
} else {
    form = lat;
    lat = salita.sa2slp(form);
}

if (find) log('subanta find:', lat, form); // लोकृ्-लोक् // लोचृ्-लोच्// प्-पा
else log('subanta parse:', lat, form);

var eu =  ['sg.nom', 'sg.acc', 'sg.ins', 'sg.dat', 'sg.abl', 'sg.gen', 'sg.loc', 'sg.voc', 'du.nom', 'du.acc', 'du.ins', 'du.dat', 'du.abl', 'du.gen', 'du.loc', 'du.voc', 'pl.nom', 'pl.acc', 'pl.ins', 'pl.dat', 'pl.abl', 'pl.gen', 'pl.loc', 'pl.voc'];
var hi =  ['सु', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा', 'भ्याम्', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्', 'भ्यस्', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्'];


var sups = [];

for (var gend in osup) {
    var affs = osup[gend];
    // log(num, affix);
    for (var aff in affs) {
        var oterm = affs[aff];
        var dict = oterm['dict'];
        var term, term2;
        for (var sup in oterm) {
            if (sup == 'dict') continue;
            term2 = oterm[sup].split('-');
            term2.forEach(function(term) {
                sup = {gend: gend, sup: sup, term: term, size: term.length, dict: dict};
                sups.push(sup);
            });
        }
        // log(gend, aff, dict);
    }
}


console.time("queryTime");

var queries = subanta.query(form, sups);

// ==============
p(queries);
log('qs size:', queries.length);

console.timeEnd("queryTime");
