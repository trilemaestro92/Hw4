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

// const verifyInput = $('.verify-input')

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


const listVerify = (event) => {
  event.preventDefault();
  // create a const that stores the id of the event.target (what you clicked on)
  const verifyClicked = event.target.id;
  // compare the id of what what clicked on, with the id you need or 
  //want to tie a function to
  if( verifyClicked ==="verify"){
      // This is where you can execute the operations/functions you need
      // or want to happen from clicking on your new button
      // console.log("You just clicked on a dynamically made button.")
      event.preventDefault();
      $(".results-display").empty();
      for (let i=0; i < employeeList.length;i++ ){
            
        if ($('.verify-input').val() === employeeList[i].name){
          
          message ='True'; 
          break;     
          }else{  
          message ='False';      
          }
        }
        $(".results-display").append(`<p class='message'>${message}</p>`);
        console.log(message) 

      
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

  
  // append a new button to your .container
  $(".results-verify").append(`<input type="text" class="verify-input" placeholder="    Employee Name" /><button id="verify">Verify</button>`);
  
}
$(".verify-nav").on("click", renderVerify)
$(".results-verify").on("click", listVerify)