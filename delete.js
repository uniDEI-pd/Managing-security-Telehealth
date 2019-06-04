Parse.initialize("SrUxt43yc86v3SsNa5BhaERYOz9awUfurvtobQsI"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "kqfaNcmDZPr8sMkFGgH5palkqJZ19xasHGHVbgYf"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Patient = Parse.Object.extend("Patient");

// Pass the name of the pet you want to delete
var textName = "myName";

readThenDelete();

function readThenDelete() {
    query = new Parse.Query(Patient);
    query.equalTo("name", textName);
    query.first({
        success: function (patient) {
            if (patient) {
                console.log('Patient found with name: ' + patient.get("name") + ' and date of birth: ' + patient.get("birth"));
                update(patient);
            } else {
                console.log("Nothing found, please try again");
                return null;
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

function update(foundPatient) {
    foundPatient.destroy({
        success: function(response) {
            console.log('Patient '+ foundPatient.get("name") + ' erased successfully');
        },
        error: function(response, error) {
            console.log('Error: '+ error.message);
        }
    });
}
