//Task 2: Fetch Tickets Using Async/Await and Handle Errors
async function fetchUnresolvedTickets() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Network response error: ' + response.statusText);
        }

        const tickets = await response.json();

        if (tickets.length === 0) {
            throw new Error('No unresolved tickets found.');
        }}}

        //Task 3: Display Tickets Dynamically on the Page
        function displayTickets(tickets) {
    const container = document.getElementById('ticket-container');
  
tickets.forEachticket => {
        const ticketDiv = document.createElement('div');
        ticketDiv.classList.add('ticket');
        ticketDiv.innerHTML = `
            <h2>Ticket ID: ${ticket.id}</h2>
            <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>
        `;
        
        }};