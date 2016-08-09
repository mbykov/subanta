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

var supkeys = {
    'sg': ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1'],
    'du': ['1.2', '2.2', '3.2', '4.2', '5.2', '6.2', '7.2', '8.2'],
    'pl': ['1.3', '2.3', '3.3', '4.3', '5.3', '6.3', '7.3', '8.3']
};

var sups = require('../lib/sup-cache');

var files = fs.readdirSync('./test/nAman');

var tests = [];
for (var i in files) {
    // log(1, files[i]);
    if (files[i] != 'noun_neut-an.js') continue;
    var t = require('../test/nAman/' + files[i]);
    var fn = files[i];
    var gend = t.desc.gend;
    var svar = t.desc.var;
    log(1, fn, gend, svar);
    // log(2, t.test);
    var sa, la;
    for (var pada in t.test) {
        if (pada == '') continue;
        [sa, la] = salat(pada);
        // log('P', sa,la);
        var nforms = t.test[pada]; // by numbers
        // log('F', nforms);
        var forms = allforms(nforms); // all forms in a line
        log(pada, forms.length);
        var stem = parseStem(forms);
        log('STEM', stem);
        var json = parseSups(stem, nforms);
        log('JSON', json);
        continue;

        // log('P', pada, nums);
        // for (var num in nums) {
        //     var forms2 = nums[num];
        //     // log('G', num, forms2);
        //     var sup;
        //     forms2.forEach(function(form2, idx) {
        //         // log('G', idx, form2);
        //         sup = supkeys[num][idx];
        //         if (/8/.test(sup)) return;
        //         var forms = form2.split('-');
        //         forms.forEach(function(form) {
        //             var test = {form: form, gend: gend, sa: sa, la: la, sup: sup, var: svar};
        //             // log('G', idx, test);
        //             tests.push(test);
        //         });
        //     });
        // }
    }
}

function parseSups(stem, nforms) {
    var sups = {};
    var sup, supkey, re;
    for (var num in nforms) {
        var nform = nforms[num];
        // log('G', num, nform);
        nform.forEach(function(form2, idx) {
            var forms = form2.split('-');
            supkey = supkeys[num][idx];
            sups[supkey] = [];
            forms.forEach(function(form) {
                re = new RegExp('^' + stem);
                sup = form.replace(re, '');
                sups[supkey].push(sup);
            });
        });
    }
    return sups;
}



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
