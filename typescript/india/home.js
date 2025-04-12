function addstudent() {
    var name = document.getElementById("studentname");
    var age = document.getElementById("age");
    var addstudent = document.getElementById("addstudent");
    var search = document.getElementById("search");
    var student = document.getElementById("student");
    var students = [];
    addstudent.addEventListener("click", function () {
        var nameinput = name.value.trim();
        var ageinput = Number(age.value);
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
    });
}
