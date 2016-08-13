// запись строк json-sups по файлам тестов


var debug = (process.env.debug == 'true') ? true : false;
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var salita = require('salita-component');
var s = require('sandhi');
var c = s.const;
var u = s.u;
var sandhi = s.sandhi;
var inc = u.include;
var log = u.log;
var p = u.p;
var stemmer = require('../index');

var supCachePath = path.join(__dirname, '../lib/sup_cache.txt');

var supkeys = {
    'sg': ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1'],
    'du': ['1.2', '2.2', '3.2', '4.2', '5.2', '6.2', '7.2', '8.2'],
    'pl': ['1.3', '2.3', '3.3', '4.3', '5.3', '6.3', '7.3', '8.3']
};

// var supsXX = require('../lib/sup-cache');

var files = fs.readdirSync('./test/nAman');

var supcache = {};
var termcache = {};
var supcheck = {};

for (var i in files) {
    if (files[i] != 'noun_fem-cons.js') continue;
    var t = require('../test/nAman/' + files[i]);
    if (!t.desc) continue;
    if (!t.tests) continue;
    log('FN', files[i]);

    var gend, dict, svar;
    gend = t.desc.gend;

    var sa, la;
    var sups = {};
    let terms = [];
    for (var pada in t.tests) {
        if (pada == '') continue;
        [sa, la] = salat(pada);
        // log('P', sa,la);

        if (t.desc.cons) {
            svar = la.slice(-1);
            dict = salita.slp2sa(svar);
        } else {
            dict = t.desc.dict;
            svar = t.desc.var;
        }

        var nforms = t.tests[pada]; // by numbers
        // log('F', nforms);
        var forms = allforms(nforms); // all forms in one line
        // log('PADA', pada, forms.length);
        var stem = parseStem(forms);
        log('STEM', stem);
        var term, supkey, re;
        // var json = parseSups(stem, nforms);
        for (var num in nforms) {
            var nform = nforms[num];
            // log('G', num, nform);
            nform.forEach(function(form2, idx) {
                if (idx == 7) return; // sambodhana
                var forms = form2.split('-');
                supkey = supkeys[num][idx];
                if (!sups[supkey]) sups[supkey] = [];
                forms.forEach(function(form) {
                    re = new RegExp('^' + stem);
                    term = form.replace(re, '');
                    // if (!inc(sups[supkey], term)) sups[supkey].push(term);
                    // druh - пока что:
                    if (svar == 'h') {
                        stem = term;
                        dict = sa;
                    }

                    let row = {term: term, gend: gend, dict: dict, var: svar, sup: supkey};
                    terms.push(row);
                });
            });
        }
    }

    // log(terms);
    // log(terms.length);
    let check = {};
    terms.forEach(function(t) {
        if (!termcache[t.term]) termcache[t.term] = [];
        let row = {gend: t.gend, dict: t.dict, var: t.var, sup: t.sup};
        let key = [t.term, t.gend, t.dict, t.var, t.sup].join('-');
        if (check[key]) return;
        termcache[t.term].push(row);
        check[key] = true;
    });

    // check = {};
    for (let term in termcache) {
        let rows = termcache[term];
        let gends = _.groupBy(rows, 'gend');
        // log('G', gends);
        for (let gend in gends) {
            let rows = gends[gend];
            let vars = _.groupBy(rows, 'var');
            // log('V', vars);
            for (let svar in vars) {
                let rows = vars[svar];
                let dict = rows[0].dict;
                let sups = _.map(rows, function(r) { return r.sup; });
                let json = JSON.stringify(sups);
                let key = [term, gend, dict, svar, json, json].join('-');
                if (supcheck[key]) continue;
                let row = {gend: gend, dict: dict, var: svar, sups: sups};
                if (!supcache[term]) supcache[term] = [];
                supcache[term].push(row);
                supcheck[key] = true;
                // log('R', row); //  'ेषु' ेषु
            }
        }
    }

    // log('CACHE', supcache);
    writeCache(supcache);
}

// log(termcache);
// p(supcache);
log(_.keys(supcache).length);



function writeCache(supcache) {
    fs.unlinkSync(supCachePath);
    var logger = fs.createWriteStream(supCachePath, {
        flags: 'a', // 'a' means appending (old data will be preserved)
        defaultEncoding: 'utf8'
    });
    logger.write('# term, term-size, json: [gend, dict, var, sups]\n');
    for (let term in supcache) {
        var s = supcache[term];
        // var row = [term, term.length, s.gend, s.dict, s.var, JSON.stringify(s.sups)].join('-');
        var row = [term, term.length, JSON.stringify(s)].join('-');
        logger.write(row);
        logger.write('\n');

    }
    logger.end();
}




// function parseSups(stem, nforms) {
//     var sups = {};
//     var sup, supkey, re;
//     for (var num in nforms) {
//         var nform = nforms[num];
//         // log('G', num, nform);
//         nform.forEach(function(form2, idx) {
//             var forms = form2.split('-');
//             supkey = supkeys[num][idx];
//             sups[supkey] = [];
//             forms.forEach(function(form) {
//                 re = new RegExp('^' + stem);
//                 sup = form.replace(re, '');
//                 sups[supkey].push(sup);
//             });
//         });
//     }
//     return sups;
// }



function allforms(nforms) {
    var res = [];
    for (var num in nforms) {
        var nform = nforms[num];
        // log('G', num, nform);
        nform.forEach(function(form2, idx) {
            var forms = form2.split('-');
            forms.forEach(function(form) {
                res.push(form);
            });
        });
    }
    return res;
}


// remove sambodhana ?
// sup = supkeys[num][idx];
// if (/8/.test(sup)) return;


function parseStem(forms) {
    var column;
    var syms = [];
    var stem;
    var idx = 0;
    // { 'तिप्': [ 'ज्योतति' ],
    var values = _.values(forms); // тут м.б. засада, если разные стемы? => 36 ?
    values = _.flatten(values);
    while(idx < 15) {
        column = values.map(function(form) { return form[idx];});
        var uniq = _.uniq(column);
        if (uniq.length > 1) break;
        syms.push(uniq[0]);
        idx++;
    };
    stem = syms.join('');
    return stem;
}


function salat(pada) {
    var sa, la;
    if (/[a-zA-Z0-1]/.test(pada[0])) {
        sa = salita.slp2sa(pada);
        la = pada;
    } else {
        sa = pada;
        la = salita.sa2slp(pada);
    }
    return [sa, la];
}
