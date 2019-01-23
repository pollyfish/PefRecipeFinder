//let url = "https://cors-anywhere.herokuapp.com/http://recipepuppy.com/api";
//document.write("is this ever gonna work?");
//fetch(url)
 // .then(r => {
//  console.log(data);
//    return r.json();
//  })
//var data = {"title":"Recipe Puppy","version":0.1,"href":"http:\/\/www.recipepuppy.com\/","results":[{"title":"Ginger Champagne","href":"http:\/\/allrecipes.com\/Recipe\/Ginger-Champagne\/Detail.aspx","ingredients":"champagne, ginger, ice, vodka","thumbnail":"http:\/\/img.recipepuppy.com\/1.jpg"},{"title":"Potato and Cheese Frittata","href":"http:\/\/allrecipes.com\/Recipe\/Potato-and-Cheese-Frittata\/Detail.aspx","ingredients":"cheddar cheese, eggs, olive oil, onions, potato, salt","thumbnail":"http:\/\/img.recipepuppy.com\/2.jpg"},{"title":"Eggnog Thumbprints","href":"http:\/\/allrecipes.com\/Recipe\/Eggnog-Thumbprints\/Detail.aspx","ingredients":"brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar","thumbnail":"http:\/\/img.recipepuppy.com\/3.jpg"},{"title":"Succulent Pork Roast","href":"http:\/\/allrecipes.com\/Recipe\/Succulent-Pork-Roast\/Detail.aspx","ingredients":"brown sugar, garlic, pork chops, water","thumbnail":"http:\/\/img.recipepuppy.com\/4.jpg"},{"title":"Irish Champ","href":"http:\/\/allrecipes.com\/Recipe\/Irish-Champ\/Detail.aspx","ingredients":"black pepper, butter, green onion, milk, potato, salt","thumbnail":"http:\/\/img.recipepuppy.com\/5.jpg"},{"title":"Chocolate-Cherry Thumbprints","href":"http:\/\/allrecipes.com\/Recipe\/Chocolate-Cherry-Thumbprints\/Detail.aspx","ingredients":"cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract","thumbnail":"http:\/\/img.recipepuppy.com\/6.jpg"},{"title":"Mean Woman Pasta","href":"http:\/\/allrecipes.com\/Recipe\/Mean-Woman-Pasta\/Detail.aspx","ingredients":"garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato","thumbnail":"http:\/\/img.recipepuppy.com\/7.jpg"},{"title":"Hot Spiced Cider","href":"http:\/\/allrecipes.com\/Recipe\/Hot-Spiced-Cider\/Detail.aspx","ingredients":"allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt","thumbnail":"http:\/\/img.recipepuppy.com\/8.jpg"},{"title":"Isa's Cola de Mono","href":"http:\/\/allrecipes.com\/Recipe\/Isas-Cola-de-Mono\/Detail.aspx","ingredients":"cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar","thumbnail":"http:\/\/img.recipepuppy.com\/9.jpg"},{"title":"Amy's Barbecue Chicken Salad","href":"http:\/\/allrecipes.com\/Recipe\/Amys-Barbecue-Chicken-Salad\/Detail.aspx","ingredients":"barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato","thumbnail":"http:\/\/img.recipepuppy.com\/10.jpg"}]}
 // .then(data => {
 //   let results = data.results; // get the array of results from the data object
  //  let recipeList = document.createElement("ul"); // create a new `<li>`
 //   let body = document.querySelector("body"); // attach to the `<body>` node of the DOM
 //   body.appendChild(recipeList); // append the list to the body
 //   results.map(recipe => {
      // loop through each recipe object in the array of recipes
   //   let recipeItem = document.createElement("li"); // create a recipe item `<li>`
   //   recipeItem.innerHTML =
   //     '<a href="' + recipe.href + '">' + recipe.title + "</a>"; // add the link to each li with each recipe's title as the text and link as the href
     // recipeList.appendChild(recipeItem); // append each recipe to the `<ul>`
  //  });
 // })
//  .catch(e => {
 //   console.log(`An error occurred: ${e}`);
//  });

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

// Begin accessing JSON data here
var data = JSON.parse(this.response);
if (request.status >= 200 && request.status < 400) {
data.forEach(movie => {
  // Log each movie's title
  console.log(movie.title);
});
} else {
 console.log('error');
}
}
 // Send request
 request.send();
