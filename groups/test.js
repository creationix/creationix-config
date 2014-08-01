var pathJoin = require('path').join;
var jsRuntime = require('wheaty-js-runtime');
module.exports = {
  port: 8001,
  user: "tim",
  group: "tim",
  cacheDir: pathJoin(__dirname, "../git"),
  sites: {
    "dukluv.io": {
      url: "git@github.com:creationix/dukluv.git",
      root: "www",
      runtimes: { js: jsRuntime },
    },
    "htmlbuilder.creationix.com": {
      url: "https://github.com/creationix/htmlbuilder.git",
      runtimes: { js: jsRuntime },
    },
    "conquest.creationix.com": {
      url: "https://github.com/creationix/conquest.git",
      runtimes: { js: jsRuntime },
    },
    "exploder.creationix.com": {
      url: "https://github.com/creationix/exploder.git",
      runtimes: { js: jsRuntime },
    },
    "clone-test.creationix.com": {
      url: "https://github.com/creationix/clone-test.git",
      runtimes: { js: jsRuntime },
    },
    "creator.creationix.com": {
      url: "https://github.com/creationix/creator.git",
      root: "www",
      runtimes: { js: jsRuntime },
    },
    "desktop.creationix.com": {
      url: "https://github.com/creationix/tedit.git",
      root: "build/minimal",
      runtimes: { js: jsRuntime },
    },
    "bananas.creationix.com": {
      url: "https://github.com/creationix/bananas.git",
      root: "www",
      runtimes: { js: jsRuntime },
    },
  }
};
