const voters = document.getElementsByName("voters");
const votersResult = document.getElementById("votersResults");
const winnerResult = document.getElementById("winnerResult");

let votersCount = {
  "John Doe": 0,
  "Alex William": 0,
  "Prerana Nawar": 0,
};
document.getElementById("votersSubmitBtn").addEventListener("click", () => {
  const seletedVoter = Array.from(voters).find((voter) => voter.checked);

  if (seletedVoter) {
    votersCount[seletedVoter.value]++;
    updateResults();
    determineWinner();
  }
});

function updateResults() {
  votersResult.innerHTML = " ";

  Object.keys(votersCount).forEach((voter) => {
    const listElement = document.createElement("div");
    listElement.innerHTML = `<ul class="list-group"><li class="list-group-item">${voter}: ${votersCount[voter]}</li></ul>`;
    votersResult.appendChild(listElement);
  });
}

function determineWinner() {
  const maxVotes = Math.max(...Object.values(votersCount));
  if (maxVotes === 0) {
    winnerResult.textContent = "Winner: No votes yet.";
  } else {
    const winner = Object.keys(votersCount).filter(
      (voter) => votersCount[voter] === maxVotes
    );

    if (winner.length === 1) {
      winnerResult.textContent = `${winner[0]} is winning with ${maxVotes} votes.`;
    } else {
      winnerResult.textContent = `It's a tie between ${winner.join(" and ")}.`;
    }
  }
}
