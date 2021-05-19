var contacts=[]
function getContactsFromApi() {
    var getContacts = fetch('https://newaccount1621387623630.freshdesk.com///api/v2/contacts', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('6r2255N1qoNHoOwIN' + ":" + '6r2255N1qoNHoOwIN')
            }
        })
        .then(response => response.json())
        .then(data => {
            contacts=data
            console.log(data);
            return data;
        });

    return getContacts;
}

function loadContacts() {
    var contacts = getContactsFromApi();
    contacts.then(e => {
        e.forEach(data => {
            var tableRow = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.setAttribute("class", "block");
            td1.setAttribute("id", "nameInfo");
            td1.innerHTML = data.name;
            var td2 = document.createElement("td");
            td2.setAttribute("class", "block");
            td2.setAttribute("id", "phoneInfo");
            td2.innerHTML = data.phone;
            var td3 = document.createElement("td");
            td3.setAttribute("class", "block");
            td3.setAttribute("id", "mailInfo");
            td3.innerHTML = data.email;
            var td4 = document.createElement("td");
            td4.setAttribute("class", "block");
            td4.setAttribute("id", "jobInfo");
            td4.innerHTML = data.job_title;
            var td5 = document.createElement("td");
            td5.setAttribute("class", "block");
            td5.setAttribute("id", "companyInfo");
            td5.innerHTML = data.company_id;
            var td6 = document.createElement("td");
            td6.setAttribute("class", "block");
            td6.setAttribute("id", "addressInfo");
            td6.innerHTML = data.address;
            tableRow.append(td1,td2,td3,td4,td5,td6);
            document.getElementById("tableContent").append(tableRow);
        })
    })
}

$('#contact-create-form').submit(function(e){
    e.preventDefault();
    var ContactName = document.getElementById("newContactName").value;
    var ContactPhone= document.getElementById("newContactPhone").value;
    var ContactMail = document.getElementById("newContactMail").value;
    var ContactJob =  document.getElementById("newContactJob").value;
var ContactCompany=   document.getElementById("newContactCompany").value;
    var ContactAddress = document.getElementById("newContactAddress").value;
    var ContactData = {
        ContactName,
        ContactPhone,
        ContactMail,
        ContactJob,
        ContactCompany,
        ContactAddress
    };
    console.log(ContactData);

    $('#tableContent').append(`<tr><td class="block" id="nameInfo">${ContactName}</td><td class="block" id="phoneInfo">${ContactPhone}</td><td class="block" id="mailInfo">${ContactMail}</td><td class="block" id="jobInfo">${ContactJob}</td><td class="block" id="companyInfo">${ContactCompany}</td><td class="block" id="addressInfo">${ContactAddress}</td></tr>`)
document.getElementById("newContactName").value="";
document.getElementById("newContactPhone").value="";
document.getElementById("newContactMail").value="";
document.getElementById("newContactJob").value="";
document.getElementById("newContactCompany").value="";
document.getElementById("newContactAddress").value="";
})

 