const tasks = [
  { id: 1, task: "Task 1", status: "todo" },
  { id: 2, task: "Task 2", status: "completed" },
  { id: 3, task: "Task 3", status: "inProgress" },
  { id: 4, task: "Task 4", status: "todo" },
  { id: 5, task: "Task 5", status: "completed" },
];

const taskStatus = document.getElementsByName("status");
const todoList = document.querySelector("#todoList");

const renderedTasks = (selectedTask) => {
  const filteredTask =
    selectedTask === "all"
      ? tasks
      : tasks.filter((data) => data.status === selectedTask);

  const taskListElement = filteredTask.map(
    (data) =>
      `<li>
      <b>ID: </b>${data.id} <br/>
      <b>Title: </b>${data.task} <br/>
      <b>Status: </b>${data.status} <br/> 
      <hr/> 
    </li>
    `
  );
  todoList.innerHTML = taskListElement.join(" ");
};
renderedTasks("all");

taskStatus.forEach((eleBtn) => {
  eleBtn.addEventListener("change", function () {
    renderedTasks(this.value);
  });
});

const items = [
  { id: 1, item: "Item 1", status: "In Sale" },
  { id: 2, item: "Item 2", status: "New Release" },
  { id: 3, item: "Item 3", status: "New Release" },
  { id: 4, item: "Item 4", status: "In Sale" },
  { id: 5, item: "Item 5", status: "In Sale" },
];
const itemStatus = document.getElementsByName("taskStatus");
const itemList = document.querySelector("#itemList");

const renderedItemList = (seletedItem) => {
  const filteredItem =
    seletedItem === "all"
      ? items
      : items.filter((data) => data.status === seletedItem);
  const itemListElement = filteredItem.map(
    (data) => `
  <li>
      <b>ID: </b>${data.id} <br/>
      <b>Title: </b>${data.item} <br/>
      <b>Status: </b>${data.status} <br/> 
      <hr/> 
   </li>`
  );
  itemList.innerHTML = itemListElement.join(" ");
};
renderedItemList("all");

itemStatus.forEach((eleBtn) => {
  eleBtn.addEventListener("change", function () {
    renderedItemList(this.value);
  });
});
