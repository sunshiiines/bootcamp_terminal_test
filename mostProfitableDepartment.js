export default function mostProfitableDepartment(data){
let shopMap = {};
for(let i in data){
    const sale = data[i];
    shopMap[sale.department] = 0;
}

for(let i in data){
    const sale = data[i];
    let currentDepartmentTotal = shopMap[sale.department];
   
    currentDepartmentTotal += sale.sales;
    shopMap[sale.department] = currentDepartmentTotal;
}

let highestSale = 0;
let highestDepartment = "";

for(let x in shopMap){
   
    const currentDepartmentSale = shopMap[x];
    if(currentDepartmentSale > highestSale){
        
        highestSale = currentDepartmentSale;
        
        highestDepartment = x;
    }
}

return highestDepartment
}