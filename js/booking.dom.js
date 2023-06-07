// DOM element(s) references
const departmentElem = document.getElementById("departments"); 
const dateElem = document.getElementById("appointmentDate");
const nextBtnElem = document.querySelector(".nextBtn");
const nameSurnameElem = document.querySelector("#nameSurname");
const genderElem = document.getElementById("gender");
const ageElem = document.querySelector("#age");
const contactNumberElem = document.querySelector("#contactNumber");
const emailAddressElem = document.querySelector("#email");
let idNumberElem = document.querySelector("#idNumber");
const backBtnElem = document.querySelector(".backBtn");
const bookNowBtnElem = document.querySelector(".bookNowBtn");
const landingInfoElem = document.getElementsByClassName("landingInfo");
const personalInfoElem = document.getElementsByClassName("personalInfo");
const successInfoElem = document.getElementsByClassName("successInfo");


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

// Add event listener to button
nextBtnElem.addEventListener("click",nextBtn_onClick);
backBtnElem.addEventListener("click", backBtn_onClick);
bookNowBtnElem.addEventListener("click",bookNowBtn_onClick);
// Keyup event for the ID Number field
idNumberElem.addEventListener("keyup",idNumber_keyUp)

// Instantiate the factory function
const bookingApp = Booking();

// DOM events
function idNumber_keyUp() {
    if(idNumberElem.value.length === 13){
        var event = new Event("change");
        var result = getAgeAndGender(idNumberElem.value);
        
        ageElem.value = result.age;
        
        genderElem.selectedIndex = result.gender;
        genderElem.dispatchEvent(event);
    }
}
function getAgeAndGender(idNumber) {
    var birthdate = idNumber.substr(0, 6);
  
    // Extract gender and citizenship information from ID number
    var genderCode = idNumber.substr(6, 4);
    
    // Extract birth year, month, and day from birthdate
    var year = parseInt(birthdate.substr(0, 2), 10);
    var month = parseInt(birthdate.substr(2, 2), 10);
    var day = parseInt(birthdate.substr(4, 2), 10);
  
    // Calculate current year, month, and day
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear()% 100; // Get the last two digits of the current year
    var currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    var currentDay = currentDate.getDate();
  
    //build full birth year
    if(year >= currentYear){
        year = "19"+year;
    }
    else{
        year = "20"+year;
    }
    
    //get full currentYear for age calculation
    currentYear = currentDate.getFullYear();
    
    // Calculate age
    var age = currentYear - year;
  
    // Adjust age based on current month and day
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }
  
    // Determine gender based on the gender code
    var gender = genderCode >= 5000 ? 0 : 1;
    return { age: age, gender: gender };
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
}
