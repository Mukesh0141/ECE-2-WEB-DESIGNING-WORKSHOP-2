let employees = [];
function addEmployee() {
    let emp = {
        name: document.getElementById("employeeName").value,
        id: document.getElementById("employeeID").value,
        salary: Number(document.getElementById("employeeSalary").value),
        department: document.getElementById("employeeDepartment").value
    };
    employees.push(emp);
    alert("Employee added successfully!");
}
function displayEmployees() {
    let output = "";

    for (let emp of employees) {
        output += emp.name + " - " + emp.salary + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function filterEmployees() {
    let result = employees.filter(emp => emp.salary > 50000);
    let output = "";
    for (let emp of result) {
        output += emp.name + " - " + emp.salary + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function totalsalary() {
    let total = 0;
    for (let emp of employees) {
        total += emp.salary;
    }
    document.getElementById("output").innerHTML = "Total Salary: " + total;
}

function averageSalary() {
    let total = 0;
    
    for (let emp of employees) {
        total += emp.salary;
        
    }
    let avg= total / employees.length;
    document.getElementById("output").innerHTML = "Average Salary: " + avg;
}


function countdept() {
    let depinput = prompt("Enter department name:");
    let count = 0;
    
    for (let emp of employees) {
        if (emp.department === depinput) {
            count++;
        }
    }
    document.getElementById("output").innerHTML = "Number of employees in " + depinput + ": " + count;
}

