export default function findItemsOver20(itemList){
let itemsArr = [];
  for (let i=0; i<itemList.length; i++) {
   var items = itemList[i];
    if (items.qty > 20) {
    itemsArr.push(items);
    }
  } return itemsArr;
}