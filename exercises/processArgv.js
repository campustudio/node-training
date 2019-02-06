const argvService = require('../services/argvService')
const mathService = require('../services/mathService')

// main function
const main = () => {
  let subArgv = argvService.getArgvFromIndex2() || []
  mathService.calculateSum(subArgv)
}

main()