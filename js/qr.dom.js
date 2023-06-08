//Get reference to the output elements
const patientNames = document.querySelector('#name-surname-output');
const patientGender = document.querySelector('#gender-output');
const patientAge = document.querySelector('#age-output');
const patientContact = document.querySelector('#contact-output'); console.log(patientAge.innerHTML);
const patientEmail = document.querySelector('#email-output');
const patientID = document.querySelector('#id-number-output');

//Get reference to the patient details division
const personalDetails = document.querySelector('#patient-details');

//QR scanner

function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    //populate the patient details division with the values contained in 'decodedText' 
    patientNames.innerHTML = decodedText.name;
    patientGender.innerHTML = decodedText.gender;
    patientAge.innerHTML = decodedText.age;
    patientContact.innerHTML = decodedText.contact;
    patientEmail.innerHTML = decodedText.email;
    patientID.innerHTML = decodedText.id;
    html5QrcodeScanner.clear();
    personalDetails.style.visibility = 'visible';
}
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);