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

      if ($('.verify-input').val() === employeeList[i].name) {

        message = 'Employee Found';
        break;
      } else {
        message = 'Employee Not Found';
      }
    }
    $(".results-display").append(message);



  }// this else statement is NOT needed and is only placed here to show
  // what is happening when we click on .container
  else {
    console.log("You are clicking everywhere else but the button.")
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

      if ($('.lookup-input').val() === employeeList[i].name) {

        $('.results-display').
          append(
            `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`)
      }
      else {
        console.log("You are clicking everywhere else but the button.")
      }
    }
  }
}

const renderLookup = (event) => {

  event.preventDefault()
  $(".results").empty();
  $(".results-verify").empty();
  $(".results-display").empty();



  $(".results-verify").append(`<input type="text" class="lookup-input inputb" placeholder="    Employee Name" /><button id="lookup">Lookup</button>`);

}

$(".lookup-nav").on("click", renderLookup)
$(".results-verify").on("click", listLookup)

//Contain


const listContain = (event) => {
  event.preventDefault();
  
  const verifyClicked = event.target.id;
  
  if (verifyClicked === "contains") {
   
    event.preventDefault();
    $(".results-display").empty();
    for (let i = 0; i < employeeList.length; i++) {
      while (activeList.length > 0) {
        activeList.pop();
    }
      // (employeeList[i].name.includes($('.lookup-input').val()))
      if (employeeList[i].name.includes($('.contain-input').val())) {
        activeList.push(employeeList[i]);
        $('.results-display').
        append(
          `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`)
      }
      else {
        console.log("You are clicking everywhere else but the button.")
      }
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



// //Update


// const listUpdate = (event) => {
//   event.preventDefault();
  
//   const verifyClicked = event.target.id;
  
//   if (verifyClicked === "contains") {
   
//     event.preventDefault();
//     $(".results-display").empty();
//     for (let i = 0; i < employeeList.length; i++) {
//       while (activeList.length > 0) {
//         activeList.pop();
//     }
//       // (employeeList[i].name.includes($('.lookup-input').val()))
//       if (employeeList[i].name.includes($('.contain-input').val())) {
//         activeList.push(employeeList[i]);
//         $('.results-display').
//         append(
//           `<div class='box'>${employeeList[i].name}<br> #${employeeList[i].officeNum}<br> ${employeeList[i].phoneNum} </div>`)
//       }
//       else {
//         console.log("You are clicking everywhere else but the button.")
//       }
//     }
//   }
// }

// const renderUpdate = (event) => {

//   event.preventDefault()
//   $(".results").empty();
//   $(".results-verify").empty();
//   $(".results-display").empty();



//   $(".results-verify").append(`<input type="text" class="contain-input inputb" placeholder="    Employee Name" /><button id="contains">Contains</button>`);

// }

// $(".contains-nav").on("click", renderUpdate)
// $(".results-verify").on("click", listUpdate)