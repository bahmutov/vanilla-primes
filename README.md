# vanilla-primes

> Vanilla JS application to find first N primes to show performance profiling

Use [code snippets](https://github.com/bahmutov/code-snippets)

Tags:

* `0-profile-method-call` - initial unoptimized application. Try finding 1000 primes, should take about 8 seconds.
* `1-removed-try-catch` - removed first bottleneck, should take less than 5 seconds.
* `2-reuse-primes` - reusing previously found primes, makes finding 10k primes very fast.

The next two steps require running static server in order to load the web worker script.

* `3-web-worker` - moved primes computation to a web worker.
* `4-paint-profile` - profile paint of expensive CSS property (box-shadow in index.html)

If you need angular version of this application, see [bahmutov/primes](https://github.com/bahmutov/primes).

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/vanilla-primes/issues) on Github
