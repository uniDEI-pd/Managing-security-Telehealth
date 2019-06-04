# DECAMP final project

HW6 of the DECAMP "Security of eHealth Systems"

# Managing-security-Telehealth

The project is also on the Plunker platform, but it does not seem to be very stable. For an optimal user experience, download on gitHub the files and run **index.html**
> link to Plunker https://embed.plnkr.co/C0O62mhnvA66MKqAli1l/
 
## How-to
1) Only the doctor can create/update/delete new patients, once authenticated. Patients can only have access to their personal page.
2) Before updating/deleting a patient, you have to first search that patient with the "Read" button. Once the patient is successfully loaded it is possible to update his/her data or delete him/her from the database.
3) For testing the app:<br>
List of already registered doctors with passwords:
    - NAME: Derek Shepherd   PASSWORD: derek
    - NAME: Cristina Yang    PASSWORD: cristina

For the patients you can find the complete list of registered patients in the doctor's page. To authenticate, put the name in the     correct field and the first name without capital letters as password (e.g. NAME: Michael Jordan   PASSWORD: michael).

### Known flaws
- If you manage to open the <em>doctor.html</em> page without passing through the login screen, you are able to modify the Patient registry.
- If you manage to open the <em>patient.html</em> page without passing through the login screen, you are able to see the last patient who logged in data.
