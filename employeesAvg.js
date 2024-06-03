function Employees() {
  const employees = [
    { name: "Alice", age: 30, department: "Engineering" },
    { name: "Bob", age: 25, department: "Marketing" },
    { name: "Charlie", age: 35, department: "Engineering" },
    { name: "David", age: 40, department: "HR" },
    { name: "Eve", age: 28, department: "Marketing" },
  ];

  const departmentAges = {};

  employees.forEach(function (employee) {
    if (departmentAges.hasOwnPropert(employee.department)) {
      departmentAges[employee.department] += employee.age;
    } else {
      departmentAges[employee.department] = employee.age;
    }
  });

  return departmentAges;
}

const result = Employees();
console.log(result);
