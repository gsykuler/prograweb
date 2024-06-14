function incrementCounter(elementId, target, duration) {
    const element = document.getElementById(elementId);
    let start = 0;
    const increment = target / (duration / 10); // Calculate increment

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = `+${Math.ceil(start)}`;
        } else {
            element.textContent = `+${target}`;
            clearInterval(interval); // Stop the interval when target is reached
        }
    };

    const interval = setInterval(updateCounter, 10); // Update every 10ms
}

function rotateCustomers(elementId, customers, intervalDuration) {
    const element = document.getElementById(elementId);
    let index = 0;

    const updateCustomer = () => {
        element.textContent = customers[index];
        index = (index + 1) % customers.length;
    };

    setInterval(updateCustomer, intervalDuration);
}

// Increment counters
incrementCounter('clients', 500, 2000); // Increment to 500 in 2 seconds
incrementCounter('courses', 1438, 2000); // Increment to 1438 in 2 seconds

// Rotate customers
const customers = ['Clarin', 'Banco Patagonia', 'Latam', 'Mcdonalds', 'Carrefour', 'Banco Santander', 'Techint', 'La Caja Seguros', 'Starbucks'];
rotateCustomers('customers', customers, 1500); // Rotate every 1.5 seconds
