document.addEventListener('DOMContentLoaded', function() {
    const statuses = [
        { text: 'Solicitud enviada', class: 'status-enviada' },
        { text: 'Solicitud cancelada', class: 'status-cancelada' },
        { text: 'Solicitud respondida', class: 'status-respondida' }
    ];
    
    const items = [
        'status-1A2B3C', 'status-2B3C4D', 'status-3C4D5E', 
        'status-5E6F7G', 'status-7G8H9I', 'status-10J11K12L'
    ];

    items.forEach((item) => {
        setInterval(() => {
            const element = document.getElementById(item);
            // Generate a random index to select a random status
            const randomIndex = Math.floor(Math.random() * statuses.length);
            const status = statuses[randomIndex];
            // Remove all status classes
            element.classList.remove('status-enviada', 'status-cancelada', 'status-respondida');
            // Add current status class
            element.classList.add(status.class);
            // Update text content
            element.textContent = status.text;
        }, 3500); // Cambia el estatus cada 5 segundos
    });
});
