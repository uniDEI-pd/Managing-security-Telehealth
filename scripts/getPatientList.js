
Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize('SrUxt43yc86v3SsNa5BhaERYOz9awUfurvtobQsI', 'kqfaNcmDZPr8sMkFGgH5palkqJZ19xasHGHVbgYf', 'Cuj1kL9Lvi52QSZSWDtrrCecFYP6LZ96WzY9FatS');




function getPatientList() {

//document.getElementById('todos-list').replaceWith('<tbody id="todos-list"></tbody>');

const foo = document.getElementById('todos-list');

while(foo.children.length != 0)
{
  foo.children[0].remove();
}


const todosAreaEl=  document.getElementById('todos-list');


const Patient = Parse.Object.extend('Patient');
const query = new Parse.Query(Patient);

query.find().then((results) => {
  // You can use the "get" method to get the value of an attribute
  // Ex: response.get("<ATTRIBUTE_NAME>")
  if (typeof document !== 'undefined')
  {
    //document.write(`Patient found: ${JSON.stringify(results)}`);
    results.forEach(function(todo)
    {
        var obj = JSON.parse(JSON.stringify(todo));
        const todoEl = `
        <tr>
        <th>${obj.name}</th>
        <th>${obj.gender}</th>
        <th>${obj.birth}</th>
        </tr>
        `;
        todosAreaEl.insertAdjacentHTML('beforeend',todoEl);
    });
  }
  console.log('Patient found', results);
}, (error) => {
  if (typeof document !== 'undefined') document.write(`Error while fetching Patient: ${JSON.stringify(error)}`);
  console.error('Error while fetching Patient', error);
});
;


}
