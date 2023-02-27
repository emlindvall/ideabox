// Query Selectors

var titleInput = document.querySelector('#titleInput');
var bodyInput = document.querySelector('#bodyInput');
var saveButton = document.querySelector('.save-button');
var outputContainer = document.querySelector('.output-container');
var deleteIcon = document.querySelector('#deleteIcon');
var toggleStarredIdeasButton = document.querySelector('.show-starred-button');
var searchInput = document.querySelector('#searchInput');

// Data Model Variables

var ideas = [];

// Event Listeners 

saveButton.addEventListener('click', function(event){
    event.preventDefault();
  if (titleInput.value !== "" && bodyInput.value !== "") {
      saveIdea();
      updateCardOutput();
      clearInputs();
  } else {
    inputWarning()
    setTimeout(clearInputs, 2000)
  }
}
);

outputContainer.addEventListener('click', function(){
    if (event.target.className.includes("delete")) {
        deleteIdea();
        updateCardOutput();
    } else if (event.target.className.includes("star")) {
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

searchInput.addEventListener('keyup', function(){
    outputContainer.innerHTML = "";
    filterIdeas();
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
};

function toggleStar() {
    for (i = 0; i < ideas.length; i++) {
        if (ideas[i].id == event.target.parentNode.id) {
            ideas[i].updateIdea()
        }
    }
};

function updateCardOutput(){
  outputContainer.innerHTML = ""
  for (i = 0; i < ideas.length; i++) {
      var starred = ideas[i].star ? "assets/star-active.svg" : "assets/star.svg";
      outputContainer.innerHTML +=
      `<article class="card-container">
          <div class="container-top-nav" id="${ideas[i].id}">
              <img class="star-icon icons" src="${starred}" alt="favorite idea"></img> 
              <img class="delete-icon icons" src="assets/delete.svg" alt="delete idea"></img> 
          </div>
          <div class="idea-container">
              <p class="title-output">${ideas[i].title}</p>
              <p class="body-output">${ideas[i].body}</p>
          </div>
          <div class="container-bottom-nav">
              <img class="plus-icon icons" src="assets/comment.svg" alt="add comment"></img> 
              <p class="comment">Comment</p>
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
                        <img class="star-icon icons" src="${starred}" alt="favorite idea"></img> 
                        <img class="delete-icon icons" src="assets/delete.svg" alt="delete idea"></img> 
                    </div>
                    <div class="idea-container">
                        <p class="title-output">${ideas[i].title}</p>
                        <p class="body-output">${ideas[i].body}</p>
                    </div>
                    <div class="container-bottom-nav">
                        <img class="plus-icon icons" src="assets/comment.svg" alt="add comment"></img> 
                        <p class="comment">Comment</p>
                    </div>
                </article>`
            }
        }
};

function inputWarning(){
    titleInput.value = "Please enter a title for your idea!"
    bodyInput.value = "Please enter your idea text!"
};

function filterIdeas() {
    for (i = 0; i < ideas.length; i++) {
        if (ideas[i].title.includes(searchInput.value) || ideas[i].body.includes(searchInput.value)) {
            var starred = ideas[i].star ? "assets/star-active.svg" : "assets/star.svg";
            outputContainer.innerHTML +=
            `<article class="card-container">
                <div class="container-top-nav" id="${ideas[i].id}">
                    <img class="star-icon icons" src="${starred}" alt="favorite idea"></img>
                    <img class="delete-icon icons" src="assets/delete.svg" alt="delete idea"></img>
                </div>
                <div class="idea-container">
                    <p class="title-output">${ideas[i].title}</p>
                    <p class="body-output">${ideas[i].body}</p>
                </div>
                <div class="container-bottom-nav">
                    <img class="plus-icon icons" src="assets/comment.svg" alt="add comment"></img>
                    <p class="comment">Comment</p>
                </div>
            </article>`
        }
    }
 };