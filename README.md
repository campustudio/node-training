# node-training
for daily node training/test

# npm registry(modify registry if needed)
### get:
npm config get registry

### taobao version temporary use example:
npm --registry https://registry.npm.taobao.org install express

### taobao version persisted use:
npm config set registry https://registry.npm.taobao.org

### reverse to official version:
npm config set registry https://registry.npmjs.org/

# upgrade npm
npm i npm

# install learnyounode
npm install -g learnyounode

### location after installed(for Mac):
/usr/local/bin/learnyounode -> /usr/local/lib/node_modules/learnyounode/bin/learnyounode

### reference:
https://github.com/workshopper/learnyounode

### Resolving EACCES permissions errors when installing packages globally. / Installing a node version manager without removing your current version of npm or Node.js.
https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### HINTS

To make a Node.js program, create a new file with a .js extension and
start writing JavaScript! Execute your program by running it with the node
command. e.g.:

  $ node program.js

You can write to the console in the same way as in the browser:

  console.log("text")

When you are done, you must run:

  $ learnyounode verify program.js

to proceed. Your program will be tested, a report will be generated, and
the lesson will be marked 'completed' if you are successful.
─────────────────────────────────────────────────────────────────────────────
  » To print these instructions again, run: learnyounode print
  » To execute your program in a test environment, run: learnyounode run
    program.js
  » To verify your program, run: learnyounode verify program.js
  » For help run: learnyounode help
  



