var mypatient, textName, textGender, textBirth, textPhone, textAddress, textPassword, textTextArea, textMessage, query, findPatient;

//buttons and form
var createPatientBtn = document.getElementById("create");
var readPatientBtn = document.getElementById("read");
var updatePatientBtn = document.getElementById("update");
var deletePatientBtn = document.getElementById("delete");
var submitPatientBtn = document.getElementById("submit");

createPatientBtn.onclick = createBtn;
readPatientBtn.onclick = readBtn;
updatePatientBtn.onclick = updateBtn;
deletePatientBtn.onclick = deleteBtn;

function createBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Create New Patient";
  submitPatientBtn.value = "Save";
  inputName.disabled = false;
  input_gender.disabled = false;
  input_birth.disabled = false;
  input_phone.disabled = false;
  input_address.disabled = false;
  input_password.disabled = false;
  input_textarea.disabled = false;
  updatePatientBtn.disabled = true;
  deletePatientBtn.disabled = true;
}

function readBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Search Patient";
  inputName.disabled = false;
  input_gender.value = null;
  input_gender.disabled = true;
  input_birth.value = null;
  input_birth.disabled = true;
  input_phone.value = null;
  input_phone.disabled = true;
  input_address.value = null;
  input_address.disabled = true;
  input_password.value = null;
  input_password.disabled = true;
  input_textarea.value = null;
  input_textarea.disabled = true;
  // updatePatient.disabled = true;
  // deletePatient.disabled = true;
  submitPatientBtn.value = "Search";
}

function updateBtn () {
  getElements();
  textMessage.innerHTML = "Patient id = " + findPatient.id + " and date of birth = " + findPatient.get("birth");
  form_title.innerHTML = "Update Patient";
  submitPatientBtn.value = "Update";
  inputName.disabled = true;
  input_gender.disabled = false;
  input_birth.disabled = false;
  input_phone.disabled = false;
  input_address.disabled = false;
  input_password.disabled = false;
  input_textarea.disabled = false;
  updatePatientBtn.disabled = false;
  deletePatientBtn.disabled = false;
  inputName.value = findPatient.get("name");
  inputGender.value = findPatient.get("gender");
  inputBirth.value = findPatient.get("birth");
  inputPhone.value = findPatient.get("phone");
  inputAddress.value = findPatient.get("address");
  inputPassword.value = findPatient.get("password");
  inputTextArea.value = findPatient.get("textarea");
}

function deleteBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Delete Patient";
  submitPatientBtn.value = "Delete";
  inputName.value = findPatient.get("name");
  inputName.disabled = true;
  inputGender.value = findPatient.get("gender");
  input_gender.disabled = true;
  inputBirth.value = findPatient.get("birth");
  input_birth.disabled = true;
  inputPhone.value = findPatient.get("phone");
  input_phone.disabled = true;
  inputAddress.value = findPatient.get("address");
  input_address.disabled = true;
  inputPassword.value = findPatient.get("password");
  input_password.disabled = true;
  inputTextArea.value = findPatient.get("textarea");
  input_textarea.disabled = true;
}

function getElements () {
    inputName = document.getElementById("input_name");
    inputGender = document.getElementById("input_gender");
    inputBirth = document.getElementById("input_birth");
    inputPhone = document.getElementById("input_phone");
    inputAddress = document.getElementById("input_address");
    inputPassword = document.getElementById("input_password");
    inputTextArea = document.getElementById("input_textarea");
    textName = document.getElementById("input_name").value;
    textGender = document.getElementById("input_gender").value;
    textBirth = document.getElementById("input_birth").value;
    textPhone = document.getElementById("input_phone").value;
    textAddress = document.getElementById("input_address").value;
    textPassword = document.getElementById("input_password").value;
    textTextArea = document.getElementById("input_textarea").value;
    textMessage = document.getElementById("message");
}
