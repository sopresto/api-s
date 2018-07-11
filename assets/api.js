// 1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
//    * We chose animals for our theme, but you can make a list to your own liking.

// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages.

//My array of topics:
var topics = ["Khole Kardashian", "Kim Kardashian", "Kourtney Kardashian", "Gabrielle Union", "SZA", "Beyonce"];

//This will set a variable for button to call in the for loop.
var button;

//this will loop over the array and create buttons for the array on the page
for (var i in topics) {
  console.log(topics);
  button = $(`<button id=${topics[i]}></button>`);
  button.text(topics[i]);
  $(button).css({ "background-color": "black", "color": "white", "padding": "32px 16px" });
  $(".buttons").css("background-color", "pink");
  $(".buttons").append(button);
}
//**Unable to get this to work */
//This first function should reset the page after every click.
//document.on("click", "button", function (){
        //reset all
// })

//This will begin our first query in order to display images on the click action of khole.
  var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=khole+kardashian&limit=10&offset=0&rating=PG-13&lang=en;"

  $("#Khole").on("click", function(){
    var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=khole+kardashian&limit=10&offset=0&rating=PG-13&lang=en;"

    $.ajax({
      url : queryURl,
      method : "GET"
    }).then(function(response){
      // console.log(response);

      var results = response.data
      for (var j in results) {
        var rating = results[j].rating;
        // console.log(rating);
        var p = $("<p>").text("Rating:" + rating);
        $("#results").append(p);
        
        var images = results[j].images;
        var imageUrl = images.original_still.url;
        // console.log(imageUrl);
        images = $("<img>");
        images.attr("src", imageUrl);
        images.attr("alt", "khole image");
        $("#khole").append(images);

      }
    })
  })

  //This will begin the query for all of the kim kardashian images.
  var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=kim+kardashian&limit=10&offset=0&rating=PG-13&lang=en;"

  $("#Kim").on("click", function(){
    var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=kim+kardashian&limit=10&offset=0&rating=PG-13&lang=en;"

    $.ajax({
      url : queryURl,
      method : "GET"
    }).then(function(response){
      // console.log(response);

      var results = response.data
      for (var j in results) {
        var rating = results[j].rating;
        // console.log(rating);
        var p = $("<p>").text("Rating:" + rating);
        $("#results").append(p);
        
        var images = results[j].images;
        var imageUrl = images.original_still.url;
        // console.log(imageUrl);
        images = $("<img>");
        images.attr("src", imageUrl);
        images.attr("alt", "kim image");
        $("#kim").append(images);
      }
    })
  })

  //this is the query that will run images of Kourtney.
  var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=kourtney+kardashian&limit=10&offset=0&rating=PG-13&lang=en;"

  $("#Kourtney").on("click", function(){
    var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=kourtney+kardashian&limit=10&offset=0&rating=PG-13&lang=en;"

    $.ajax({
      url : queryURl,
      method : "GET"
    }).then(function(response){
      // console.log(response);

      var results = response.data
      for (var j in results) {
        var rating = results[j].rating;
        // console.log(rating);
        var p = $("<p>").text("Rating:" + rating);
        $("#results").append(p);
        
        var images = results[j].images;
        var imageUrl = images.original_still.url;
        // console.log(imageUrl);
        images = $("<img>");
        images.attr("src", imageUrl);
        images.attr("alt", "kourtney image");
        $("#kourtney").append(images);
      }
    })
  })

  //this is the query that will run images of Gabriel.
  var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=gabrielle+union&limit=10&offset=0&rating=PG-13&lang=en"

  $("#Gabrielle").on("click", function(){
    var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=gabrielle+union&limit=10&offset=0&rating=PG-13&lang=en"

    $.ajax({
      url : queryURl,
      method : "GET"
    }).then(function(response){
      // console.log(response);

      var results = response.data
      for (var j in results) {
        var rating = results[j].rating;
        // console.log(rating);
        var p = $("<p>").text("Rating:" + rating);
        $("#results").append(p);
        
        var images = results[j].images;
        var imageUrl = images.original_still.url;
        // console.log(imageUrl);
        images = $("<img>");
        images.attr("src", imageUrl);
        images.attr("alt", "gabby image");
        $("#gabby").append(images);
      }
    })
  })

  //this query will run photos of sza.
  var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=sza&limit=10&offset=0&rating=PG-13&lang=en"

  $("#SZA").on("click", function(){
    var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=sza&limit=10&offset=0&rating=PG-13&lang=en"

    $.ajax({
      url : queryURl,
      method : "GET"
    }).then(function(response){
      // console.log(response);

      var results = response.data
      for (var j in results) {
        var rating = results[j].rating;
        // console.log(rating);
        var p = $("<p>").text("Rating:" + rating);
        $("#results").append(p);
        
        var images = results[j].images;
        var imageUrl = images.original_still.url;
        // console.log(imageUrl);
        images = $("<img>");
        images.attr("src", imageUrl);
        images.attr("alt", "sza image");
        $("#sza").append(images);
      }
    })
  })

  //this will run a query for images on beyonce
  var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=beyonce&limit=10&offset=0&rating=PG-13&lang=en"

  $("#Beyonce").on("click", function(){
    var  queryURl = "https://api.giphy.com/v1/gifs/search?api_key=1sZSm54k0xVf4wbXKX70pe1APZzsOpDA&q=beyonce&limit=10&offset=0&rating=PG-13&lang=en"

    $.ajax({
      url : queryURl,
      method : "GET"
    }).then(function(response){
      console.log(response);

      var results = response.data
      for (var j in results) {
        var rating = results[j].rating;
        // console.log(rating);
        var tr = $("<tr>").text("Rating:" + rating);
        $("#ratings").append(tr);
        
        var images = results[j].images;
        var imageUrl = images.original_still.url;
        // console.log(imageUrl);
        images = $("<img>");
        images.attr("src", imageUrl);
        images.attr("alt", "beyonce image");
 
        $("#beyonce").append(images);
      }
    })
  })
  //**Unable to make this work */
  //this will allow the submit button to add buttons to the page.
  //this should allow people to enter a choice and that button will be added.
  $(document).on('click', 'submit', function() { 
    event.preventdefault();

      var randomGif = $("#search").val();
      topics.push(randomGif);
      debugger;
      var button = $("<button>").text(randomGif);
      $(".buttons").append(button);
    
	});

