let allStudent = [];

function addStudent(){
    let studentName = document.getElementById("name").value
    let studentSurname = document.getElementById("surname").value
    let studentDate = document.getElementById("date").value
    let studentImage = document.getElementById("link").value
    let studentLearn = document.getElementById("learn").value

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("link").value = "";
    document.getElementById("learn").value = "";

    let newStudent = {
        name: studentName,
        surname: studentSurname,
        date: studentDate,
        image: studentImage,
        learn: studentLearn
    };

    allStudent.push(newStudent);
    console.log(allStudent);

    saveStudent();
}

function saveStudent(){
    let result = "";

    for (let i = 0; i<allStudent.length; i++){
        result+= `
                                <tr>
                                    <td></td>
                                    <td><p>${allStudent[i].name+ " " + allStudent[i].surname}</p></td>
                                    <td><p>${allStudent[i].date}</p></td>
                                    <td><img class="photo" src="${allStudent[i].image}" alt="Error!"></td>
                                    <td><p>${allStudent[i].learn}</p></td>
                                    <td><button class="btn btn-danger btn-block" onclick="deleteStudent()">Delete</button></td>
                                </tr>
        `
    }
    document.getElementById("result").innerHTML = result;
}

function deleteStudent(){
    allStudent.pop();
    saveStudent()
}