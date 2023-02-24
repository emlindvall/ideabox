// Query Selectors 
///Containers
var outputContainer = document.querySelector('#output-container');
var cardContainer = document.querySelector(".card-container");
var containerTopNav = document.querySelector(".container-top-nav");

///Buttons
var saveButton = document.querySelector(".save-button");
var deleteButton = document.querySelector(".delete-icon");
var starButton = document.querySelector(".star-icon");
// saveButton.disabled = true;

///Elements
var titleInput= document.getElementById("title-input");
var bodyInput = document.getElementById("body-input");
var titleOutput = document.querySelector(".title-output");
var bodyOutput = document.querySelector(".body-output");


// Global Variables 
var ideaInst = ""
var savedIdeas = [];
var starredIdeas = [];


// Event Listeners 
// saveButton.addEventListener("mouseover", disableButton);
saveButton.addEventListener("click", saveIdea);
outputContainer.addEventListener("click", function(){deleteIdea(event)});
outputContainer.addEventListener("click", function(){starIdea(event)});


// Functions 
function show(element) {
    element.style.visibility = "visible";
}
