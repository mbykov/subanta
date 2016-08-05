var u = require('../utils');
var desc = {gend: 'neut', var: 'is'};

// total 24

var tests = {
    'havis': { // oblation
        'sg': ['हविः', 'हविः', 'हविः', 'हविषा', 'हविषे', 'हविषः', 'हविषः', 'हविषि'],
        'du': ['हविषी', 'हविषी', 'हविषी', 'हविर्भ्याम्', 'हविर्भ्याम्', 'हविर्भ्याम्', 'हविषोः', 'हविषोः'],
        'pl': ['हवींषि', 'हवींषि', 'हवींषि', 'हविर्भिः', 'हविर्भ्यः', 'हविर्भ्यः', 'हविषाम्', 'हविःषु'],
    },

    '': { //
        'sg': ['', '', '', '', '', '', '', ''],
        'du': ['', '', '', '', '', '', '', ''],
        'pl': ['', '', '', '', '', '', '', ''],
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
