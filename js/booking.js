function Booking(){

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


    return{
        sendMail
    }

}