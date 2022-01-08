//if user add a note , add it to the localStorage
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {   // e is object of event

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = []; // blank array

    }
    else {
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

//    console.log(notesObj);

    showNotes();

});

//function to show notes from localstorage

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = []; // blank array

    }
    else {
        notesObj = JSON.parse(notes);

    }
    let html = "";  // blank string
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card noteCard my-2 mx-2" style="width: 18rem;">

                <div class="card-body">
                 
                <h5 class="card-title" style="">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="delNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;

    });

    let notesEle = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = 'Nothing to show! "Add a Note" section above to add notes';
    }
}


//function to delete note

function delNote(index) {  //index means array index
    console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);

    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

// searching elements 
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {


    let inputVal = search.value.toLowerCase();
  //  console.log("input event fired", inputVal);
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";

        }else{
            element.style.display="none";
   
        }
    })



})

/*
 further features:
 1. Add Title
 2. Mark a note as Important
 3. Separate notes by user
 */
