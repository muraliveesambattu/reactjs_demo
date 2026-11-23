
var users = JSON.parse(localStorage.getItem("users"))
displayUsers(users)
function addUser() {
    var user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users))
    displayUsers(users);
    clearForm();
}

function displayUsers(users) {
    document.querySelector("tbody").innerHTML = "";

    users.forEach(function (user,index) {
        var myTr = document.createElement("tr");
        myTr.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="handleEdit(${index})">Edit User </button>
            </td>
             <td>
                <button onclick="handleDelete(${index})">Delete User </button>
            </td>
            `
        document.querySelector("tbody").appendChild(myTr)
    })
}

function clearForm(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
}

function handleDelete(index){
    users.splice(index,1)
    localStorage.setItem("users",JSON.stringify(users))
    displayUsers(users)
}

var gindex = null;

function handleEdit(index){
    gindex=index;
    document.getElementById("firstName").value = users[index].firstName;
    document.getElementById("lastName").value = users[index].lastName;
    document.getElementById("email").value = users[index].email;

    document.getElementById("addUserBtn").style.display = "none";
    document.getElementById("updateUserBtn").style.display="block"
}

function updateUser (){
    var user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
    }

    users[gindex] = user;
    displayUsers(users);
    clearForm();

     document.getElementById("addUserBtn").style.display = "block";
    document.getElementById("updateUserBtn").style.display="none";
    localStorage.setItem("users",JSON.stringify(users))
}