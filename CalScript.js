function clearScreen()   // This function clear all the values
{
document.getElementById("result").value = "";
}

function display(value)   // This function display values
 {
    document.getElementById("result").value += value;
}

function calculate()  // This function evaluates the expression and returns result
 {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;
}

var students = [];

function submitForm(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var gender = document.getElementById("gender").value;
  var birthdate = document.getElementById("birthdate").value;
  var course = document.getElementById("course").value;

  // Create student object
  var student = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    gender: gender,
    birthdate: birthdate,
    course: course,
  };

  // Add student object to students array
  students.push(student);

  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("birthdate").value = "";
  document.getElementById("course").value = "";

  // Display students
  displayStudents();
}

function displayStudents() {
  var studentsList = document.getElementById("students-list");
  studentsList.innerHTML = "";

  for (var i = 0; i < students.length; i++) {
    var student = students[i];

    var listItem = document.createElement("li");
    listItem.innerHTML =
      "<strong>Name:</strong> " +
      student.name +
      "<br><strong>Email:</strong> " +
      student.email +
      "<br><strong>Phone:</strong> " +
      student.phone +
      "<br><strong>Address:</strong> " +
      student.address +
      "<br><strong>Gender:</strong> " +
      student.gender +
      "<br><strong>Birthdate:</strong> " +
      student.birthdate +
      "<br><strong>Course:</strong> " +
      student.course;

    studentsList.appendChild(listItem);
  }
}

// Bind submitForm function to submit button
var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitForm);