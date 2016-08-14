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

/*
  - теперь обработать fits - вычислить stem и создать query для Couch
  - и прогнать так все тесты - которые теперь не могут не сходиться
  - постараться отбросить как можно больше query
  - как запускать flakes? Вторым запросом к Кауч, если нет результата иил всегда?
  -
*/

stemmer.prototype.query = function(form, sups) {
    // log('INDEX', form, ' - ', salita.sa2slp(form));
    form = form.trim();
    var queries = [];
    // var fits = [];
    let fin = form.slice(-1);
    let sup, morphs;
    let term;
    for (term in sups) {
        let fin, sfin, fterm, stem, pada, query;
        let size = term.length;
        morphs = sups[term];
        fterm = (size == 0) ? '' : form.slice(-size);
        if (fterm != term) continue;
        let morph, res;
        for (morph of morphs) {
            // log('term', term);
            if (size == 0 && morph.dict != 'न्') continue;
            stem = (size == 0) ? form : form.slice(0, -size);
            sfin = stem.slice(-1);
            if (sfin == c.virama &! u.isConsonant(sfin)) continue; // only virama + cons
            let beg = morph.dict[0];
            if (beg && u.isConsonant(sfin) && !u.isVowel(beg) && !u.isConsonant(beg)) continue; // only beg + cons + vow||cons
            pada = [stem, morph.dict].join('');
            res = {pada: pada, stem: stem, gend: morph.gend, dict: morph.dict, var: morph.var, sups: morph.sups, term: term};
            queries.push(res);
            // log('term', term, 'stem', stem, 'SFIN', sfin, 'g', morph.gend, 'v', morph.var, 'beg', beg);
            // p('TERM', term, morph);
        }
    }

    // return [];
    return queries;
}









    // max здесь не работает, pada vidyA совпадает с другими terms:
    // var excep = ['्य', 'न', 'ज', 'त', 'म', 'प', '्न']; // "ुनी" а нужно "नी"
    // // var mmax, fmax, nmax = 0;
    // var max = {masc: 0, fem: 0, neut: 0};
    // var termstart;
    // fits.forEach(function(sup) {
    //     // termstart = (sup.term[0] == c.virama) ? sup.term.slice(0,2) : sup.term.slice(0,1);
    //     // if (inc(excep, termstart)) return;
    //     if (sup.size > max[sup.gend]) max[sup.gend] = sup.size;
    //     // if (sup.gend == 'masc') mmax = (mmax >= sup.size) ? mmax : sup.size;
    //     // else if (sup.gend == 'fem') mmax = (fmax >= sup.size) ? fmax : sup.size;
    //     // else if (sup.gend == 'neut') mmax = (nmax >= sup.size) ? nmax : sup.size;
    // });


    // var res = [];
    // fits.forEach(function(sup) {
    //     // if (sup.size < max[sup.gend]) return;
    //     // log(stem, JSON.stringify(sup));
    //     pada = [sup.stem, sup.dict].join('');
    //     sup.pada = pada;
    //     res.push(sup);
    // });

    /*
      сделать res и выбросить sup для краткости - можно.
      сгруппировать по sup.term - можно, выигрыш - 900 строк - существенно
     */
    // return [];
    // return res;
