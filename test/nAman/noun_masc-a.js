var desc = {gend: 'masc', dict: '', var: 'a'};

var tests = {
    'kAma': { // love
        'sg': ['कामः', 'कामम्', 'कामेन', 'कामाय', 'कामात्', 'कामस्य', 'कामे', 'काम'], // abl. कामतः
        'du': ['कामौ', 'कामौ', 'कामाभ्याम्', 'कामाभ्याम्', 'कामाभ्याम्', 'कामयोः', 'कामयोः', 'कामौ'],
        'pl': ['कामाः', 'कामान्', 'कामैः', 'कामेभ्यः', 'कामेभ्यः', 'कामानाम्', 'कामेषु', 'कामाः']
    },
    'deva': { // god m.
        'sg': ['देवः', 'देवम्', 'देवेन', 'देवाय', 'देवात्', 'देवस्य', 'देवे', 'देव'], // abl. देवतः
        'du': ['देवौ', 'देवौ', 'देवाभ्याम्', 'देवाभ्याम्', 'देवाभ्याम्', 'देवयोः', 'देवयोः', 'देवौ'],
        'pl': ['देवाः', 'देवान्', 'देवैः', 'देवेभ्यः', 'देवेभ्यः', 'देवानाम्', 'देवेषु', 'देवाः']
    },

    'kfpa': { // well
        'sg': ['कृपः', 'कृपम्', 'कृपेण', 'कृपाय', 'कृपात्', 'कृपस्य', 'कृपे', 'कृप'], // abl. कृपतः
        'du': ['कृपौ', 'कृपौ', 'कृपाभ्याम्', 'कृपाभ्याम्', 'कृपाभ्याम्', 'कृपयोः', 'कृपयोः', 'कृपौ'],
        'pl': ['कृपाः', 'कृपान्', 'कृपैः', 'कृपेभ्यः', 'कृपेभ्यः', 'कृपाणाम्', 'कृपेषु', 'कृपाः']
    },

    'राम': { // Ram
        'sg': ['रामः', 'रामम्', 'रामेण', 'रामाय', 'रामात्', 'रामस्य', 'रामे', 'राम'],
        'du': ['रामौ', 'रामौ', 'रामाभ्याम्', 'रामाभ्याम्', 'रामाभ्याम्', 'रामयोः', 'रामयोः', 'रामौ'],
        'pl': ['रामाः', 'रामान्', 'रामैः', 'रामेभ्यः', 'रामेभ्यः', 'रामाणाम्', 'रामेषु', 'रामाः']
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
