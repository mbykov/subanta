TESTS = test/naman/*.js
# REPORTER = dot
REPORTER = spec
g = ''

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--slow 500 \
		--grep $(g) \
		--bail \
		--timeout 3000 \
		test/nAman.js \
#		2> /dev/null

parse:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--slow 900 \
		--grep $(g) \
		--timeout 3000 \
		--bail \
		test/parse.js \
#		2> /dev/null


ganaXX:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--slow 500 \
		--grep $(g) \
		--timeout 3000 \
		test/ganas/*.js \
		2> /dev/null


clean:
	rm -fr build components template.js

.PHONY: test clean
