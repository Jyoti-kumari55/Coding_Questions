const expenses = [
  { id: 1, name: "Groceries", amount: 150 },
  { id: 2, name: "Utilities", amount: 80 },
  { id: 3, name: "Dining Out", amount: 120 },
  { id: 4, name: "Transportation", amount: 50 },
];
const inputCheckbox = document.querySelector("#inputCheckbox");
const expenseList = document.querySelector("#expenseList");
const totalExpense = document.querySelector("#totalExpense");

const renderedExpensesData = (selectedType) => {
 const filteredExp = selectedType ? expenses.filter((exp) => exp.amount > 100 ) : expenses;
const getTotalAmount = filteredExp.reduce((sum, curr) => curr.amount + sum, 0);

 const expenseElement = filteredExp.map((expense) => 
 `
    <li>
    <strong>Expense: </strong>${expense.name} <br/>
    <strong>Amount: </strong>${expense.amount} 
    <hr/>
    </li> 
 `
);
expenseList.innerHTML = expenseElement.join(" ");
totalExpense.textContent = `$${getTotalAmount.toFixed(2)}`;
}
renderedExpensesData();
inputCheckbox.addEventListener("change", function(){
    renderedExpensesData(inputCheckbox.checked)

});
