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
var sups = require('./lib/getSups').get();

exports = module.exports = stemmer();

function stemmer() {
    if (!(this instanceof stemmer)) return new stemmer();
}


stemmer.prototype.query = function(form) {
    var queries = [];
    let fin = form.slice(-1);
    let sup, morphs;
    let term;
    for (term in sups) {
        let fin, sfin, fterm, stem, pada, query;
        let size = term.length;
        morphs = sups[term];
        fterm = (size == 0) ? '' : form.slice(-size);
        if (fterm != term) continue;
        let morph;
        for (morph of morphs) {
            if (size == 0 && morph.dict != 'न्') continue;
            stem = (size == 0) ? form : form.slice(0, -size);
            sfin = stem.slice(-1);
            if (sfin == c.visarga) continue;
            if (sfin == c.virama & !u.isConsonant(sfin)) continue; // only virama + cons
            if (morph.dict == '' && !u.isConsonant(sfin)) continue;
            let beg = morph.dict[0];
            if (beg && u.isConsonant(sfin) && !u.isVowel(beg) && !u.isConsonant(beg)) continue; // only beg + cons + vow||cons
            pada = [stem, morph.dict].join('');
            let slp = salita.sa2slp(pada);
            let res = {pada: pada, slp: slp, name: true, stem: stem, gend: morph.gend, dict: morph.dict, var: morph.var, sups: morph.sups, term: term, size: size};
            queries.push(res);
        }
    }
    // if (queries.length == 0) {
        let plain = {plain: true, pada: form, gend: 'mfn', slp: salita.sa2slp(form)}; // FIXME: gend?
        queries.push(plain);
    // }
    return queries;
}
