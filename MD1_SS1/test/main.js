let users = []
function setDataToLocalStorage() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(users))
    }
}
setDataToLocalStorage()

function renderData(arr) {
    let dataUser=``
    for (let i in arr) {
        dataUser+=`
        <li>ID:</li>
        <li>Avata:<input type="text" name="avata"></li>
        <li>Name:<input type="text" name="name"></li>
        <li>Age:<input type="text" name="age"></li>
        <li>Status:<input type="text" name="status"></li>
        <li><button type="submit">submit</button></li>
        `
    }

}


function dataUser(arr) {
    arr.preventDefault();
    let newUsers = {
        id: Date.now()*Math.random(),
        name: arr.target.name.value,
        avata: arr.target.avata.value,
        age: Number(arr.target.age.value),
        status: arr.target.status == "true" ? true : false
    }
    let user = JSON.parse(localStorage.getItem("users") ?? "[]")
    user.push(newUsers)
    localStorage.setItem("users",JSON.stringify(users))
}