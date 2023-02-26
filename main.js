var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var saveButton = document.querySelector('.save-button');
var outputContainer = document.querySelector('#output-container');
var deleteIcon = document.querySelector('#delete-icon');
var toggleStarredIdeasButton = document.querySelector('.show-starred-button');
var searchInput = document.querySelector('#search-input');


var ideas = [];


saveButton.addEventListener('click', function(event){
  event.preventDefault();
  if (titleInput.value !== "" && bodyInput.value !== "") {
      saveIdea();
      updateCardOutput();
      clearInputs();
  }
}
);


function saveIdea() {
  var idea = new Idea(titleInput.value, bodyInput.value);
  ideas.push(idea);
};

function clearInputs() {
  titleInput.value = "";
  bodyInput.value = "";
};

function updateCardOutput(){
  outputContainer.innerHTML = ""
  for (i = 0; i < ideas.length; i++) {
      var starred = ideas[i].star ? "assets/star-active.svg" : "assets/star.svg";
      outputContainer.innerHTML +=
      `<article class="card-container">
          <div class="container-top-nav" id="${ideas[i].id}">
              <img id="star-icon" src="${starred}" alt="favorite idea"></img> 
              <img id="delete-icon" src="assets/delete.svg" alt="delete idea"></img> 
          </div>
          <div class="idea-container">
              <p class="title-output">${ideas[i].title}</p>
              <p class="body-output">${ideas[i].body}</p>
          </div>
          <div class="container-bottom-nav">
              <img id="plus-icon" src="assets/comment.svg" alt="add comment"></img> 
              <p id="comment">Comment</p>
          </div>
      </article>`
      }
};
