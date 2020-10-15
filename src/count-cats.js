const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
    let res = 0
    for (const cat of matrix) {
      for (const ear of cat) {
      if (ear === "^^") {
        res += 1
      }
     }
  
  }
    return res
}

