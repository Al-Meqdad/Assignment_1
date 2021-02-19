let students = [];
let x = 0;
document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    let nameInputEl = document.getElementById("name");
    let idInputEl = document.getElementById("idNumber");
    let gdpaInputEl = document.getElementById("gdpa");

    // Validation for input
    inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

    // insert student
    if (x == 1) {
        insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
    }

    // Show success message
});

function inputValidation(name, id, gdpa) {
    // check for the value of each element

    if (name == "") {
        document.getElementById("Error101").style.display = "block";
    } else if (id == "") {
        document.getElementById("Error101").style.display = "block";
    } else if (gdpa == "") {
        document.getElementById("Error101").style.display = "block";
    } else {
        document.getElementById("Succes101").style.display = "block";
        x = 1;
    }
    setTimeout(function () {
        document.getElementById("Error101").style.display = "none";
        document.getElementById("Succes101").style.display = "none";
    }, 3000);
}

function insertStudent(name, id, gdpa) {
    let student = {
        name: name,
        id: id,
        gdpa: gdpa,
    };
    students.push(student);
    console.log("students array: ", students);
    x = 0;
}

function showList() {
    document.getElementById("ShowLi").innerHTML = students.map(({ name, id, gdpa }) => `<tr><td>${name}</td><td>${id}</td><td>${gdpa}</td></tr>`).join("");
    document.getElementById("showTable").classList.remove("hide");
    document.getElementById("Title1").classList.remove("hide");
}

function Delete_s() {
    let StudentNO = document.getElementById("studentNo").value;
    StudentNO = StudentNO - 1;
    for (let i = 0; i <= students.length; i++) {
        if (i === StudentNO) {
            students.splice(i, 1);
        }
    }
}

function Update_s() {
    let StudentNO = document.getElementById("studentNo").value;
    StudentNO = StudentNO - 1;
    let nameInputEl = document.getElementById("name").value;
    let gdpaInputEl = document.getElementById("gdpa").value;
    let idInputEl = document.getElementById("idNumber").value;

    if (students[StudentNO].id != idInputEl) {
        students[StudentNO].id = idInputEl;
    }
    if (students[StudentNO].name != nameInputEl) {
        students[StudentNO].name = nameInputEl;
    }
    if (students[StudentNO].gdpa != gdpaInputEl) {
        students[StudentNO].gdpa = gdpaInputEl;
    }
}
