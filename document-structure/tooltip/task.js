let has_tooltip = Array.from(document.querySelectorAll('.has-tooltip'));

has_tooltip.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        let tooltipValue = element.getAttribute('title');

        let tooltipContainer = document.createElement('div'); 
        tooltipContainer.textContent = tooltipValue;
        tooltipContainer.classList.add('tooltip_active'); 
        document.body.appendChild(tooltipContainer); 

        setTimeout(() => {
            tooltipContainer.remove(); // Remove the tooltip after a short delay
        }, 2000); // You can adjust the delay time as needed
    });
});

