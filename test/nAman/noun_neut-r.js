var desc = {gend: 'fem', dict: 'र्', var: 'r'};

var tests = {
    'vAr': { // water -n.
        'sg': ['वाः', 'वाः', 'वारा', 'वारे', 'वारः', 'वारः', 'वारि', 'वाः'],
        'du': ['वारी', 'वारी', 'वार्भ्याम्', 'वार्भ्याम्', 'वार्भ्याम्', 'वारोः', 'वारोः', 'वारी'],
        'pl': ['वारि', 'वारि', 'वार्भिः', 'वार्भ्यः', 'वार्भ्यः', 'वाराम्', 'वार्षु', 'वारि']
    },

    '': { //
        'sg': ['', '', '', '', '', '', '', ''],
        'du': ['', '', '', '', '', '', '', ''],
        'pl': ['', '', '', '', '', '', '', ''],
    },
}

module.exports = {
    desc: desc,
    tests: tests
}
