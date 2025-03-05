const task = document.getElementById("task");
const priority = document.getElementById("priority");
const lowPList = document.getElementById("lowPList");
const mediumPList = document.getElementById("mediumPList");
const highPList = document.getElementById("highPList");

document.getElementById("todoBtn").addEventListener("click", () => {
  const listElementLow = document.createElement("div");
  const listElementMed = document.createElement("div");
  const listElementHigh = document.createElement("div");
  let seletectedPriority = priority.value;
  if (seletectedPriority === "Low Priority") {
    listElementLow.innerHTML = `<li class="list-group-item d-flex"> ${task.value} 
    <button class="btn btn-danger ms-auto" onClick="deleteAddedPriority(this)">Delete </button></li>`;
    lowPList.appendChild(listElementLow);
  }
  if (seletectedPriority === "Medium Priority") {
    listElementMed.innerHTML = `<li class="list-group-item d-flex"> ${task.value} 
    <button class="btn btn-danger ms-auto" onClick="deleteAddedPriority(this)">Delete </button></li>`;
    mediumPList.appendChild(listElementMed);
  }
  if (seletectedPriority === "High Priority") {
    listElementHigh.innerHTML = `<li class="list-group-item d-flex"> ${task.value} 
    <button class="btn btn-danger ms-auto" onClick="deleteAddedPriority(this)">Delete </button></li>`;
    highPList.appendChild(listElementHigh);
  }
  task.value = "";

});

function deleteAddedPriority(deleteBtn) {
    const listItem = deleteBtn.parentNode;
    listItem.remove();
}
