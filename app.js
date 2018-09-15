const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '(222)-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '(489)-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '(789)-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '(222)-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '(566)-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '(789)-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '(789)-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '(222)-789-5231'
  }
];

const activeList = [];

//Print

const render = function () {
  $('.results').empty();
  $('.results-verify').empty();
  $(".results-display").empty();

  for (let i = 0; i < employeeList.length; i++) {
    if (activeList.length > 0) {
      for (let i = 0; i < activeList.length; i++)
        $('.results').append(`<div class='box'>${activeList[i]}</div>`)
      break;
    } else
      $('.results').
        append(
          `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`)
  }
}

$('.print-nav').on('click', render);


//Verify

const listVerify = (event) => {
  event.preventDefault();
  // create a const that stores the id of the event.target (what you clicked on)
  const verifyClicked = event.target.id;
  // compare the id of what what clicked on, with the id you need or 
  //want to tie a function to
  if (verifyClicked === "verify") {
    // This is where you can execute the operations/functions you need
    // or want to happen from clicking on your new button
    // console.log("You just clicked on a dynamically made button.")
    event.preventDefault();
    $(".results-display").empty();
    for (let i = 0; i < employeeList.length; i++) {

      if ($('.verify-input').val().toLowerCase() === employeeList[i].name.toLowerCase()) {

        message = 'Employee Found';
        break;
      } else {
        message = 'Employee Not Found';
      }
    }
    $(".results-display").append(message);



  }
};

const renderVerify = (event) => {
  // prevent the button from refreshing the page 
  event.preventDefault()
  $(".results").empty();
  $(".results-verify").empty();
  $(".results-display").empty();

  // append a new button to your .results-verify
  $(".results-verify").append(`<input type="text" class="verify-input inputb" placeholder="    Employee Name" /><button id="verify">Verify</button>`);

}
$(".verify-nav").on("click", renderVerify)
$(".results-verify").on("click", listVerify)



//Lookup


const listLookup = (event) => {
  event.preventDefault();

  const verifyClicked = event.target.id;

  if (verifyClicked === "lookup") {

    event.preventDefault();
    $(".results-display").empty();
    for (let i = 0; i < employeeList.length; i++) {
      if ($('.lookup-input').val().toLowerCase() === employeeList[i].name.toLowerCase()) {
        $(".results-display").empty();
        $('.results-display').
          append(
            `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`)
        break;
      }
      else if ($('.lookup-input').val() !== employeeList[i].name) {
        $(".results-display").empty();
        $('.results-display').append(`<div>Employee not found</div>`)

      }
    }
  }
}

const renderLookup = (event) => {

  event.preventDefault()
  $(".results").empty();
  $(".results-verify").empty();
  $(".results-display").empty();

  $(".results-verify").append(`<input type="text" class="lookup-input inputb" placeholder=" Employee Name" /><button id="lookup">Lookup</button>`);

}

$(".lookup-nav").on("click", renderLookup)
$(".results-verify").on("click", listLookup)

//Contain


const listContain = (event) => {
  event.preventDefault();
  const verifyClicked = event.target.id;
  if (verifyClicked === "contains") {
    let found = false;
    $(".results-display").empty();
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name.includes($('.contain-input').val())) {
        $('.results-display').
          append(
            `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`)
        found = true;
      }
    }
    if (!found || $('.contain-input').val() == "") {
      $(".results-display").empty();
      $('.results-display').append(`<div>Employee not found</div>`)
    }
  }
}


const renderContain = (event) => {

  event.preventDefault()
  $(".results").empty();
  $(".results-verify").empty();
  $(".results-display").empty();



  $(".results-verify").append(`<input type="text" class="contain-input inputb" placeholder="    Employee Name" /><button id="contains">Contains</button>`);

}

$(".contains-nav").on("click", renderContain)
$(".results-verify").on("click", listContain)



//Update


const listUpdate = (event) => {
  event.preventDefault();


  const verifyClicked = event.target.id;

  if (verifyClicked === "update") {

    // $(".results-display").empty();
    for (let i = 0; i < employeeList.length; i++) {
      $(".results-display").empty();
      if ($('.updateName-input').val().toLowerCase() === employeeList[i].name.toLowerCase()) {

        employeeList[i].officeNum = $('.updateOffice-input').val();
        employeeList[i].phoneNum = $('.updatePhone-input').val();
        $('.results-display').
          append(
            `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`)
        break;
      }
      else {
        message = 'Employee Not Found';
        $(".results-display").append(message)

      }

    }
  }
}

const renderUpdate = (event) => {

  event.preventDefault()
  $(".results").empty();
  $(".results-verify").empty();
  $(".results-display").empty();



  $(".results-verify").
    append(`
  <input type="text" class="updateName-input inputb" placeholder="    Employee Name" />
  <input type="text" class="updateOffice-input inputb" placeholder="    Office Number" />
  <input type="text" class="updatePhone-input inputb" placeholder="    Phone Number" />
  <button id="update">Update</button>`);

}

$(".update-nav").on("click", renderUpdate)
$(".results-verify").on("click", listUpdate)


//Add


const listAdd = (event) => {
  event.preventDefault();

  const verifyClicked = event.target.id;

  if (verifyClicked === "add") {
    $(".results-display").empty();

    let newEmployee = {};
    newEmployee.name = $('.addName-input').val();
    newEmployee.officeNum = $('.addOffice-input').val();
    newEmployee.phoneNum = $('.addPhone-input').val()

    employeeList.push(newEmployee);

    for (let i = 0; i < employeeList.length; i++) {
      $('.results-display').
        append(
          `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`);
    }

  }
}

const renderAdd = (event) => {

  event.preventDefault()
  $(".results").empty();
  $(".results-verify").empty();
  $(".results-display").empty();



  $(".results-verify").
    append(`
  <input type="text" class="addName-input inputb" placeholder="    Employee Name" />
  <input type="text" class="addOffice-input inputb" placeholder="    Office Number" />
  <input type="text" class="addPhone-input inputb" placeholder="    Phone Number" />
  <button id="add">Add</button>`);
}

$(".add-nav").on("click", renderAdd)
$(".results-verify").on("click", listAdd)

//Delete

const listDelete = (event) => {
  event.preventDefault();
const verifyClicked = event.target.id;

  if (verifyClicked === "delete") {
    $(".results-display").empty();

    for (let i = 0; i < employeeList.length; i++) {
      if ($('.delete-input').val().toLowerCase() === employeeList[i].name.toLowerCase()) {
        $(".results-display").empty();
        employeeList.splice(i, 1);
        for (let i = 0; i < employeeList.length; i++) {
          $('.results-display').
            append(
              `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`);
        }
        break;
      } else if ($('.delete-input').val() !== employeeList[i].name) {
        $(".results-display").empty();
        message = 'Employee Not Found';
        $(".results-display").append(message)
      }
    }

  }
}



const renderDelete = (event) => {

  event.preventDefault()
  $(".results").empty();
  $(".results-verify").empty();
  $(".results-display").empty();



  $(".results-verify").
    append(`
  <input type="text" class="delete-input inputb" placeholder="    Employee Name" />
  <button id="delete">Delete</button>`);

}

$(".delete-nav").on("click", renderDelete)
$(".results-verify").on("click", listDelete)