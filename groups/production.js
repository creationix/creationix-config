var pathJoin = require('path').join;
var jsRuntime = require('wheaty-js-runtime');
module.exports = {
  port: 8002,
  user: "tim",
  group: "tim",
  cacheDir: pathJoin(__dirname, "../git"),
  sites: {
    "tedit.creationix.com": {
      url: "git@github.com:creationix/tedit.git",
      root: "build/web",
      runtimes: { js: jsRuntime },
      ssl: "tedit.creationix.com",
    },
    "creationix.com": {
      url: "git@github.com:creationix/creationix.com",
      runtimes: { js: jsRuntime },
      ssl: "tedit.creationix.com",
    },
  }
};
