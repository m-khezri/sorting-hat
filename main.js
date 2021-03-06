const schoolName = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const submitBottonElem = document.getElementById('submitButton');


// --------------- Print Input Form to DOM --------------------------------------------

    const buildForm = () => {
    
    document.getElementById("studentForm").innerHTML = 
  `<form>
  <div class="row">
    <div class="col">
      <input id="students_name" type="text" class="form-control" placeholder="Student name">
    </div>
    <div class="col">
    <button id="sortButton" type="submit" class="btn btn-primary btn-md">Sort</button>
    </div>
  </div>
</form>`;
sort_btn_toucher();
}

submitBottonElem.addEventListener("click", buildForm);

// -----------------------------------------------------------------------------------


const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
    }

    const buildNewCard = (name) => {
      const random_school = schoolName[Math.floor(Math.random()*schoolName.length)];

        let domString = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h5 class="card-title">${random_school}</h5>
          <button class="btn btn-danger rmv_btn">Remove</button>
        </div>
        </div>`;
        printToDom(domString, 'studentCard');
        activateDeletes();

    }

    const sort_btn_toucher = () => {

    const sortBottonElem = document.getElementById('sortButton');

    sortBottonElem.addEventListener("click", (e) => {
        e.preventDefault();
        const std_name = document.getElementById('students_name').value;
        buildNewCard(std_name);
    });
  }


  // ----------- Remove cards 

  const activateDeletes = () => {
    const deleteButton = document.getElementsByClassName('rmv_btn');
 
    for ( let i=0; i< deleteButton.length; i++){
      const element = deleteButton[i];
        element.addEventListener("click", (e) => {
            const buttonClicked = e.target;
            const cardToDelete = buttonClicked.parentNode.parentNode;
            cardToDelete.remove();
        })
      }
}

