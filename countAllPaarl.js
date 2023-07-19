export default function countAllPaarl(regList) {
    let regNum = regList.split(', ');
    let Count = 0;
  for (var i=0; i<regNum.length; i++) {
  if (regNum[i].startsWith('CJ')) {
  Count++;
  }
  }
    return Count;
  }