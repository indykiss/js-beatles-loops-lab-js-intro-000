

function theBeatlesPlay(arrMus, arrInst) {
  var newArr = []
  for (var i = 0; i < arrMus.length; i++){
    
    for (var j = 0; j < arrInst.length; j++) {
      
    newArr.push(arrMus[i] + " plays " + arrInst[j])
    }
    
  console.log(newArr)

  }
}aZ