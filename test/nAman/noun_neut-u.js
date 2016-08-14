var desc = {gend: 'neut', dict: 'ु', var: 'u'};

var tests = {
    'maDu': { // neut - honey
        'sg': ['मधु', 'मधु', 'मधुना', 'मधुने', 'मधुनः', 'मधुनः', 'मधुनि', 'मधो'],
        'du': ['मधुनी', 'मधुनी', 'मधुभ्याम्', 'मधुभ्याम्', 'मधुभ्याम्', 'मधुनोः', 'मधुनोः', 'मधुनी'],
        'pl': ['मधूनि', 'मधूनि', 'मधुभिः', 'मधुभ्यः', 'मधुभ्यः', 'मधूनाम्', 'मधुषु', 'मधूनि']
    },
    'mfdu': { // softness
        'sg': ['मृदु', 'मृदु', 'मृदुना', 'मृदुने', 'मृदुनः', 'मृदुनः', 'मृदुनि', 'मृदो'],
        'du': ['मृदुनी', 'मृदुनी', 'मृदुभ्याम्', 'मृदुभ्याम्', 'मृदुभ्याम्', 'मृदुनोः', 'मृदुनोः', 'मृदुनी'],
        'pl': ['मृदूनि', 'मृदूनि', 'मृदुभिः', 'मृदुभ्यः', 'मृदुभ्यः', 'मृदूनाम्', 'मृदुषु', 'मृदूनि']
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
