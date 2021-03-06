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

    'dyumat': { // masc. - light, clear
        'sg': ['द्युमान्', 'द्युमन्तम्', 'द्युमता', 'द्युमते', 'द्युमतः', 'द्युमतः', 'द्युमति', 'द्युमन्'],
        'du': ['द्युमन्तौ', 'द्युमन्तौ', 'द्युमद्भ्याम्', 'द्युमद्भ्याम्', 'द्युमद्भ्याम्', 'द्युमतोः', 'द्युमतोः', 'द्युमन्तौ'],
        'pl': ['द्युमन्तः', 'द्युमतः', 'द्युमद्भिः', 'द्युमद्भ्यः', 'द्युमद्भ्यः', 'द्युमताम्', 'द्युमत्सु', 'द्युमन्तः']
    },

    'धीमत्': { // intelligent
        'sg': ['धीमान्', 'धीमन्तम्', 'धीमता', 'धीमते', 'धीमतः', 'धीमतः', 'धीमति', 'धीमन्'],
        'du': ['धीमन्तौ', 'धीमन्तौ', 'धीमद्भ्याम्', 'धीमद्भ्याम्', 'धीमद्भ्याम्', 'धीमतोः', 'धीमतोः', 'धीमन्तौ'],
        'pl': ['धीमन्तः', 'धीमतः', 'धीमद्भिः', 'धीमद्भ्यः', 'धीमद्भ्यः', 'धीमताम्', 'धीमत्सु', 'धीमन्तः']
    },
    'खादत्': { // eating
        'sg': ['खादन्', 'खादन्तम्', 'खादता', 'खादते', 'खादतः', 'खादतः', 'खादति', 'खादन्'],
        'du': ['खादन्तौ', 'खादन्तौ', 'खादद्भ्याम्', 'खादद्भ्याम्', 'खादद्भ्याम्', 'खादतोः', 'खादतोः', 'खादन्तौ'],
        'pl': ['खादन्तः', 'खादतः', 'खादद्भिः', 'खादद्भ्यः', 'खादद्भ्यः', 'खादताम्', 'खादत्सु', 'खादन्तः']
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
