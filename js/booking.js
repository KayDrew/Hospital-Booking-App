let uniqueID=localStorage.getItem("patientID");
let count=-1;

function Booking(){
    var patientInfo = [];
    var patientId = [];
   
   
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
            patientId.push(patientID);
            count++;
            localStorage.setItem("patientID",JSON.stringify(patientId));
            console.log(patientId);
            
   
            
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
                    patientId.push(patientID);
                    localStorage.setItem("patientID",JSON.stringify(patientId));
                    count++;
                     
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