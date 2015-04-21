importScripts('primes.js');

onmessage = function (e) {
  console.log('worker received message:', e.data);
  switch (e.data.cmd) {
    case 'primes':
      var found = findPrimes(e.data.n);
      self.postMessage(found);
    break;
  }
};
