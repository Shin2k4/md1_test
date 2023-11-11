let students = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 15,
        gender: true,
    },
];
function renderStudent(student) {
    let tableBodyEL = document.getElementById("tbBody");
    let newString = ``;
    for (let i in students) {
        newString += `
<tr>
    <th scope="row">${Number(i) + 1}</th>
    <td>${student[i].name}</td>
    <td>${student[i].age}</td>
    <td>${student[i].gender ? "Nam" : "Nữ"} </td>
    <td>
        <button onclick="deleteStudent(${student[i].id})">Delete</button>
        <button onclick="updateStudent(${student[i].id})">Update</button>
    </td>
</tr>
`;
    }
    tableBodyEL.innerHTML = newString;
}
renderStudent(students);

function addStudent(event) {
    event.preventDefault();
    let newStudent = {
        id: Date.now() * Math.random(),
        name: event.target.name.value,
        age: Number(event.target.age.value),
        gender: event.target.gender.value == "true" ? true : false,
    };
    // console.log(newStudent);
    students.push(newStudent);
    renderStudent(students);
}

/**
 * bước1: khi click vào hàng nào thì mình xoá student đấy
 * Input: Id student
 * Output: render lại dữ liệu
 */
function deleteStudent(studentId) {
    console.log("Đãvaof", studentId);
    for (let i in students) {
        if (students[i].id == studentId) {
            students.splice(i, 1);
            break;
        }
    }
    renderStudent(students);
}

function updateStudent(studentId) {
    console.log("đã vào", students);
    for (let i in students) {
        if (students[i].id == studentId) {
            students[i] = {
                ...students[i],
                name: prompt("mời bạn nhập tên mới", students[i].name),
                age: prompt("mời bạn nhập tuổi mới", students[i].age),
                gender:
                    prompt("mời bạn nhập giới tính", students[i].gender ? "nam" : "nu") ==
                        "nam"
                        ? true
                        : false,
            };
            break;
        }
    }
    renderStudent(students);
}


let sort = false;

function sortWithAge(array) {
    for (let i = 0; i < array.length - 1; i++) {

        for (let j = i + 1; j < array.length; j++) {
            if (sort == false) {
                if (array[j].age < array[i].age) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            } else {
                if (array[j].age > array[i].age) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    renderStudent(array);
    sort = !sort
}  


function search(params) {
    let searchInputEL = document.getElementById("
    ")
}