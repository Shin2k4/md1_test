

let products = [
    {
        id: Date.now() * Math.random(),
        name: "Áo dài",
        price: "5000$",
        avatar: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-bzhn7djynoovc6",
    }
];
function renderProducts(products) {
    let tableBody = document.getElementById('tableBody');
    let dataString = ``;
    for(let i in products){
        dataString += `
        <tr>
                <td scope="row">${Number(i) +1}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td><img src="${products[i].avatar}" style="width: 100px;height: 100px; border-radius: 50%"></td>
                <td><button onclick ="deleteProduct(${products[i].id})" type="button" >Delete</button></td>
                <td><button onclick ="updateProduct(${products[i].id})" type="button" >Up Date</button></td>
            </tr>
        `

    }

    tableBody.innerHTML = dataString;
    
}
renderProducts(products)

function handleAddProduct(event) {
    event.preventDefault();
    let newProduct = {
        id: Date.now()*Math.random(),
        name: event.target.name.value,
        price: event.target.price.value,
        avatar: event.target.avatar.value,
    }
    
    products.push(newProduct);

    renderProducts(products);
}

function deleteProduct(productsId) {
    for( let i in products){
        if (products[i].id == productsId) {
            products.splice(i,1)
            break
        }
    }
    renderProducts(products)
}

function updateProduct(productsId) {
    for (let i in productsId) {
        if (products[i].id === productsId) {
            products[i] = {
                ...products[i],
                name: prompt("Nhập tên sản phẩm", products[i].name),
                price: prompt("Nhập tên sản phẩm", products[i].price),
                avatar: prompt("Nhập tên sản phẩm", products[i].avatar)
            }
            break;
        }      

    }
    renderProducts(products);
}
