var desc = {gend: 'fem', dict: 'ा', var: 'A'};
var test = {

    'vidyA': { // any knowledge
        'sg': ['विद्या', 'विद्याम्', 'विद्यया', 'विद्यायै', 'विद्यायाः', 'विद्यायाः', 'विद्यायाम्', 'विद्ये'],
        'du': ['विद्ये', 'विद्ये', 'विद्याभ्याम्', 'विद्याभ्याम्', 'विद्याभ्याम्', 'विद्ययोः', 'विद्ययोः', 'विद्ये'],
        'pl': ['विद्याः', 'विद्याः', 'विद्याभिः', 'विद्याभ्यः', 'विद्याभ्यः', 'विद्यानाम्', 'विद्यासु', 'विद्याः']
    },
    'senA': { // army
        'sg': ['सेना', 'सेनाम्', 'सेनया', 'सेनायै', 'सेनायाः', 'सेनायाः', 'सेनायाम्', 'सेने'],
        'du': ['सेने', 'सेने', 'सेनाभ्याम्', 'सेनाभ्याम्', 'सेनाभ्याम्', 'सेनयोः', 'सेनयोः', 'सेने'],
        'pl': ['सेनाः', 'सेनाः', 'सेनाभिः', 'सेनाभ्यः', 'सेनाभ्यः', 'सेनानाम्', 'सेनासु', 'सेनाः']
    },
    'jA': { // progeny
        'sg': ['जा', 'जाम्', 'जया', 'जायै', 'जायाः', 'जायाः', 'जायाम्', 'जे'],
        'du': ['जे', 'जे', 'जाभ्याम्', 'जाभ्याम्', 'जाभ्याम्', 'जयोः', 'जयोः', 'जे'],
        'pl': ['जाः', 'जाः', 'जाभिः', 'जाभ्यः', 'जाभ्यः', 'जानाम्', 'जासु', 'जाः']
    },
    'kaTA': { // speech
        'sg': ['कथा', 'कथाम्', 'कथया', 'कथायै', 'कथायाः', 'कथायाः', 'कथायाम्', 'कथे'],
        'du': ['कथे', 'कथे', 'कथाभ्याम्', 'कथाभ्याम्', 'कथाभ्याम्', 'कथयोः', 'कथयोः', 'कथे'],
        'pl': ['कथाः', 'कथाः', 'कथाभिः', 'कथाभ्यः', 'कथाभ्यः', 'कथानाम्', 'कथासु', 'कथाः']
    },
    '': { //
        'sg': ['', '', '', '', '', '', '', ''],
        'du': ['', '', '', '', '', '', '', ''],
        'pl': ['', '', '', '', '', '', '', '']
    },
}

module.exports = {
    desc: desc,
    tests: test
}
