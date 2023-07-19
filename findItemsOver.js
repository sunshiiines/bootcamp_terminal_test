export default function findItemsOver(itemList, quantity){
let itemsArr = [];
  for (let i=0; i<itemList.length; i++) {
   var items = itemList[i];
    if (items.qty > quantity) {
    itemsArr.push(items);
    }
  } return itemsArr;
}
