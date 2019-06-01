Parse.initialize("SrUxt43yc86v3SsNa5BhaERYOz9awUfurvtobQsI"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "kqfaNcmDZPr8sMkFGgH5palkqJZ19xasHGHVbgYf"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

function login() {

    var Patient = Parse.Object.extend("Patient");
    var Doctor = Parse.Object.extend("Doctor");

    var textName = document.getElementById("usr").value;
    var textPass = document.getElementById("pwd").value;

    queryPatient = new Parse.Query(Patient);
    queryPatient.equalTo("name", textName);
    queryPatient.first().then(function(patient){
       if(patient && patient.get("name") == textName && patient.get("gender") == textPass)
       {
          alert('patient');
          window.location='patient.html';
       }
       else {
           queryDoctor = new Parse.Query(Doctor);
           queryDoctor.equalTo("name", textName);
           queryDoctor.first().then(function(doctor){
               if(doctor && doctor.get("name") == textName && doctor.get("password") == textPass)
                 {
                   alert('doctor');
                   window.location='doctor.html';
                 }
               else {
                 alert('No user or doctor with these credentials');
               }
           }).catch(function(error){
               alert("Error: " + error.code + " " + error.message);
           });
         }
        }).catch(function(error){
            alert("Error: " + error.code + " " + error.message);
    });


}
