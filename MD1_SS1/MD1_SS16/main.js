let users = [
    { id: Date.now() * Math.random(), name: 'John', age: 30, status: true },
    { id: Date.now() * Math.random(), name: 'Mina', age: 26, status: false }
]

function setDataToLocalStorage() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(users))
    }
}
setDataToLocalStorage()

function renderData(arr) {
    let dataEl = document.getElementById("dataHere");
    let dataString = ``;
    for (let i in arr) {
        dataString += `
         <li>Name: ${arr[i].name}, age: ${arr[i].age}, status: ${arr[i].status ? "Hoạt Động" : "Khóa"}</li>
         <li><button onclick="deleteUser(${arr[i].id})">delete</button></li>
         <li><button onclick="updateUser(${arr[i].id})">update</button></li>
        `
    }
    dataEl.innerHTML = dataString;
}

renderData(JSON.parse(localStorage.getItem("users") ?? "[]"))


function addNewUser(eventForm) {
    eventForm.preventDefault();
    let newUser = {
        id: Date.now() * Math.random(),
        name: eventForm.target.name.value,
        age: Number(eventForm.target.age.value),
        status: eventForm.target.status == "true" ? true : false
    }
    /* Validate */
    if (newUser.name == "" || newUser.age == "") {
        alert("Bạn phải điền đầy đủ thông tin!")
        return
    }
    if (isNaN(Number(newUser.age))) {
        alert("Tuổi phải là số!")
        return
    }
    /* Lấy ra users cũ thêm phần tử mới và save trở lại local storage */
    let users = JSON.parse(localStorage.getItem("users") ?? "[]");
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    /* Render ra màn hình */
    renderData(users)
}

/* Xem và hiểu nội dung code trên */
// + Viết function xóa user
// + viết function update user
// + tất cả đều phải lưu trên LS


function deleteUser(params) {
    let dataToLocalStorage = JSON.parse(localStorage.getItem("users") ?? "[]")
    // JSON.parse(localStorage.getItem("users") ?? "[]")
    for (let i in dataToLocalStorage) {
        if (dataToLocalStorage[i].id===params){
            dataToLocalStorage.splice(i,1)
            break
        }
    }
    localStorage.setItem("users", JSON.stringify(dataToLocalStorage))
    renderData(JSON.parse(localStorage.getItem("users") ?? "[]"))
}


function updateUser(update) {
    let dataToLocalStorage = JSON.parse(localStorage.getItem("users") ?? "[]")
    for (let i in dataToLocalStorage) {
        if (dataToLocalStorage[i].id === update){
            dataToLocalStorage[i]={
                ...dataToLocalStorage[i],
                name: prompt("nhập tên mới", dataToLocalStorage[i].name),
                age: prompt("nhập tuổi mới", dataToLocalStorage[i].age),
                status: prompt("nhập xì ta tút", dataToLocalStorage[i].status) == "true" ? true : false,
            }
            break
            
        }
    }
    localStorage.setItem("users", JSON.stringify(dataToLocalStorage))
    renderData(JSON.parse(localStorage.getItem("users") ?? "[]"))
}