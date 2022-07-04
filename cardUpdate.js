const updateArray = [
  {
    id: 1,
    title: "Test Title",
    subTitle: "Test SubTitle",
	synopsis: "Synopsis"
  }
];

// defining our variable to retrieve the html strings
// we asign an empty template string to htmlCode. We'll add something inside afterwards.
let htmlCode = ``;

// to get each single elephant object from the array and use them to build out html string, we need to open up our array, and we do that using forEach method. The forEach method, finds each item(object) in the array and returns them, this means we get 4 items that are objects back.

updateArray.forEach(function(overviewerUpdateObject) {
  // uncomment the line below, to see each of the 4 objects rendered in the console.
  //console.log(singleElephantObjects);

  // we take our previous empty htmlCode variable and add our html codes to it.

  // because the forEach method returns objects, we can then use the dot notation to reference children of the object, e.g, elephant.title;
  htmlCode =
    htmlCode +
    `
    <div class="card textlight bg-dark text-light">
		<div class="card-body">
			<h4 class="card-title">${overviewerUpdateObject.title}</h4>
			<h6 class="text-muted card-subtitle mb-2">${overviewerUpdateObject.subTitle}</h6>
			<hr class="mt-2 mb-1" /><small>${overviewerUpdateObject.synopsis}</small>
		</div>
	</div>
  `;
  // uncomment the line below to see the output in the browser console.
  // console.log(htmlCode);
});

// currently, we have out html code showing in the browser console, we need to send it to our html file and render it there.
// here we define out the cards we want to be rendered to the DOM.

// ".all-elephant-cards" is the class of the empty div back in our index.html. We want to render the cards from our JS inside that div.

// we are simply saying, "let elephantCards be = to that div", to target that div, we reference the class we gave to it.
const elephantCards = document.getElementById("updateInfo");

// here's how we do the render;
// since elephantCards is now = to that div, we now say let the inside of that div take in our htmlCode variable that holds our html codes.
elephantCards.innerHTML = htmlCode;
