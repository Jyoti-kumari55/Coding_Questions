const employees = [
    {id: 1, name: "Alice", position: "Developer"},
    {id: 2, name: "Bob", position: "Designer"},
    {id: 3, name: "Charlie", position: "Manager"},
    {id: 4, name: "David", position: "Tester"}
  ];

  const employeeList = document.querySelector("#empList");
  const empInfo = employees.map((emp) => `
  <div key=${emp.id}>
    <strong>ID: </strong>${emp.id} <br/>
    <strong>Name: </strong>${emp.name} <br/> 
    <strong>Position: </strong>${emp.position} <br/>
    <hr/>
</div>`
)
employeeList.innerHTML = empInfo.join(" ");

const movieData = [
    {id: 1, title: "The Shawshank Redemption", genre: "Drama", year: 1994},
    {id: 1, title: "The GodFather", genre: "Crime", year: 1972}, 
    {id: 1, title: "The Dark Knight", genre: "Action", year: 2008}, 
    {id: 1, title: "Pulp Fiction", genre: "Crime", year: 1994},
  ]
  
const movieDataList = document.querySelector("#movieList");
const movies = movieData.map((movie) => `
<div> 
    <strong>ID: </strong>${movie.id} <br/>
    <strong>Title: </strong>${movie.title} <br/>
    <strong>Genre: </strong>${movie.genre} <br/>
    <strong>Year: </strong>${movie.year} <br/>
    <hr/>
    </div>
`)
movieDataList.innerHTML = movies.join(" ");