const items = [
  { id: 1, item: "Item 1", price: 10 },
  { id: 2, item: "Item 2", price: 20 },
  { id: 3, item: "Item 3", price: 15 },
  { id: 4, item: "Item 4", price: 25 },
];

const itemList = document.querySelector("#itemList");
const itemTotalCost = document.querySelector("#itemTotalCost");
const itemAvgCost = document.querySelector("#itemAvgCost");

const getItemListData = items.map((data) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `${data.item} - $${data.price}`;
    itemList.appendChild(liElement);

    const totalCost = items.reduce((item, curr) => curr.price + item, 0)
    itemTotalCost.innerHTML = `$${totalCost.toFixed(2)}`;
    itemAvgCost.innerHTML = `$${(totalCost / items.length).toFixed(2)}`;

})