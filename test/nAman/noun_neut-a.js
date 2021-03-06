var desc = {gend: 'neut', dict: '', var: 'a'};
var tests = {
    'Asya': { // mouth
        'sg': ['आस्यम्', 'आस्यम्', 'आस्येन', 'आस्याय', 'आस्यात्', 'आस्यस्य', 'आस्ये', 'आस्य'],
        'du': ['आस्ये', 'आस्ये', 'आस्याभ्याम्', 'आस्याभ्याम्', 'आस्याभ्याम्', 'आस्ययोः', 'आस्ययोः', 'आस्ये'],
        'pl': ['आस्यानि', 'आस्यानि', 'आस्यैः', 'आस्येभ्यः', 'आस्येभ्यः', 'आस्यानाम्', 'आस्येषु', 'आस्यानि']
    },
    'vana': { // forest
        'sg': ['वनम्', 'वनम्', 'वनेन', 'वनाय', 'वनात्', 'वनस्य', 'वने', 'वन'],
        'du': ['वने', 'वने', 'वनाभ्याम्', 'वनाभ्याम्', 'वनाभ्याम्', 'वनयोः', 'वनयोः', 'वने'],
        'pl': ['वनानि', 'वनानि', 'वनैः', 'वनेभ्यः', 'वनेभ्यः', 'वनानाम्', 'वनेषु', 'वनानि']
    },
    'फल': { // fruit
        'sg': ['फलम्', 'फलम्', 'फलेन', 'फलाय', 'फलात्', 'फलस्य', 'फले', 'फल'],
        'du': ['फले', 'फले', 'फलाभ्याम्', 'फलाभ्याम्', 'फलाभ्याम्', 'फलयोः', 'फलयोः', 'फले'],
        'pl': ['फलानि', 'फलानि', 'फलैः', 'फलेभ्यः', 'फलेभ्यः', 'फलानाम्', 'फलेषु', 'फलानि']
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
