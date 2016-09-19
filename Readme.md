# node.js inflectional subanta morphology analyzer for Sanskrit

subanta analyser gets array of wordforms and return array of queries for (in my case) CouchDB.

subanta analyser beforehand creates a file ./lib/sup_cache.txt' for all endings of any wordform, and then works with this file.


````bash
node run.js ज<094d>योतिषोः                                                               (git)-[master]
subanta parse: jyotizoH ज्योतिषोः
[ { pada: 'ज्योतिषु',
    slp: 'jyotizu',
    name: true,
    stem: 'ज्योतिष',
    gend: 'fem',
    dict: 'ु',
    var: 'u',
    sups: [ '5.1', '6.1' ],
    term: 'ोः',
    size: 2 },
    . . .
  { plain: true, pada: 'ज्योतिषोः', gend: 'mfn', slp: 'jyotizoH' } ]
qs size: 10
queryTime: 24.794ms
````


## Installation

With node.js:

````javascript
$ npm install subanta
````
## API

````javascript
var subanta = require('subanta');
````

````javascript
        subanta.query(flake);
````

## console

run.js is for convenient purpuses only and takes only one wordform as input:

it takes slp1, (slp1 goes only in console):

````bash
node run.js jyotirByaH
````
or devanagari as well:

````bash
node run.js ज्योतिर्भ्यः
````

## Running node tests

````javascript
$ make test
->  1717 passing (1s)
````

## License

  GNU GPL
