const calculateSum = (arr = []) => {
  let sum = 0
  arr.forEach(element => {
    sum += Number(element)
  });
  
  // console.log('sum: ', sum);
  console.log(sum);
  return sum
}

/**
 * 
 * @param {*} fileBuffer 
 * 
 * If you're looking for an easy way to count the number of newlines in a
   string, recall that a JavaScript String can be .split() into an array of
   substrings and that '\n' can be used as a delimiter. Note that the test
   file does not have a newline character ('\n') at the end of the last line,
   so using this method you'll end up with an array that has one more element
   than the number of newlines.
 */
const calculateNewlineNum = (fileBuffer) => {
  let newlineNum = 0

  if(Buffer.isBuffer(fileBuffer)) {
    // const bufferString = fileBuffer.toString()
    // console.log('bufferString: ', bufferString);
    // const stringArr = bufferString.split('\n')
    // newlineNum = stringArr.length - 1

    newlineNum = (fileBuffer.toString().split('\n')).length - 1
  }

  return newlineNum
}


module.exports = {
  calculateSum,
  calculateNewlineNum
}