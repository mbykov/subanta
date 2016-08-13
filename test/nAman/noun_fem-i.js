var desc = {gend: 'fem', dict: 'ि', var: 'i'};
var tests = {
    'gati': { // path F
        'sg': ['गतिः', 'गतिम्', 'गत्या', 'गतये', 'गतेः', 'गतेः', 'गतौ', 'गते'], // -गतितः
        'du': ['गती', 'गती', 'गतिभ्याम्', 'गतिभ्याम्', 'गतिभ्याम्', 'गत्योः', 'गत्योः', 'गती'],
        'pl': ['गतयः', 'गतीः', 'गतिभिः', 'गतिभ्यः', 'गतिभ्यः', 'गतीनाम्', 'गतिषु', 'गतयः']
    },

    'kIrti': { // glory, fame
        'sg': ['कीर्तिः', 'कीर्तिम्', 'कीर्त्या', 'कीर्तये-कीर्त्यै', 'कीर्तेः-कीर्त्याः', 'कीर्तेः-कीर्त्याः', 'कीर्तौ-कीर्त्याम्', 'कीर्ते'],
        'du': ['कीर्ती', 'कीर्ती', 'कीर्तिभ्याम्', 'कीर्तिभ्याम्', 'कीर्तिभ्याम्', 'कीर्त्योः', 'कीर्त्योः', 'कीर्ती'],
        'pl': ['कीर्तयः', 'कीर्तीः', 'कीर्तिभिः', 'कीर्तिभ्यः', 'कीर्तिभ्यः', 'कीर्तीनाम्', 'कीर्तिषु', 'कीर्तयः']
    },
    // 'mani': { // mind
    //     'sg': ['', '', '', '', '', '', '', ''],
    //     'du': ['', '', '', '', '', '', '', ''],
    //     'pl': ['', '', '', '', '', '', '', ''],
    // },

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
