var nameTmp =localStorage.getItem('PatientToShowName');
var genderTmp = localStorage.getItem('PatientToShowGender');
var birthTmp =localStorage.getItem('PatientToShowBirth');
var phoneTmp =localStorage.getItem('PatientToShowPhone');
var addressTmp =localStorage.getItem('PatientToShowAddress');
var textTmp =localStorage.getItem('PatientToShowTextarea');

document.getElementById("patientNameToGet").innerHTML = nameTmp;
document.getElementById("patientGenderToGet").innerHTML = genderTmp;
document.getElementById("patientBirthToGet").innerHTML = birthTmp;
document.getElementById("patientPhoneToGet").innerHTML = phoneTmp;
document.getElementById("patientAddressToGet").innerHTML = addressTmp;
document.getElementById("patientTextareaToGet").innerHTML = textTmp;
