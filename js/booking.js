let uniqueID=localStorage.getItem("patientIfo");



function Booking(){
    var patientInfo = [];
    var patientId=[];
let regexName= /^([a-zA-Z ]{7,})$/;

    var errorMessage="success";    
   
   
    function setPatientInfo(patientID, name, age,gender, email, contact){
    	
    if(patientID && name && age && gender && email && contact){
    	
    if(regexName.test(name)){
    
    if(patientID.length==13){
    	
    if(contact.length===10){
    	
    if(email.length>12){
    
    errorMessage ="success";

        if(patientInfo.length === 0){
            var patientFormat = {
                id: patientID,
                patientName: name,
                patientAge: age,
                patientGender: gender,
                patientEmail: email,
                patientContact: contact
               
            }

            patientInfo.push(patientFormat);
         patientId.push(patientID);
            localStorage.setItem("patientInfo",JSON.stringify(patientInfo));
            
      
           
            
        } else { //the array is NOT empty
            //loop through patient Id array 
            for(let i = 0; i < patientId.length; i++){
                if(patientId.includes(patientID) == false){
                    var patientFormat = {
                        id: patientID,
                        patientName: name,
                        patientAge: age,
                        patientGender: gender,
                        patientEmail: email,
                        patientContact: contact
                    }
        
                    patientInfo.push(patientFormat);
                    patientId.push(patientID);
                    
                    localStorage.setItem("patientInfo",JSON.stringify(patientInfo));
                    
          
                }
            }
        }

}

else {errorMessage="Please enter valid email address";
}

   }     

else{
errorMessage="Please enter valid contact number";

}        
   }
else{

errorMessage="enter valid ID or passport  number";

}
 
 }
 
 
 else {

errorMessage="Please enter a valid name & surname";

}
       
}

else{  errorMessage="Please complete  all fields";
}       
   console.log(errorMessage);	

}
    

        //getters
        function getPatientInfo(){
            return patientInfo;
        }

        function getPatientIDs(){
            return patientId;
        }
        
        
        function  getErrorMessage(){

return errorMessage;
}
        
        
    return{
     
        setPatientInfo,
        getPatientInfo,
        getPatientIDs,
        getErrorMessage         
    }

}