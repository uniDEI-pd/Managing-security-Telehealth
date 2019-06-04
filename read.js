Parse.initialize("SrUxt43yc86v3SsNa5BhaERYOz9awUfurvtobQsI"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "kqfaNcmDZPr8sMkFGgH5palkqJZ19xasHGHVbgYf"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Patient = Parse.Object.extend("Patient");

// Pass the name you want to search on the database
var textName = "myName";
var textGender = "myGender";
var textBirth = 761996;
var textPhone = 123456;
var textAddress = "myAddress";
var textPassword = "myPassword";
var textTextArea = "myTextArea";

read();

function read() {
    query = new Parse.Query(Patient);
    query.equalTo("name", textName);
    query.first({
        success: function (patient) {
            if (patient) {
                console.log('Patient found successful with name: ' + patient.get("name") + ' and date of birth: ' + patient.get("birth"));
            } else {
                console.log("Nothing found, please try again");
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    });
}
