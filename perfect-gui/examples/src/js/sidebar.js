/**
 * Handles smooth scrolling for sidebar items with an offset.
 */
export default function sidebar() {
    const items = document.querySelectorAll('.sidebar__item, .sidebar__title');

    items.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 20;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL hash without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // Make the logo clickable to scroll to top
    const logo = document.querySelector('.sidebar__logo span');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Clear URL hash
            history.pushState(null, null, window.location.pathname);
        });
    }
}
