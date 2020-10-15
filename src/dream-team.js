const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = ''
  if (Array.isArray(members) === false){
    return false
  } 
  for (const name of members) {
    if (typeof(name) === 'string'){
      console.log(name.replace(/ /g, '').slice(0, 1))
    res += name.replace(/ /g, '').slice(0, 1)
    }
  }
  
  return res.toUpperCase().split('').sort().join('')
};
