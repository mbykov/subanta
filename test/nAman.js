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
var supkeys = {
    'sg': ['सु', 'sg.voc', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा'],
    'du': ['भ्याम्', 'du.voc', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्'],
    'pl': ['भ्यस्', 'pl.voc', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्']
};

// var sups = require('../lib/sup-cache');
// var tests = [];
// var files = fs.readdirSync('./test/nAman');

// for (var i in files) {
//     var rtests = require('./nAman/' + files[i]);
//     // log('F', rtests);
//     // log(1, rtests.desc);
//     var gend = rtests.desc.gend;
//     var svar = rtests.desc.var;
//     var sa;
//     for (var pada in rtests.tests) {
//         if (pada == '') continue;
//         sa = salita.slp2sa(pada);
//         var nums = rtests.tests[pada];
//         // log('P', pada, nums);
//         for (var num in nums) {
//             var forms = nums[num];
//             // log('G', num);
//             var sup;
//             forms.forEach(function(form, idx) {
//                 sup = supkeys[num][idx];
//                 var test = {form: form, gend: gend, pada: sa, sup: sup, var: svar};
//                 tests.push(test);
//             });
//         }
//     }
// }

// var test = tests[0];
// log('T', test);


// var q = stemmer.query(test.form, sups);
// p(q)

log('HERE');


var sups = require('../lib/sup-cache');

var files = fs.readdirSync('./test/nAman');

var tests = [];
for (var i in files) {
    var rtests = require('./nAman/' + files[i]);
    // log('F', rtests);
    // log(1, rtests.desc);
    var gend = rtests.desc.gend;
    var svar = rtests.desc.var;
    var sa;
    for (var pada in rtests.tests) {
        if (pada == '') continue;
        sa = salita.slp2sa(pada);
        var nums = rtests.tests[pada];
        // log('P', pada, nums);
        for (var num in nums) {
            var forms = nums[num];
            // log('G', num);
            var sup;
            forms.forEach(function(form, idx) {
                sup = supkeys[num][idx];
                var test = {form: form, gend: gend, pada: sa, sup: sup, var: svar};
                tests.push(test);
            });
        }
    }
}
log('T', tests.length);

before(function() {
    log('THERE');
    sups = require('../lib/sup-cache');

});



tests.forEach(function(test, idx) {
    if (idx != 2) return;
    log('T', test);
    var res = stemmer.query(test.form, sups);
    var strs = res.map(function(r) { return JSON.stringify(r)});
    log('R', strs);
    _Fn(test);
});



function _Fn(test) {
    var descr = [test.dhatu, test.form].join('_');
    describe(descr, function(){
        var form = test.form;
        // var fslp = salita.sa2slp(form);
        var results, result;
        // var title = [fslp, test.lslp, test.pslp, form, test.la, 'tip', test.tip].join('_');
        var title = [test.gend, test.sup, test.var, test.pada].join('_');
        it(title, function() {
            results = stemmer.query(form, sups);
            var rkeys = results.map(function(r) {return [r.gend, r.sup, r.var, r.pada].join('-')});
            var key = [test.gend, test.sup, test.var, test.pada].join('-');
            if (!inc(rkeys, key)) log('err-test dhatu:', test.dhatu, 'form:', test.form, 'key', key, rkeys);
            inc(rkeys, key).should.equal(true);
        });
    });
}
