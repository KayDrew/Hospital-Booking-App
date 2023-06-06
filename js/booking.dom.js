// DOM element(s) references
const departmentElem = document.getElementById("departments"); 
const dateElem = document.getElementById("appointmentDate");
const nextBtnElem = document.querySelector(".nextBtn");
const nameSurnameElem = document.querySelector("#nameSurname");
const genderElem = document.getElementById("gender");
const ageElem = document.querySelector("#age");
const contactNumberElem = document.querySelector("#contactNumber");
const emailAddressElem = document.querySelector("#email");
const idNumberElem = document.querySelector("#idNumber");
const backBtnElem = document.querySelector(".backBtn");
const bookNowBtnElem = document.querySelector(".bookNowBtn");

// *Testing the DOM References
    console.log(departmentElem);
    console.log(dateElem);
    console.log(nextBtnElem);
    console.log(nameSurnameElem);
    console.log(genderElem);
    console.log(ageElem);
    console.log(contactNumberElem);
    console.log(emailAddressElem);
    console.log(idNumberElem);
    console.log(backBtnElem);
    console.log(bookNowBtnElem);
// *End of testing

// Add event listener to button
nextBtnElem.addEventListener("click",nextBtn_onClick);
backBtnElem.addEventListener("click", backBtn_onClick);
bookNowBtnElem.addEventListener("click",bookNowBtn_onClick);

// Instantiate the factory function
const bookingApp = Booking();

// DOM events
function nextBtn_onClick() {

}

function backBtn_onClick() {

}

function bookNowBtn_onClick() {

}
