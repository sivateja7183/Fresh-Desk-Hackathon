async function getApiData() {
    var getTickets = await fetch('https://newaccount1621387623630.freshdesk.com///api/v2/tickets', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('6r2255N1qoNHoOwIN' + ":" + '6r2255N1qoNHoOwIN')
            }
        });
    var tickets = await getTickets.json();
    console.log(tickets);
    
    var openCount = 0;
    var responderCount = 0;
    var pendingCount = 0;
    tickets.forEach(e=>{
        if(e.status == 2){
            openCount++;
        }
        if(e.responder_id === null){
            responderCount++;
        }
        if(e.status == 3){
            pendingCount++;
        }
    })

    document.getElementById("ticketCount").innerHTML = tickets.length;
    document.getElementById("openCount").innerHTML = openCount;
    document.getElementById("holdCount").innerHTML = pendingCount;
    document.getElementById("unassignedCount").innerHTML = responderCount;

    //have to add overdue and due today
}
