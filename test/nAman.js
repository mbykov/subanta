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


// 'vidyA': { // any knowledge
//     'sg': ['विद्या', 'विद्ये', 'विद्याम्', 'विद्यया', 'विद्यायै', 'विद्यायाः', 'विद्यायाः', 'विद्यायाम्'],
//     'du': ['विद्ये', 'विद्ये', 'विद्ये', 'विद्याभ्याम्', 'विद्याभ्याम्', 'विद्याभ्याम्', 'विद्ययोः', 'विद्ययोः'],
//     'pl': ['विद्याः', 'विद्याः', 'विद्याः', 'विद्याभिः', 'विद्याभ्यः', 'विद्याभ्यः', 'विद्यानाम्', 'विद्यासु']
// }

// var sups =  ['सु', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा', 'भ्याम्', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्', 'भ्यस्', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्'];
var supkeys = {
    'sg': ['सु', 'औ', 'जस्', 'अम्', 'औट्', 'शस्', 'टा', 'voc'],
    'du': ['भ्याम्', 'भिस्', 'ङे', 'भ्याम्', 'भ्यस्', 'ङसि', 'भ्याम्', 'voc'],
    'pl': ['भ्यस्', 'ङस्', 'ओस्', 'आम्', 'ङि', 'ओस्', 'सुप्', 'voc']
}

var sups = require('../lib/sup-cache');

var tests = [];

var files = fs.readdirSync('./test/nAman');

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
            var osups = nums[num];
            // log('G', num);
            var sup;
            osups.forEach(function(form, idx) {
                sup = supkeys[num][idx];
                var test = {form: form, gend: gend, num: num, pada: sa, sup: sup, var: svar};
                tests.push(test);
            });
        }

    }

}

// var test = tests[0];
// log('T', test);


// var q = stemmer.query(test.form, sups);
// p(q)

tests.forEach(function(test, idx) {
    if (idx > 0) return;
    log('T', test);
    var res = stemmer.query(test.form, sups);
    var strs = res.map(function(r) { return JSON.stringify(r)});
    log('R', strs);
    // _Fn(test);
});

return;

// var tins = [];
// var das = [];

// var testPath = path.join(__dirname, './tests_cache.txt');
// // var dataPath = path.join(__dirname, '../lib/jnu-tiNanta-values.txt');
// // var rows = fs.readFileSync(dataPath).toString().split('\n');
// // log('size', rows.length);



// var tests = fs.readFileSync(testPath).toString().split('\n');
// log('TS', tests.length);
// // p(tests.slice(0,5));

// before(function() {
//     var dhatuAngaPath = path.join(__dirname, '../lib/dhatu_anga_cache.txt');
//     var dhatuAngas = fs.readFileSync(dhatuAngaPath).toString().split('\n');
//     // var das = [];
//     var odhatu, ostem, ogana, ola, opada, otvar, otips;
//     dhatuAngas.forEach(function(da) {
//         if (da == '') return;
//         [odhatu, ostem, ogana, ola, opada, otvar, otips] = da.split('-');
//         das.push({dhatu: odhatu, stem: ostem, gana: ogana, la: ola, pada: opada, tvar: otvar, tips:otips});
//     });


//     var tinsPath = path.join(__dirname, '../lib/tins_cache.js');
//     var ctins = fs.readFileSync(tinsPath).toString().split('\n');
//     // tins = [];
//     var tip, tin, size, gana, la, pada, tvar;
//     ctins.forEach(function(ctin) {
//         if (ctin == '') return;
//         [tip, tin, size, gana, la, pada, tvar] = ctin.split('-');
//         tins.push({tip: tip, tin: tin, size: size, gana: gana, la: la, pada: pada, tvar: tvar});
//     });
// });

// // log('T', tins);
// // return;

// // अंहते-अहि!-01-लट्-आ-त


// function _Fn(test) {
//     var descr = [test.dhatu, test.form].join('_');
//     describe(descr, function(){
//         var form = test.form;
//         var fslp = salita.sa2slp(form);
//         var results, result;
//         // var title = [fslp, test.lslp, test.pslp, form, test.la, 'tip', test.tip].join('_');
//         var title = [test.form, test.gana, test.la, test.pada, 'tip', test.tip].join('_');
//         it(title, function() {
//             results = stemmer.query(form, tins, das);
//             // results.length.should.equal(1);
//             // например, cukzuBe चुक्षुभे, совпадают формы, alokata अलोकत - двойной рез. одной формы из-за artha в DP
//             var rkeys = results.map(function(r) {return [r.dhatu, r.la, r.pada, r.tip].join('-')});
//             var key = [test.dhatu, test.la, test.pada, test.tip].join('-');
//             if (!inc(rkeys, key)) log('err-test dhatu:', test.dhatu, 'form:', test.form, 'key', key, rkeys);
//             inc(rkeys, key).should.equal(true);
//         });
//     });
// }
