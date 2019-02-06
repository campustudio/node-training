/**
 * simulate function of below shell:
   cat file | wc -l
 */

const fileService = require('../services/fileService')
const mathService = require('../services/mathService')

const main = () => {
  const fileBuffer = fileService.getFileBuffer() || new Buffer([])
  // console.log('main fileBuffer: ', fileBuffer);

  // calculate newline number: convert buffer to string, split string to array, get array's length, then minus one, return final result
  if(Buffer.isBuffer(fileBuffer)) {
    const newlineNum = mathService.calculateNewlineNum(fileBuffer)
    // console.log('newlineNum: ', newlineNum);
    console.log(newlineNum);

  }
}

// TODO: seems like there's bug when running `learnyounode verify fileReader.js`
// when using fs.readFileSync(process.argv[1]): Submission results did not match expected!
// when using fs.readFileSync(process.argv[2]): Submission results match expected but still # FAIL warning there
// Actually when checking the contents of process.argv, will find process.argv[1] should be used as the file path
main()

