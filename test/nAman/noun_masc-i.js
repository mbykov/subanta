var desc = {gend: 'masc', dict: 'ि', var: 'i'};

var tests = {
    'agni': { // fire
        'sg': ['अग्निः', 'अग्निम्', 'अग्निना', 'अग्नये', 'अग्नेः', 'अग्नेः', 'अग्नौ', 'अग्ने'], // abl. -अग्नितः ?
        'du': ['अग्नी', 'अग्नी', 'अग्निभ्याम्', 'अग्निभ्याम्', 'अग्निभ्याम्', 'अग्न्योः', 'अग्न्योः', 'अग्नी'],
        'pl': ['अग्नयः', 'अग्नीन्', 'अग्निभिः', 'अग्निभ्यः', 'अग्निभ्यः', 'अग्नीनाम्', 'अग्निषु', 'अग्नयः']
    },
    'muni': { // sage
        'sg': ['मुनिः', 'मुनिम्', 'मुनिना', 'मुनये', 'मुनेः', 'मुनेः', 'मुनौ', 'मुने'], // -मुनितः
        'du': ['मुनी', 'मुनी', 'मुनिभ्याम्', 'मुनिभ्याम्', 'मुनिभ्याम्', 'मुन्योः', 'मुन्योः', 'मुनी'],
        'pl': ['मुनयः', 'मुनीन्', 'मुनिभिः', 'मुनिभ्यः', 'मुनिभ्यः', 'मुनीनाम्', 'मुनिषु', 'मुनयः']
    },
    'Suci': { // virtue
        'sg': ['शुचिः', 'शुचिम्', 'शुचिना', 'शुचये', 'शुचेः', 'शुचेः', 'शुचौ', 'शुचे'],
        'du': ['शुची', 'शुची', 'शुचिभ्याम्', 'शुचिभ्याम्', 'शुचिभ्याम्', 'शुच्योः', 'शुच्योः', 'शुची'],
        'pl': ['शुचयः', 'शुचीन्', 'शुचिभिः', 'शुचिभ्यः', 'शुचिभ्यः', 'शुचीनाम्', 'शुचिषु', 'शुचयः']
    },
    '': { //
        'sg': ['', '', '', '', '', '', '', ''],
        'du': ['', '', '', '', '', '', '', ''],
        'pl': ['', '', '', '', '', '', '', '']
    },
}

module.exports = {
    desc: desc,
    tests: tests
}