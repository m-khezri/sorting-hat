const toDoInputElem = document.getElementById('ToDoInput');
const notesInputElem = document.getElementById('notesInput');
const submitToDoBottomElem = document.getElementById('submitToDoButtom');
const deleteButton = document.getElementsByClassName('deleteButtom');



const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
    
    }
    
    
    const buildNewToDoCard = (toDo, notes) => {
    let domString =  
    
    `<div class="form-inline border">
    <h1>Enter First Year's Name</h1>
    <div class="form-group mb-2">
      <label for="students_name" class="sr-only">Students:</label>
      <input type="text" readonly class="form-control-plaintext" id="students_name" value="students">
    </div>
    <div class="form-group mx-sm-3 mb-2">
      <label for="inputText" class="sr-only">Insert students name</label>
      <input type="text" class="input_text" id="input_text">
    </div>
    <button type="submit" class="btn btn-primary mb-2">Sort</button>
  </div>`;
    
        printToDom(domString, 'toDoCards'); 
        activateDeletes();
    }
    
    submitToDoBottomElem.addEventListener("click", (e) =>  { 
    e.preventDefault();
     
    buildNewToDoCard(toDoInputElem.value,notesInputElem.value);
    
    });












{/* <div class="form-inline border">
<div class="form-group mb-2">
  <label for="students_name" class="sr-only">Students:</label>
  <input type="text" readonly class="form-control-plaintext" id="students_name" value="students">
</div>
<div class="form-group mx-sm-3 mb-2">
  <label for="inputText" class="sr-only">Insert students name</label>
  <input type="text" class="input_text" id="input_text">
</div>
<button type="submit" class="btn btn-primary mb-2">Sort</button>
</div> */}