var desc = {gend: 'fem', dict: '', var: '', cons: true};
var tests = {

    'fc': { // verse - f. - root
        'sg': ['ऋक्', 'ऋचम्', 'ऋचा', 'ऋचे', 'ऋचः', 'ऋचः', 'ऋचि', 'ऋक्'],
        'du': ['ऋचौ', 'ऋचौ', 'ऋग्भ्याम्', 'ऋग्भ्याम्', 'ऋग्भ्याम्', 'ऋचोः', 'ऋचोः', 'ऋचौ'],
        'pl': ['ऋचः', 'ऋचः', 'ऋग्भिः', 'ऋग्भ्यः', 'ऋग्भ्यः', 'ऋचाम्', 'ऋक्षु', 'ऋचः']
    },
    'diS': { // direction
        'sg': ['दिक्', 'दिशम्', 'दिशा', 'दिशे', 'दिशः', 'दिशः', 'दिशि', 'दिक्'],
        'du': ['दिशौ', 'दिशौ', 'दिग्भ्याम्', 'दिग्भ्याम्', 'दिग्भ्याम्', 'दिशोः', 'दिशोः', 'दिशौ'],
        'pl': ['दिशः', 'दिशः', 'दिग्भिः', 'दिग्भ्यः', 'दिग्भ्यः', 'दिशाम्', 'दिक्षु', 'दिशः']
    },
    'vAc': { // speech - f.
        'sg': ['वाक्', 'वाचम्', 'वाचा', 'वाचे', 'वाचः', 'वाचः', 'वाचि', 'वाक्'],
        'du': ['वाचौ', 'वाचौ', 'वाग्भ्याम्', 'वाग्भ्याम्', 'वाग्भ्याम्', 'वाचोः', 'वाचोः', 'वाचौ'],
        'pl': ['वाचः', 'वाचः', 'वाग्भिः', 'वाग्भ्यः', 'वाग्भ्यः', 'वाचाम्', 'वाक्षु', 'वाचः']
    },

    'ap': { // water - f. ( or m. ? )
        'sg': ['अप्', 'अपम्', 'अपा', 'अपे', 'अपः', 'अपः', 'अपि', 'अप्'],
        'du': ['अपौ', 'अपौ', 'अब्भ्याम्', 'अब्भ्याम्', 'अब्भ्याम्', 'अपोः', 'अपोः', 'अपौ'],
        'pl': ['अपः', 'अपः', 'अब्भिः', 'अब्भ्यः', 'अब्भ्यः', 'अपाम्', 'अप्सु', 'अपः']
    },

    'stuB': { // praise, f.
        'sg': ['स्तुप्', 'स्तुभम्', 'स्तुभा', 'स्तुभे', 'स्तुभः', 'स्तुभः', 'स्तुभि', 'स्तुप्'],
        'du': ['स्तुभौ', 'स्तुभौ', 'स्तुब्भ्याम्', 'स्तुब्भ्याम्', 'स्तुब्भ्याम्', 'स्तुभोः', 'स्तुभोः', 'स्तुभौ'],
        'pl': ['स्तुभः', 'स्तुभः', 'स्तुब्भिः', 'स्तुब्भ्यः', 'स्तुब्भ्यः', 'स्तुभाम्', 'स्तुप्सु', 'स्तुभः']
    },

    'druh': { // harm - f. // FIXME: exception: d-D
        'sg': ['ध्रुट्-ध्रुक्', 'द्रुहम्', 'द्रुहा', 'द्रुहे', 'द्रुहः', 'द्रुहः', 'द्रुहि', 'ध्रुट्-ध्रुक्'],
        'du': ['द्रुहौ', 'द्रुहौ', 'ध्रुड्भ्याम्-ध्रुग्भ्याम्', 'ध्रुड्भ्याम्-ध्रुग्भ्याम्', 'ध्रुड्भ्याम्-ध्रुग्भ्याम्', 'द्रुहोः', 'द्रुहोः', 'द्रुहौ'],
        'pl': ['द्रुहः', 'द्रुहः', 'ध्रुड्भिः-ध्रुग्भिः', 'ध्रुड्भ्यः-ध्रुग्भ्यः', 'ध्रुड्भ्यः-ध्रुग्भ्यः', 'द्रुहाम्', 'ध्रुट्सु-ध्रुक्षु', 'द्रुहः']
    },

    'सरित्': { // river
        'sg': ['सरित्', 'सरितम्', 'सरिता', 'सरिते', 'सरितः', 'सरितः', 'सरिति', 'सरित्'],
        'du': ['सरितौ', 'सरितौ', 'सरिद्भ्याम्', 'सरिद्भ्याम्', 'सरिद्भ्याम्', 'सरितोः', 'सरितोः', 'सरितौ'],
        'pl': ['सरितः', 'सरितः', 'सरिद्भिः', 'सरिद्भ्यः', 'सरिद्भ्यः', 'सरिताम्', 'सरित्सु', 'सरितः']
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
