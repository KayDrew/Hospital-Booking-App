let uniqueID=localStorage.getItem("patientIfo");



function Booking(){
    var patientInfo = [];
    var patientId=[];
    var errorMessage="success";    
   
   
    function setPatientInfo(patientID, name, age,gender, email, contact){
    	
    if(patientID && name && age && gender && email && contact){
    	
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

else{  errorMessage="Please complete  all fields";
}       
    

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