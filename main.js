// Query Selectors

var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var saveButton = document.querySelector('.save-button');
var outputContainer = document.querySelector('#outputContainer');
var deleteIcon = document.querySelector('#delete-icon');
var toggleStarredIdeasButton = document.querySelector('.show-starred-button');
var searchInput = document.querySelector('#search-input');

// Data Model Variables

var ideas = [];

// Event Listeners 

saveButton.addEventListener('click', function(event){
    console.log('Hey')
    event.preventDefault();
  if (titleInput.value !== "" && bodyInput.value !== "") {
      saveIdea();
      updateCardOutput();
      clearInputs();
  }
}
);

outputContainer.addEventListener('click', function(){
    if (event.target.id === "delete-icon") {
        deleteIdea();
        updateCardOutput();
    } else if (event.target.id === "star-icon") {
        toggleStar();
        updateCardOutput();
    }
}
);

toggleStarredIdeasButton.addEventListener('click', function(){
    if (toggleStarredIdeasButton.innerText === "Show Starred Ideas") {
        showStarred();
    } else if (toggleStarredIdeasButton.innerText === "Show All Ideas") {
        toggleStarredIdeasButton.innerText = "Show Starred Ideas";
        updateCardOutput();
    }
});

// Functions

function saveIdea() {
  var idea = new Idea(titleInput.value, bodyInput.value);
  ideas.push(idea);
};

function clearInputs() {
  titleInput.value = "";
  bodyInput.value = "";
};

function deleteIdea() {
    for (i = 0; i < ideas.length; i++) {
        if (ideas[i].id == event.target.parentNode.id) {
            ideas.splice(i, 1);
        }
    }
}

function toggleStar() {
    console.log(ideas)
    for (i = 0; i < ideas.length; i++) {
        if (ideas[i].id == event.target.parentNode.id) {
            ideas[i].star = !ideas[i].star;
        }
    }
}

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


function showStarred() {
    toggleStarredIdeasButton.innerText = "Show All Ideas";
        outputContainer.innerHTML = "";
        for (i = 0; i < ideas.length; i++) {
            if (ideas[i].star === true) {
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
        }
};