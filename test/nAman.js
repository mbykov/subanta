//

// var should = require('should');

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

// var sups =  ['सु', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा', 'भ्याम्', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्', 'भ्यस्', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्'];
// sup tests from inria.fr, so voc placed after nom:
// var supkeys = {
//     'sg': ['सु', 'sg.voc', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा'],
//     'du': ['भ्याम्', 'du.voc', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्'],
//     'pl': ['भ्यस्', 'pl.voc', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्']
// };

var supkeys = {
    'sg': ['1.1', '8.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1'],
    'du': ['1.2', '8.2', '2.2', '3.2', '4.2', '5.2', '6.2', '7.2'],
    'pl': ['1.3', '8.3', '2.3', '3.3', '4.3', '5.3', '6.3', '7.3']
};

// здесь sups без vocs:
// var supkeys = {
//     'sg': ['सु', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा'],
//     'du': ['भ्याम्', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्'],
//     'pl': ['भ्यस्', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्']
// };

// var sups = require('../lib/sup-cache');

var supCachePath = path.join(__dirname, '../lib/sup_cache.txt');
var supCaches = fs.readFileSync(supCachePath).toString().split('\n');
var sups = [];
var term, size, gend, dict, svar, json;
// term, term.length, s.gend, s.dict, s.var, JSON.stringify(s.sups)
supCaches.forEach(function(cache) {
    if (cache == '') return;
    [term, size, gend, dict, svar, json] = cache.split('-');
    sups.push({term: term, size: size, dict: dict, var: svar, sups: JSON.parse(json)});
});



var files = fs.readdirSync('./test/nAman');

var tests = [];
for (var i in files) {
    // log(1, files[i]);
    if (files[i] != 'noun_neut-an.js') continue;
    var t = require('./nAman/' + files[i]);
    // var desc = t.desc;
    // var test = t.test;
    // log('F', files[i] );
    var fn = files[i];
    var gend = t.desc.gend;
    var svar = t.desc.var;
    var cons = (svar == 'cons') ? true: false;
    var sa, la;
    for (var pada in t.test) {
        if (pada == '') continue;
        [sa, la] = salat(pada);
        // if (cons) svar = la.slice(-1);
        log('SVAR', sa, la, svar);
        var nums = t.test[pada];
        // log('P', pada, nums);
        for (var num in nums) {
            var forms2 = nums[num];
            // log('G', num, forms2);
            var sup;
            // continue;
            forms2.forEach(function(form2, idx) {
                log('G-idx', idx, form2);
                sup = supkeys[num][idx];
                if (/8/.test(sup)) return;
                var forms = form2.split('-');
                forms.forEach(function(form) {
                    var test = {form: form, gend: gend, sa: sa, la: la, sup: sup, var: svar};
                    // log('G', idx, test);
                    // tests.push(test);
                });
            });
        }
    }
}
// log('T', tests.length);

// before(function() {
//     sups = require('../lib/sup-cache');
// });

//

tests.forEach(function(test, idx) {
    // if (idx != 2) return;
    // log('T', test);
    _Fn(test);
});



function _Fn(test) {
    var descr = [test.la, test.sa, test.form, ''].join('_');
    describe(descr, function(){
        var form = test.form;
        var fslp = salita.sa2slp(form);
        var title = [fslp, test.form, test.gend, test.sup, 'var', test.var, ' '].join('_');
        it(title, function() {
            var results = stemmer.query(form, sups);
            log('R', results);
            var rkeys = results.map(function(r) {return [r.gend, r.sups, r.var, r.pada].join('-'); });
            var key = [test.gend, test.sups, test.var, test.sa].join('-');
            if (!inc(rkeys, key)) p('err-test sup:', test.la, test.sa, ' form:', test.form, ' key:', key, rkeys);
            // inc(rkeys, key).should.equal(true);
        });
    });
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
