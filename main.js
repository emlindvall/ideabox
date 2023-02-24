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

function hide(element) {
  element.style.visibility = "hidden";
}
function showSavedIdeas()  {
    outputContainer.innerHTML = ``;
    for (var i = 0; i < savedIdeas.length; i++)    {
        outputContainer.innerHTML += `
        <article class="card-container">
            <div class="container-top-nav">
                 <img id="star-icon" src="assets/star.svg" alt="favorite idea"></img> 
                 <img id="delete-icon" src="assets/delete.svg" alt="delete idea"></img> 
            </div>
            <div class="idea-container">
                <p class="title-output">${savedIdeas[i].title}</p>
                <p class="body-output">${savedIdeas[i].body}</p>
            </div>
            <div class="container-bottom-nav">
                <img id="plus-icon" src="assets/comment.svg" alt="add comment"></img> 
                <p id="comment">Comment</p>
            </div>
        </article>
        `
        show(outputContainer);
    }
}
