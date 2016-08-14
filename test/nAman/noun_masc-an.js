var desc = {gend: 'masc', dict: 'न्', var: 'an'};

var tests = {
    'rAjan': { // king
        'sg': ['राजा', 'राजानम्', 'राज्ञा', 'राज्ञे', 'राज्ञः', 'राज्ञः', 'राजनि-राज्ञि', 'राजन्'],
        'du': ['राजानौ', 'राजानौ', 'राजभ्याम्', 'राजभ्याम्', 'राजभ्याम्', 'राज्ञोः', 'राज्ञोः', 'राजानौ'],
        'pl': ['राजानः', 'राज्ञः', 'राजभिः', 'राजभ्यः', 'राजभ्यः', 'राज्ञाम्', 'राजसु', 'राजानः']
    },
    'Atman': { // soul
        'sg': ['आत्मा', 'आत्मानम्', 'आत्मना', 'आत्मने', 'आत्मनः', 'आत्मनः', 'आत्मनि', 'आत्मन्'],
        'du': ['आत्मानौ', 'आत्मानौ', 'आत्मभ्याम्', 'आत्मभ्याम्', 'आत्मभ्याम्', 'आत्मनोः', 'आत्मनोः', 'आत्मानौ'],
        'pl': ['आत्मानः', 'आत्मनः', 'आत्मभिः', 'आत्मभ्यः', 'आत्मभ्यः', 'आत्मनाम्', 'आत्मसु', 'आत्मानः']
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