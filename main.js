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