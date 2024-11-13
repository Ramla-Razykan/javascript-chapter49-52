// ===============Question1: Create a signup form and display form data in your web page on submission. 
// function displayData(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     document.getElementById('displayData').innerHTML = `
//                 <p><strong>Username:</strong> ${username}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Password:</strong> ${password}</p>
//             `;
// }

// ===============Question2: Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 
// function toggleDetails(elementId) {
//     var moreText = document.getElementById(elementId);
//     if (moreText.style.display === "none") {
//         moreText.style.display = "inline";
//     } else {
//         moreText.style.display = "none";
//     }
// }

// ===============Question3:  In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row. 
// function addStudent(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const grade = document.getElementById('grade').value;

//     const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
//     const newRow = table.insertRow();

//     const nameCell = newRow.insertCell(0);
//     const ageCell = newRow.insertCell(1);
//     const gradeCell = newRow.insertCell(2);
//     const actionsCell = newRow.insertCell(3);

//     nameCell.textContent = name;
//     ageCell.textContent = age;
//     gradeCell.textContent = grade;

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.onclick = function() {
//         deleteRow(newRow);
//     };

//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     editButton.onclick = function() {
//         editRow(newRow);
//     };

//     actionsCell.appendChild(deleteButton);
//     actionsCell.appendChild(editButton);

//     document.getElementById('studentForm').reset();
// }
// function deleteRow(row) {
//     row.parentNode.removeChild(row);
// }
// function editRow(row) {
//     const cells = row.getElementsByTagName('td');
//     const name = cells[0].textContent;
//     const age = cells[1].textContent;
//     const grade = cells[2].textContent;

//     document.getElementById('editName').value = name;
//     document.getElementById('editAge').value = age;
//     document.getElementById('editGrade').value = grade;

//     document.getElementById('editIndex').value = row.rowIndex;

//     document.getElementById('editForm').style.display = 'block';
// }
// function updateStudent(event) {
//     event.preventDefault();

//     const rowIndex = document.getElementById('editIndex').value;
//     const name = document.getElementById('editName').value;
//     const age = document.getElementById('editAge').value;
//     const grade = document.getElementById('editGrade').value;

//     const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
//     const row = table.rows[rowIndex - 1];

//     row.cells[0].textContent = name;
//     row.cells[1].textContent = age;
//     row.cells[2].textContent = grade;

//     document.getElementById('editForm').style.display = 'none';
// }