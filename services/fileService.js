const fs = require('fs')
// console.log('fs: ', fs);

/**
 * The full path to the file to read will be provided as the first
   command-line argument (i.e., process.argv[2]). You do not need to make
   your own test file.
 * 
 * All synchronous (or blocking) filesystem methods in the fs module end with
   'Sync'. To read a file, you'll need to use fs.readFileSync('/path/to/file'). 
   This method will return a Buffer object containing the complete contents of the file.
 *
 * Documentation on the fs module can be found by pointing your browser here:
   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
 * 
 * Buffer objects are Node's way of efficiently representing arbitrary arrays
   of data, whether it be ascii, binary or some other format. Buffer objects
   can be converted to strings by simply calling the toString() method on
   them. e.g. var str = buf.toString().
 *
 * Documentation on Buffers can be found by pointing your browser here:
   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html
 *
 */

// get buffer data: read file via path, then return buffer
const getFileBuffer = () => {
  let fileBuffer = new Buffer([])
  // console.log('new Buffer fileBuffer: ', fileBuffer);
  const argv = process.argv || []
  // console.log('argv: ', argv);

  if(argv.length >= 2) {
    const fsRead = fs.readFileSync(process.argv[1])
    if(Buffer.isBuffer(fsRead)) {
      fileBuffer = fsRead
    }
  }

  return fileBuffer // binary data
}

module.exports = {
  getFileBuffer
}