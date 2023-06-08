let uniqueID=localStorage.getItem("patientIfo");
let count= localStorage.getItem("count");


function Booking(){
    var patientInfo = [];
    let increment=-1;
   
   
    function setPatientInfo(patientID, name, age,gender, email, contact){
        if(patientInfo.length === 0){
            var patientFormat = {
                id: patientID,
                patientName: name,
                patientAge: age,
                patientEmail: email,
                patientContact: contact
            }

            patientInfo.push(patientFormat);
            localStorage.setItem("patientInfo",JSON.stringify(patientInfo));
            
            if(count===null){
         count=0;
           }
           
           else{
count++;}


            localStorage.setItem("count",count); 
            
   
            
        } else { //the array is NOT empty
            //loop through patient Id array 
            for(let i = 0; i < patientId.length; i++){
                if(patientId.includes(patientID) == false){
                    var patientFormat = {
                        id: patientID,
                        patientName: name,
                        patientAge: age,
                        patientEmail: email,
                        patientContact: contact
                    }
        
                    patientInfo.push(patientFormat);
                    localStorage.setItem("patientInfo",JSON.stringify(patientInfo));
                    
                   if(count===null){
                    count=0;
                 }
           
               else{
            count++;
                }
                    localStorage.setItem("count",count);                    
                }
            }
        }
        
        
    }
    

        //getters
        function getPatientInfo(){
            return patientInfo;
        }

        function getPatientIDs(){
            return patientId;
        }
        
        
    return{
     
        setPatientInfo,
        getPatientInfo,
        getPatientIDs,
        
    }

}