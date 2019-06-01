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

readThenUpdate();

function readThenUpdate() {
    query = new Parse.Query(Patient);
    query.equalTo("name", textName);
    query.first({
        success: function (patient) {
            if (patient) {
                console.log('Patient found with name: ' + patient.get("name") + ' and date of birth: ' + patient.get("birth"));
                update(patient);
            } else {
                console.log("Nothing found, please try again");
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    });
}

function update(foundPatient) {
    foundPatient.set("name", textName);
    foundPatient.set("gender", textGender);
    foundPatient.set("birth", textBirth);
    foundPatient.set("phone", textPhone);
    foundPatient.set("address", textAddress);

    foundPatient.save(null, {
        success: function (patient) {
            console.log('Patient updated! Name: ' + patient.get("name") + ', new gender: ' + patient.get("gender") + ', new date of birth: ' + patient.get("birth") + ', new phone: ' + patient.get("phone") + ', new address: ' + patient.get("address"));
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}
