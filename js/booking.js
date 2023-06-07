function Booking(){
    var patientInfo = [];
    var patientId = [];
    var qrcode={};

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
            console.log(patientId);
            
            //create a new qr code        
            qrcode = new QRCode("qrcode", patientID);
            
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
                     qrcode = new QRCode("qrcode", patientID);
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
        
        function  getQRCode(){
return "hello";
     }
    return{
        sendMail,
        setPatientInfo,
        getPatientInfo,
        getPatientIDs,
        getQRCode
    }

}