var u = require('../utils');
var desc = {gend: 'neut', var: 'as'};

var tests = {
    'manas': { // mind
        'sg': ['मनः', 'मनः', 'मनः', 'मनसा', 'मनसे', 'मनसः', 'मनसः', 'मनसि'],
        'du': ['मनसी', 'मनसी', 'मनसी', 'मनोभ्याम्', 'मनोभ्याम्', 'मनोभ्याम्', 'मनसोः', 'मनसोः'],
        'pl': ['मनांसि', 'मनांसि', 'मनांसि', 'मनोभिः', 'मनोभ्यः', 'मनोभ्यः', 'मनसाम्', 'मनःसु'],
    },
    'uzas': { // dawn
        'sg': ['उषः', 'उषः', 'उषः', 'उषसा', 'उषसे', 'उषसः', 'उषसः', 'उषसि'],
        'du': ['उषसी', 'उषसी', 'उषसी', 'उषोभ्याम्', 'उषोभ्याम्', 'उषोभ्याम्', 'उषसोः', 'उषसोः'],
        'pl': ['उषांसि', 'उषांसि', 'उषांसि', 'उषोभिः', 'उषोभ्यः', 'उषोभ्यः', 'उषसाम्', 'उषःसु'],
    },

    'nas': { // nose - f.
        'sg': ['नाः', 'नः', 'नसम्', 'नसा', 'नसे', 'नसः', 'नसः', 'नसि'],
        'du': ['नसौ', 'नसौ', 'नसौ', 'नोभ्याम्', 'नोभ्याम्', 'नोभ्याम्', 'नसोः', 'नसोः'],
        'pl': ['नसः', 'नसः', 'नसः', 'नोभिः', 'नोभ्यः', 'नोभ्यः', 'नसाम्', 'नःसु'],
    },
    // // FIXME: adj - тест должет выполняться для любого gend
    // 'svavas': { // adj. having or affording good protection
    //     'sg': ['स्ववः', 'स्ववः', 'स्ववः', 'स्ववसा', 'स्ववसे', 'स्ववसः', 'स्ववसः', 'स्ववसि'],
    //     'du': ['स्ववसी', 'स्ववसी', 'स्ववसी', 'स्ववोभ्याम्', 'स्ववोभ्याम्', 'स्ववोभ्याम्', 'स्ववसोः', 'स्ववसोः'],
    //     'pl': ['स्ववांसि', 'स्ववांसि', 'स्ववांसि', 'स्ववोभिः', 'स्ववोभ्यः', 'स्ववोभ्यः', 'स्ववसाम्', 'स्ववःसु'],
    // },
    '': { //
        'sg': ['', '', '', '', '', '', '', ''],
        'du': ['', '', '', '', '', '', '', ''],
        'pl': ['', '', '', '', '', '', '', ''],
    },

    'apas': { // work
        'sg': ['अपः', 'अपः', 'अपः', 'अपसा', 'अपसे', 'अपसः', 'अपसः', 'अपसि'],
        'du': ['अपसी', 'अपसी', 'अपसी', 'अपोभ्याम्', 'अपोभ्याम्', 'अपोभ्याम्', 'अपसोः', 'अपसोः'],
        'pl': ['अपांसि', 'अपांसि', 'अपांसि', 'अपोभिः', 'अपोभ्यः', 'अपोभ्यः', 'अपसाम्', 'अपःसु'],
    },
    '': { //
        'sg': ['', '', '', '', '', '', '', ''],
        'du': ['', '', '', '', '', '', '', ''],
        'pl': ['', '', '', '', '', '', '', ''],
    },
}

describe(u.title(desc), function() {
    u.fireNoun(tests, desc);
});
