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

// forms queries for CouchDB:

stemmer.prototype.query = function(query, sups) {
    // log('INDEX', query, ' - ', salita.sa2slp(query));
    query = query.trim();
    var fin, sfin, beg, term, stem, pada;
    var fits = [];
    fin = query.slice(-1);
    sups.forEach(function(sup) {
        // log('S', sup);
        term = (sup.size == 0) ? '' : query.slice(-sup.size);
        if (term != sup.term) return;
        if (sup.size == 0 &! u.isConsonant(fin)) return;
        fits.push(sup);

        return;
        stem = (sup.size == 0) ? query : query.slice(0, -sup.size);
        // checkTaddhita(); checkKridanta();
        sfin = stem.slice(-1);
        beg = sup.dict[0];
        sup.stem = stem;
        // FIXME: вот тут интересно. Если sup - гласная, а stem на тоже гласную, то д.б. сандхи ? или этих правил достаточно?
        if (u.isVowel(beg) &! u.isConsonant(sfin)) return; // only cons + vowel
        else if (sfin == c.virama &! u.isConsonant(sfin)) return; // only virama + cons
        fits.push(sup);
    });
    p('FITS', fits);
    return [];

    // max здесь не работает, pada vidyA совпадает с другими terms:
    var excep = ['्य', 'न', 'ज', 'त', 'म', 'प', '्न']; // "ुनी" а нужно "नी"
    // var mmax, fmax, nmax = 0;
    var max = {masc: 0, fem: 0, neut: 0};
    var termstart;
    fits.forEach(function(sup) {
        // termstart = (sup.term[0] == c.virama) ? sup.term.slice(0,2) : sup.term.slice(0,1);
        // if (inc(excep, termstart)) return;
        if (sup.size > max[sup.gend]) max[sup.gend] = sup.size;
        // if (sup.gend == 'masc') mmax = (mmax >= sup.size) ? mmax : sup.size;
        // else if (sup.gend == 'fem') mmax = (fmax >= sup.size) ? fmax : sup.size;
        // else if (sup.gend == 'neut') mmax = (nmax >= sup.size) ? nmax : sup.size;
    });


    var res = [];
    fits.forEach(function(sup) {
        // if (sup.size < max[sup.gend]) return;
        // log(stem, JSON.stringify(sup));
        pada = [sup.stem, sup.dict].join('');
        sup.pada = pada;
        res.push(sup);
    });

    /*
      сделать res и выбросить sup для краткости - можно.
      сгруппировать по sup.term - можно, выигрыш - 900 строк - существенно
     */
    // return [];
    return res;
}
