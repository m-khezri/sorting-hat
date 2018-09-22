const schoolName = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const submitBottonElem = document.getElementById('submitButton');
const studentNameElem = document.getElementById('students_name');
const sortBottonElem = document.getElementById('sortButton');

const hideForm = () => {
    document.getElementById("input_form").style.display = 'none';
}
hideForm();

const showForm = () => {
    input_form.style.display = 'block';
}

submitBottonElem.addEventListener("click", showForm);


// --------------- Print Input Form to DOM --------------------------------------------

    const buildCard = () => {
    
    document.getElementById("studentForm").innerHTML = 
    `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">hello</h5>
            <p class="card-text">bye</p>
            <button href="#" class="btn btn-danger deleteButton">Remove</button>
            </div>
         </div>`;
}

sortBottonElem.addEventListener("click", buildForm);


// -----------------------------------------------------------------------------------














// const printToDom = (stringToPrint, whereToPrint) => {
//     document.getElementById(whereToPrint).innerHTML += stringToPrint;
//     }


//     const buildNewCard = (hello, bye) => {
//         let domString = `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">hello</h5>
//         //   <p class="card-text">bye</p>
//           <button href="#" class="btn btn-danger deleteButton">Remove</button>
//         </div>
//         </div>`;

//         printToDom(domString, 'studentCard');
//     }



//     sortBottonElem.addEventListener("click", (e) => {
//         e.preventDefault();

//         buildNewCard(students_name.value);
//     });