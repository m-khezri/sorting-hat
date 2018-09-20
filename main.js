

const sortingHat = [
    {schoolName: 'Gryffindor', color: '#fab1a0'},
    {schoolName: 'Hufflepuff', color: '#ffeaa7'},
    {schoolName: 'Ravenclaw', color: '#00cec9'},
    {schoolName: 'Slytherin', color: '#74b9ff'},
];


const studentNameElem = document.getElementById('students_name');
const submitBottonElem = document.getElementById('submitButton');
const deleteButton = document.getElementsByClassName('deleteButton');


// --------------- Print Input Form to DOM --------------------------------------------

    const buildNewCard = () => {
    let domString =
    document.getElementById("studentCard").innerHTML = 
    `<div">
    <h6>Enter First Year's Name:</h3>
    <div>
      <label for="students_name"</label>
      <input type="text"id="students_name" value="students">
    </div>
       <button type="submit" id="submitButton" class="btn btn-primary mb-2">Sort</button>
  </div>`;
}

submitBottonElem.addEventListener("click", buildNewCard);

// ---------------------------------------------------------------------------------------