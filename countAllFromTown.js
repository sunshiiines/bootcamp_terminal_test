export default function countAllFromTown(regList, town) {
    let regNum = regList.split(','); 
    
    var fromTown = [];
    let Count = 0;
  for (var i=0; i<regNum.length; i++) {
    let fromTown = regNum[i].trim();
  if (fromTown.startsWith(town)) {
  Count++;
  }
  }
    return Count;
  }
  