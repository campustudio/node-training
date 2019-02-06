const calculateSum = (arr = []) => {
  let sum = 0
  arr.forEach(element => {
    sum += Number(element)
  });
  
  // console.log('sum: ', sum);
  console.log(sum);
  return sum
}

module.exports = {
  calculateSum
}