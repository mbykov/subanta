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
    var fin, sfin, beg, term, stem, pada;
    var res = [];
    fin = query.slice(-1);
    log('F', sups.length);
    sups.forEach(function(sup, idx) {
        term = (sup.size == 0) ? '' : query.slice(-sup.size);
        if (term != sup.term) return;
        if (sup.size == 0 &! u.isConsonant(fin)) return;
        stem = (sup.size == 0) ? query : query.slice(0, -sup.size);
        // checkTaddhita(); checkKridanta();
        sfin = stem.slice(-1);
        beg = sup.dict[0];
        // FIXME: вот тут интересно. Если sup - гласная, а stem на тоже гласную, то д.б. сандхи ? или этих правил достаточно?
        if (u.isVowel(beg) &! u.isConsonant(sfin)) return; // only cons + vowel
        else if (sfin == c.virama &! u.isConsonant(sfin)) return; // only virama + cons
        // log(stem, JSON.stringify(sup));
        pada = [stem, sup.dict].join('');
        sup.stem = stem;
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
