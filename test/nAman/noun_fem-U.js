var desc = {gend: 'fem', dict: 'ू', var: 'U'};
var tests =  {
    'BU': { // earth - A. root
        'sg': ['भूः', 'भुवम्', 'भुवा', 'भुवे-भुवै', 'भुवः-भुवाः', 'भुवः-भुवाः', 'भुवि-भुवाम्', 'भूः'],
        'du': ['भुवौ', 'भुवौ', 'भूभ्याम्', 'भूभ्याम्', 'भूभ्याम्', 'भुवोः', 'भुवोः', 'भुवौ'],
        'pl': ['भुवः', 'भुवः', 'भूभिः', 'भूभ्यः', 'भूभ्यः', 'भुवाम्-भूनाम्', 'भूषु', 'भुवः']
    },
    'vaDU': { // woman, bride
        'sg': ['वधूः', 'वधूम्', 'वध्वा', 'वध्वै', 'वध्वाः', 'वध्वाः', 'वध्वाम्', 'वधु'],
        'du': ['वध्वौ', 'वध्वौ', 'वधूभ्याम्', 'वधूभ्याम्', 'वधूभ्याम्', 'वध्वोः', 'वध्वोः', 'वध्वौ'],
        'pl': ['वध्वः', 'वधूः', 'वधूभिः', 'वधूभ्यः', 'वधूभ्यः', 'वधूनाम्', 'वधूषु', 'वध्वः']
    },
    'camU': { // army
        'sg': ['चमूः', 'चमूम्', 'चम्वा', 'चम्वै', 'चम्वाः', 'चम्वाः', 'चम्वाम्', 'चमु'],
        'du': ['चम्वौ', 'चम्वौ', 'चमूभ्याम्', 'चमूभ्याम्', 'चमूभ्याम्', 'चम्वोः', 'चम्वोः', 'चम्वौ'],
        'pl': ['चम्वः', 'चमूः', 'चमूभिः', 'चमूभ्यः', 'चमूभ्यः', 'चमूनाम्', 'चमूषु', 'चम्वः']
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
