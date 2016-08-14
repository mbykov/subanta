var desc = {gend: 'masc', dict: 'त्', var: 'at'};

var tests = {
    'Bagavat': { // divine
        'sg': ['भगवान्', 'भगवन्तम्', 'भगवता', 'भगवते', 'भगवतः', 'भगवतः', 'भगवति', 'भगवन्'],
        'du': ['भगवन्तौ', 'भगवन्तौ', 'भगवद्भ्याम्', 'भगवद्भ्याम्', 'भगवद्भ्याम्', 'भगवतोः', 'भगवतोः', 'भगवन्तौ'],
        'pl': ['भगवन्तः', 'भगवतः', 'भगवद्भिः', 'भगवद्भ्यः', 'भगवद्भ्यः', 'भगवताम्', 'भगवत्सु', 'भगवन्तः']
    },

    'asumat': { // life m.
        'sg': ['असुमान्', 'असुमन्तम्', 'असुमता', 'असुमते', 'असुमतः', 'असुमतः', 'असुमति', 'असुमन्'],
        'du': ['असुमन्तौ', 'असुमन्तौ', 'असुमद्भ्याम्', 'असुमद्भ्याम्', 'असुमद्भ्याम्', 'असुमतोः', 'असुमतोः', 'असुमन्तौ'],
        'pl': ['असुमन्तः', 'असुमतः', 'असुमद्भिः', 'असुमद्भ्यः', 'असुमद्भ्यः', 'असुमताम्', 'असुमत्सु', 'असुमन्तः']
    },

    'dyumat': { // masc. - light, clear // FIXME: это работает, комм чтобы не создавать файл для neut
        'sg': ['द्युमान्', 'द्युमन्तम्', 'द्युमता', 'द्युमते', 'द्युमतः', 'द्युमतः', 'द्युमति', 'द्युमन्'],
        'du': ['द्युमन्तौ', 'द्युमन्तौ', 'द्युमद्भ्याम्', 'द्युमद्भ्याम्', 'द्युमद्भ्याम्', 'द्युमतोः', 'द्युमतोः', 'द्युमन्तौ'],
        'pl': ['द्युमन्तः', 'द्युमतः', 'द्युमद्भिः', 'द्युमद्भ्यः', 'द्युमद्भ्यः', 'द्युमताम्', 'द्युमत्सु', 'द्युमन्तः']
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