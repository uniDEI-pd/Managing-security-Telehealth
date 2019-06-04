Parse.initialize("SrUxt43yc86v3SsNa5BhaERYOz9awUfurvtobQsI"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "kqfaNcmDZPr8sMkFGgH5palkqJZ19xasHGHVbgYf"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Patient = Parse.Object.extend("Patient");

// Test with different values of name and age and see the ParseDashboard to see the changes
var textName = "myName";
var textGender = "myGender";
var textBirth = 761996;
var textPhone = 123456;
var textAddress = "myAddress";
var textPassword = "myPassword";
var textTextArea = "myTextArea";

create();

function create() {
    mypatient = new Patient();
    mypatient.set("name", textName);
    mypatient.set("gender", textGender);
    mypatient.set("birth", textBirth);
    mypatient.set("phone", textPhone);
    mypatient.set("address", textAddress);
    mypatient.set("password", textPassword);
    mypatient.set("textarea", textTextArea);

    mypatient.save(null, {
        success: function (patient) {
            console.log('Patient created successful with name: ' + patient.get("name") + ' and date of birth: ' + patient.get("birth"));
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}
