let uniqueID=localStorage.getItem("patientID");
let count=-1;

function Booking(){
    var patientInfo = [];
    var patientId = [];
   
   
    function setPatientInfo(patientID, name, surname, age, email, contact){
        if(patientInfo.length === 0){
            var patientFormat = {
                id: patientID,
                patientName: name,
                patientSurname: surname,
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
                        patientSurname: surname,
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
    
    //function  for sending email
    function  sendMail(name,fromName,email,subject,message){
            
        var params={
            name: name,
            from_name: "Baragwanath Hospital Management",
            email: email,
            subject:subject,
            message: message
        }

        const serviceID="service_jjy4npj";
        const templateID="template_nm641b6";

        emailjs.send(serviceID,templateID,params).
        then(
            res=>{
            name.value="";
            email.value="";
            message.value="";
            console.log(res);

            alert("email sent successfully!");

            return "sent successfully";
            }

        ).catch((err)=> console.log(err));
            
    }

        //getters
        function getPatientInfo(){
            return patientInfo;
        }

        function getPatientIDs(){
            return patientId;
        }
        
        
    return{
        sendMail,
        setPatientInfo,
        getPatientInfo,
        getPatientIDs,
        
    }

}