const transactionName = document.getElementById("transactionName");
const amount = document.getElementById("amount");
const showFinanceList = document.getElementById("showFinanceList");

document.getElementById("addBtn").addEventListener("click", () => {
    const inputElemnt = document.createElement("div");
    inputElemnt.innerHTML = `<li class="list-group-item d-flex">
     ${transactionName.value} Rs.${amount.value}
     <button onClick="deletedTask(this)" class="btn btn-danger btn-sm float-end ms-auto">Delete</button>
     </li>`;
    showFinanceList.appendChild(inputElemnt);
});
 
function deletedTask(deleteBtn){
    const listItem = deleteBtn.parentNode;
    listItem.remove();
}