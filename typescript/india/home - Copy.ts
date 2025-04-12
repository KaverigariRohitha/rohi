interface student{
    name:string;
    age:number;
}
function addstudent()
{
    let name=document.getElementById("studentname")as HTMLInputElement;
    let age=document.getElementById("age")as HTMLInputElement;
    let addstudent=document.getElementById("addstudent")as HTMLButtonElement;
    let search=document.getElementById("search")as HTMLInputElement;
    let student=document.getElementById("student")as HTMLTableSectionElement;
    let students:student[]=[];
    addstudent.addEventListener("click",()=>
        {
        let nameinput=name.value.trim();
        let ageinput=Number(age.value);
// Step 2: Get all HTML elements
var nameInput = document.getElementById("studentName");
var ageInput = document.getElementById("studentAge");
var addButton = document.getElementById("addStudentBtn");
var searchBox = document.getElementById("searchBox");
var studentTable = document.getElementById("studentTable");
// Step 3: Store students in an array
var students = [];
// Step 4: Add student on button click
addButton.addEventListener("click", function () {
    var name = nameInput.value.trim();
    var age = Number(ageInput.value);
    if (!name || !age) {
        alert("Please enter both name and age.");
        return;
    }
    var newStudent = { name: name, age: age };
    students.push(newStudent);
    nameInput.value = "";
    ageInput.value = "";
    renderTable(students);
});
// Step 5: Filter students on typing in search
searchBox.addEventListener("input", function () {
    var searchTerm = searchBox.value.toLowerCase();
    var filtered = students.filter(function (s) { return s.name.toLowerCase().includes(searchTerm); });
    renderTable(filtered);
});
// Step 6: Display students in table
function renderTable(studentList) {
    studentTable.innerHTML = "";
    studentList.forEach(function (student) {
        var row = studentTable.insertRow();
        row.insertCell(0).textContent = student.name;
        row.insertCell(1).textContent = student.age.toString();
    });
}