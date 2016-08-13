var desc = {gend: 'fem', dict: 'ौ', var: 'au'};
var tests = {
    'nO': { // ship
        'sg': ['नौः', 'नावम्', 'नावा', 'नावे', 'नावः', 'नावः', 'नावि', 'नौः'],
        'du': ['नावौ', 'नावौ', 'नौभ्याम्', 'नौभ्याम्', 'नौभ्याम्', 'नावोः', 'नावोः', 'नावौ'],
        'pl': ['नावः', 'नावः', 'नौभिः', 'नौभ्यः', 'नौभ्यः', 'नावाम्', 'नौषु', 'नावः']
    },
    'glO': { // round lump, the moon
        'sg': ['ग्लौः', 'ग्लावम्', 'ग्लावा', 'ग्लावे', 'ग्लावः', 'ग्लावः', 'ग्लावि', 'ग्लौः'],
        'du': ['ग्लावौ', 'ग्लावौ', 'ग्लौभ्याम्', 'ग्लौभ्याम्', 'ग्लौभ्याम्', 'ग्लावोः', 'ग्लावोः', 'ग्लावौ'],
        'pl': ['ग्लावः', 'ग्लावः', 'ग्लौभिः', 'ग्लौभ्यः', 'ग्लौभ्यः', 'ग्लावाम्', 'ग्लौषु', 'ग्लावः']
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
