const products = [
    'Apple meomeo',
    'Samsung Galaxy s23',

];
const tableBody = document.getElementById('productList');
tableBody.innerHTML = '';
let row = '';
for(let i = 0; i<product.length;i++){
    row += '<tr>';
    row += '<td>${product[i]}</td>'
    row +='<td><button type="button">Edit</button></td>'
    row += '</tr>';
}
tableBody.innerHTML = row;