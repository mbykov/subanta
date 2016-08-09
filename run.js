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

// var osup = require('./lib/sup');
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

if (find) log('subanta find:', lat, form);
else log('subanta parse:', lat, form);

var eu =  ['sg.nom', 'sg.acc', 'sg.ins', 'sg.dat', 'sg.abl', 'sg.gen', 'sg.loc', 'sg.voc', 'du.nom', 'du.acc', 'du.ins', 'du.dat', 'du.abl', 'du.gen', 'du.loc', 'du.voc', 'pl.nom', 'pl.acc', 'pl.ins', 'pl.dat', 'pl.abl', 'pl.gen', 'pl.loc', 'pl.voc'];
var hi =  ['सु', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा', 'भ्याम्', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्', 'भ्यस्', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्'];


// var sups = [];
// var sups = require('./lib/sup-cache');
// FIXME: запись в файл, чтение оттуда
// var sups = require('./lib/make_sup_cache');

var supCachePath = path.join(__dirname, './lib/sup_cache.txt');
var supCaches = fs.readFileSync(supCachePath).toString().split('\n');
var sups = [];
var term, size, json;
supCaches.forEach(function(cache) {
    if (cache == '') return;
    [term, size, json] = cache.split('-');
    sups.push({term: term, size: size, data: JSON.parse(json)});
});

// p(111, sups);


console.time("queryTime");

var queries = subanta.query(form, sups);
// var queries = [];

// ==============
var strs = queries.map(function(q) { return JSON.stringify(q)});
log(strs);
log('qs size:', queries.length);

console.timeEnd("queryTime");
