const data = [
  { key: "item", value: "Pencil" },
  { key: "price", value: 250 },
  { key: "inStock", value: true },
];
const extractData = data.reduce((item, curr) => {
  item[curr.key] = curr.value;
  return item;
}, {});
console.log("Extract Data: ", extractData);

const students = [
  { item: "Pen", color: "blue" },
  { item: "Pen", color: "black" },
  { item: "Pen", color: "red" },
];

const extractStudents = students.reduce((student, curr) => {
  student.push(curr.color);
  return student;
}, []);
console.log("Extract students: ", extractStudents);

const countries = [
  { item: "Car", manufacturingCity: "New York" },
  { item: "Car", manufacturingCity: "Los Angeles" },
  { item: "Car", manufacturingCity: "Chicago" },
];
const arrOfCities = countries.reduce((city, curr) => {
  city.push(curr.manufacturingCity);
  return city;
}, []);
console.log("Get all Cities: ", arrOfCities);

const details = [
  { key: "category", value: "Electronics" },
  { key: "rating", value: 4.5 },
  { key: "available", value: true },
];
const transformInObject = details.reduce((data, curr) => {
  data[curr.key] = curr.value;
  return data;
}, {});
console.log("Transform data into Object: ", transformInObject);

const userPreferences = [
  { key: "theme", value: "Dark Mode" },
  { key: "fontSize", value: 16 },
  { key: "notifications", value: true },
];
const transfornIntoUserData = userPreferences.reduce((user, curr) => {
  user[curr.key] = curr.value;
  return user;
}, {});
console.log("Transform user into Object: ", transfornIntoUserData);

const continents = [
  { key: "Asia", country: "India" },
  { key: "Europe", country: "France" },
  { key: "North America", country: "USA" },
];

const getObjOfContinents = continents.reduce((continent, curr) => {
    continent[curr.key] = curr.value;
    return continent;
}, {});
console.log("Get object of Continents: ", getObjOfContinents);