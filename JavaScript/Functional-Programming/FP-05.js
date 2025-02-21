const smartphones = [
  { brand: "iPhone", year: 2019, cameraResolution: 12.2 },
  { brand: "Samsung", year: 2021, cameraResolution: 13 },
  { brand: "Google Pixel", year: 2018, cameraResolution: 11 },
];
const filteredSmartPhones = smartphones.filter(
  (phone) => phone.year > 2020 && phone.cameraResolution > 12
);
console.log(filteredSmartPhones);

const books = [
  { title: "The Da Vinci Code", year: 2003, pages: 454 },
  { title: "The Alchemist", year: 1988, pages: 197 },
  { title: "The Hunger Games", year: 2008, pages: 374 },
];

const filteredBooks = books.filter(
  (book) => book.year > 2005 && book.pages < 400
);
console.log(filteredBooks);

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Headphones", price: 50, inStock: false },
  { name: "Smartphone", price: 800, inStock: true },
];
const filterdProducts = products.filter(
  (prod) => prod.price > 100 && prod.inStock === true
);
console.log(filterdProducts);

const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Avatar", year: 2009, rating: 7.8, genre: "Adventure" },
  { title: "The Dune", year: 2018, rating: 6.0, genre: "Action" },
];
const filteredMovies = movies.filter(
  (movie) => movie.year > 2010 && movie.rating > 8.0 && movie.genre === "Action"
);
console.log(filteredMovies);

const apartments = [
  { location: "Downtown", price: 1600, bedrooms: 2, safeNeighbourhood: true },
  { location: "Suburb", price: 1400, bedrooms: 1, safeNeighbourhood: false },
  {
    location: "City Center",
    price: 1800,
    bedrooms: 3,
    safeNeighbourhood: true,
  },
];
const filteredApartments = apartments.filter(
  (house) =>
    house.price > 1500 &&
    house.safeNeighbourhood === true &&
    house.bedrooms >= 2
);
console.log(filteredApartments);

const jobApplicants = [
  {
    name: "Alice",
    experienceYears: 4,
    englishProficiency: true,
    relevantDegree: true,
  },
  {
    name: "Bob",
    experienceYears: 2,
    englishProficiency: false,
    relevantDegree: true,
  },

  {
    name: "Charlie",
    experienceYears: 5,
    englishProficiency: true,
    relevantDegree: false,
  },
];

const filteredApplicants = jobApplicants.filter(
  (person) =>
    person.experienceYears >= 3 &&
    person.englishProficiency === true &&
    person.relevantDegree === true
);
console.log(filteredApplicants);

const restaurants = [
  {
    name: "Gourmet Grill",
    stars: 4.5,
    vegetarianOptions: true,
    location: "City",
  },

  {
    name: "Fast Noodles",
    stars: 3.8,
    vegetarianOptions: false,
    location: "Suburb",
  },

  {
    name: "Healthy Bites",
    stars: 4.2,
    vegetarianOptions: true,
    location: "City",
  },

  {
    name: "Chat Street",
    stars: 3.5,
    vegetarianOptions: false,
    location: "Suburb",
  },
];
const filteredRestro = restaurants.filter(
  (restaurant) =>
    restaurant.stars >= 4 &&
    restaurant.vegetarianOptions === true &&
    restaurant.location !== "City"
);
console.log(filteredRestro);

const booksData = [
  { title: "The Da Vinci Code", year: 2003, rating: 8.6, genre: "Mystery" },
  { title: "To Kill a Mockingbird", year: 1960, rating: 8.3, genre: "Drama" },
  { title: "Gone Girl", year: 2012, rating: 9.0, genre: "Thriller" },
];

const filteredBooksData = booksData.filter(
  (book) =>
    book.year > 2000 &&
    book.rating > 7.5 &&
    (book.genre !== "Mystery" || book.genre !== "Thriller")
);
console.log(filteredBooksData);