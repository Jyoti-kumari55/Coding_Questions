const data = [
  { id: 1, title: "Task 1", status: "todo" },
  { id: 2, title: "Task 2", status: "inProgress" },
  { id: 3, title: "Task 3", status: "completed" },
  { id: 4, title: "Task 4", status: "todo" },
];

const todoList = document.querySelector("#todoList");
const filterStatus = document.querySelector("#status");
const renderTodoList = (todo) => {
  const todoElement = todo.map(
    (data) =>
      `
      <li>
      <b>ID: </b>${data.id} <br/>
      <b>Title: </b>${data.title} <br/>
      <b>Status: </b>${data.status} <br/> 
      <hr/>    
      </li>
    `
  );
  todoList.innerHTML = todoElement.join(" ");
};
renderTodoList(data);

filterStatus.addEventListener("change", () => {
    function applyStatusFilter() {
        var selectedStatus = filterStatus.value;
        var filteredData = [];

        if(selectedStatus === "all") {
            filteredData = data
        }else {
            filteredData = data.filter((datas) => datas.status === selectedStatus)
        }
        renderTodoList(filteredData)

    }
    applyStatusFilter()
});

const employees = [
    {id: 1, name: "Alice", experience: 2},
    {id: 2, name: "Bob", experience: 9},
    {id: 3, name: "Charlie", experience: 4},
    {id: 4, name: "David", experience: 19}
  ];

  const employeeList = document.querySelector("#employeeList");
  const expCheckBox = document.querySelector("#expBox");

  const renderedEmpList = (emp) => {
    const experienceFilter = emp ? employees.filter((person) => person.experience > 5) : employees;
    const empElement = experienceFilter.map((person) => 
    `
    <li>
     <b>ID: </b>${person.id} <br/>
      <b>Name: </b>${person.name} <br/>
      <b>Experience: </b>${person.experience} years <br/> 
      <hr/>   
    </li>

    `);
    employeeList.innerHTML = empElement.join(" ");
  }
  renderedEmpList();

  expCheckBox.addEventListener("change", () => {
    renderedEmpList(expCheckBox.checked)

  })
