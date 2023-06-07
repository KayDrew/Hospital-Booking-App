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
const landingInfoElem = document.getElementsByClassName("landingInfo");
const personalInfoElem = document.getElementsByClassName("personalInfo");
const successInfoElem = document.getElementsByClassName("successInfo");
const qrCode=document.querySelector("#qrcode");
const book= document.querySelector("#bookNow");


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
    console.log(landingInfoElem);
    console.log(personalInfoElem);
    console.log(successInfoElem);
// *End of testing


// Keyup event for the ID Number field
idNumberElem.addEventListener("keyup",idNumber_keyUp)

// Instantiate the factory function
const bookingApp = Booking();

// DOM events
function idNumber_keyUp() {

}

function nextBtn_onClick() {
    // Hide first section
    landingInfoElem[0].style.visibility = 'hidden';
    landingInfoElem[0].style.display = 'none';
    
    // Show second section
    personalInfoElem[0].style.visibility = 'visible';
    personalInfoElem[0].style.display = 'flex';
    
    // Hide third section
    successInfoElem[0].style.visibility = 'hidden';
    successInfoElem[0].style.display = 'none';
}

function backBtn_onClick() {
    // Show first section
    landingInfoElem[0].style.visibility = 'visible';
    landingInfoElem[0].style.display = 'flex';
    
    // Hide second section
    personalInfoElem[0].style.visibility = 'hidden';
    personalInfoElem[0].style.display = 'none';
    
    // Hide third section
    successInfoElem[0].style.visibility = 'hidden';
    successInfoElem[0].style.display = 'none';
}

function bookNowBtn_onClick() {
    // Hide first section
    landingInfoElem[0].style.visibility = 'hidden';
    landingInfoElem[0].style.display = 'none';

    // Hide second section
    personalInfoElem[0].style.visibility = 'hidden';
    personalInfoElem[0].style.display = 'none';

    // Show third section
    successInfoElem[0].style.visibility = 'visible';
    successInfoElem[0].style.display = 'flex';
    
    //generate a new qr code
    qrCode.innerHTML= bookingApp.getQRCode();
}

// Add event listener to button
nextBtnElem.addEventListener("click",nextBtn_onClick);
backBtnElem.addEventListener("click", backBtn_onClick);
bookNowBtnElem.addEventListener("click",bookNowBtn_onClick);