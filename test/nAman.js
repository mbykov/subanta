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

var sups = require('../lib/sup-cache');

var files = fs.readdirSync('./test/nAman');

var tests = [];
for (var i in files) {
    var rtests = require('./nAman/' + files[i]);
    // log('F', rtests);
    // log(1, files[i]);
    var fn = files[i];
    var names = fn.split('.')[0];
    var name = names.split('_')[1];
    var gend = name.split('-')[0];
    var svar = name.split('-')[1];
    // var gend = rtests.desc.gend;
    // var svar = rtests.desc.var;
    var sa;
    for (var pada in rtests) {
        if (pada == '') continue;
        sa = salita.slp2sa(pada);
        var nums = rtests[pada];
        // log('P', pada, nums);
        for (var num in nums) {
            var forms2 = nums[num];
            // log('G', num, forms2);
            var sup;
            forms2.forEach(function(form2, idx) {
                // log('G', idx, form2);
                sup = supkeys[num][idx];
                if (/voc/.test(sup)) return;
                var forms = form2.split('-');
                forms.forEach(function(form) {
                    var test = {form: form, gend: gend, pada: sa, sup: sup, var: svar};
                    // log('G', idx, test);
                    tests.push(test);
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
    var pslp = salita.sa2slp(test.pada);
    var descr = [pslp, test.pada].join('_');
    describe(descr, function(){
        var form = test.form;
        var fslp = salita.sa2slp(form);
        var title = [fslp, test.form, test.gend, test.sup, 'var', test.var, ' '].join('_');
        it(title, function() {
            var results = stemmer.query(form, sups);
            var rkeys = results.map(function(r) {return [r.gend, r.sup, r.var, r.pada].join('-')});
            var key = [test.gend, test.sup, test.var, test.pada].join('-');
            if (!inc(rkeys, key)) p('err-test sup: ', test.pada, ' form: ', test.form, ' key: ', key, rkeys);
            inc(rkeys, key).should.equal(true);
        });
    });
}
