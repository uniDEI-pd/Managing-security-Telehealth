Parse.initialize("SrUxt43yc86v3SsNa5BhaERYOz9awUfurvtobQsI"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "kqfaNcmDZPr8sMkFGgH5palkqJZ19xasHGHVbgYf"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Patient = Parse.Object.extend("Patient");

submitPatientBtn.onclick = function() {
    getElements();
    if (submitPatientBtn.value === "Save") {
        createPatient();
    } else if (submitPatientBtn.value === "Search") {
        readPatient();
    } else if (submitPatientBtn.value === "Update") {
        updatePatient();
    } else if (submitPatientBtn.value === "Delete") {
        deletePatient();
    }
};

function createPatient() {
    if (textName === null || textName === "") {
        alert("Please type a patient name");
    } else if(textGender === null || textGender === "") {
        alert("Please type a gender");
    } else if(textBirth === null || textBirth === "") {
        alert("Please type a date of birth");
    } else if(textPhone === null || textPhone === "") {
        alert("Please type a phone number");
    } else if(textAddress === null || textAddress === "") {
        alert("Please type an address");
    } else {
        mypatient = new Patient();
        mypatient.set("name", textName);
        mypatient.set("gender", textGender);
        mypatient.set("birth", textBirth);
        mypatient.set("phone", textPhone);
        mypatient.set("address", textAddress);

        mypatient.save(null, {
            success: function (mypatient) {
                inputName.value = null;
                inputGender.value = null;
                inputBirth.value = null;
                inputPhone.value = null;
                inputAddress.value = null;
                textMessage.innerHTML = 'Patient created with name: ' + mypatient.get("name") + ' and date of birth: ' + mypatient.get("birth");
                alert('Patient created with success!');
            },
            error: function (response, error) {
                textMessage.innerHTML = error.message;
                alert('Error: ' + error.message);
            }
        });
    }
}

function readPatient() {
    findPatient = new Patient ();
    query = new Parse.Query(Patient);

    if (textName === null || textName === "") {
        alert("Please type a patient name to search");
    } else {
        query.equalTo("name", textName);
        query.first({
            success: function(mypatient) {
                if (mypatient) {
                    findPatient = mypatient;
                    textMessage.innerHTML = 'Patient name: ' + mypatient.get("name") + ' and date of birth: ' +
                    mypatient.get("birth");
                    updatePatientBtn.disabled = false;
                    deletePatientBtn.disabled = false;
                    inputName.value = null;
                    inputGender.value = null;
                    inputBirth.value = null;
                    inputPhone.value = null;
                    inputAddress.value = null;
                } else {
                    alert("Nothing found, please try again");
                }
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }
}

function updatePatient() {
  if (textName === null || textName === "") {
      alert("Please type a patient name");
  } else if(textGender === null || textGender === "") {
      alert("Please type a gender");
  } else if(textBirth === null || textBirth === "") {
      alert("Please type a date of birth");
  } else if(textPhone === null || textPhone === "") {
      alert("Please type a phone number");
  } else if(textAddress === null || textAddress === "") {
      alert("Please type an address");
  } else {
        findPatient.set('name', textName);
        findPatient.set("gender", textGender);
        findPatient.set("birth", textBirth);
        findPatient.set("phone", textPhone);
        findPatient.set("address", textAddress);
        findPatient.save(null, {
            success: function (response) {
                alert('Patient updated with objectId: ' + response.id);
                textMessage.innerHTML = 'Patient name: ' + response.get("name") + ', gender: ' +
                  response.get("gender") + ', date of birth: ' + response.get("birth") + ', phone: ' +
                   response.get("phone") + ', address: ' + response.get("address");

            },
            error: function (response, error) {
                alert('Error: ' + error.message);
            }
        });
    }
}

function deletePatient() {
    findPatient.destroy({
        success: function(response) {
            alert('Patient erased successfully');
            findPatient = null;
            textGender = null;
            textName = null;
            textBirth = null;
            textPhone = null;
            textAddress = null;
            textMessage = null;
            inputName.value = null;
            inputGender.value = null;
            inputBirth.value = null;
            inputPhone.value = null;
            inputAddress.value = null;
            updatePatientBtn.disabled = true;
            deletePatientBtn.disabled = true;
            readBtn();
        },
        error: function(response, error) {
            alert('Error: '+ error.message);
        }
    });
}
